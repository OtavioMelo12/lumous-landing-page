export interface NotionDatabaseResponse {
  has_more: boolean;
  next_cursor: null | string;
  object: string;
  page_or_database: Pageordatabase;
  request_id?: string;
  results: Result[];
  type: string;
}

interface Pageordatabase {}

interface Result {
  archived: boolean;
  cover: null | string;
  created_by: Createdby;
  created_time: string;
  icon: null | string;
  id: string;
  in_trash: boolean;
  last_edited_by: Createdby;
  last_edited_time: string;
  object: string;
  parent: Parent;
  properties: Properties;
  public_url: null | string;
  url: string;
}

interface Properties {
  published: Published;
  slug: Slug;
  tags: Tags;
  title: Title;
}

interface Title {
  id: string;
  title: Richtext[];
  type: string;
}

interface Published {
  checkbox: boolean;
  id: string;
  type: string;
}

interface Slug {
  id: string;
  rich_text: Richtext[];
  type: string;
}

interface Richtext {
  annotations: Annotations;
  href: null | string;
  plain_text: string;
  text: Text;
  type: string;
}

interface Annotations {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
}

interface Text {
  content: string;
  link: null | string;
}

interface Tags {
  id: string;
  multi_select: Multiselect[];
  type: string;
}

interface Multiselect {
  color:
    | 'blue'
    | 'brown'
    | 'default'
    | 'gray'
    | 'green'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'yellow';
  id: string;
  name: string;
}

interface Parent {
  database_id: string;
  type: string;
}

interface Createdby {
  id: string;
  object: string;
}
