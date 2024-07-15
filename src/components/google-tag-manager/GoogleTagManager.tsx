'use client';

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

interface GoogleTagManagerProps {
  gtmId: string;
}

const GoogleTagManager = ({ gtmId }: GoogleTagManagerProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId });
  }, [gtmId]);

  return null;
};

export default GoogleTagManager;
