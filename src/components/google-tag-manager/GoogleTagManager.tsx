import React from 'react';
import TagManager from 'react-gtm-module';

interface GoogleTagManagerProps {
  gtmId: string;
}

const GoogleTagManager = ({ gtmId }: GoogleTagManagerProps) => {
  React.useEffect(() => {
    if (process.env.NEXT_PUBLIC_APP_ENV !== 'production') {
      return console.log('🚫 => NAO INICIANDO GOOGLE TAG MANAGER');
    } else {
      TagManager.initialize({ gtmId });
    }
  }, [gtmId]);

  return null;
};

export default GoogleTagManager;
