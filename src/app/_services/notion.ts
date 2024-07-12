'use server';

import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

import { NotionDatabaseResponse } from '../_types/notion';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID as string;

  const response = (await notion.databases.query({
    database_id: databaseId,
    filter: { or: [{ checkbox: { equals: true }, property: 'published' }] },
  })) as unknown as NotionDatabaseResponse;

  return response.results.map(post => {
    return {
      createdAt: post.created_time,
      id: post.id,
      published: post.properties.published.checkbox,
      slug: post.properties.slug.rich_text[0].plain_text,
      tags: post.properties.tags.multi_select,
      title: post.properties.title.title[0].plain_text,
    };
  });
}

export async function getPost(slug: string) {
  const databaseId = process.env.NOTION_DATABASE_ID as string;

  const response = (await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'slug',
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  })) as unknown as NotionDatabaseResponse;

  if (!response.results.length) {
    return null;
  }

  const pageId = response.results[0].id;

  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    content: mdString.parent,
    createdAt: response.results[0].created_time,
    id: pageId,
    tags: response.results[0].properties.tags.multi_select.map(tag => tag.name),
    title: response.results[0].properties.title.title[0].plain_text,
  };
}
