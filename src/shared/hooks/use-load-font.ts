import type { FontMetadataType } from '@shared/types/font';
import { useEffect, useState } from 'react';

import { loadFont } from '../fonts/font-loader';

interface UseLoadFontOptions {
  enabled?: boolean;
}

export const useLoadFont = (
  meta: FontMetadataType,
  options?: UseLoadFontOptions,
) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const enabled = options?.enabled ?? true;

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let cancelled = false;

    loadFont(meta)
      .then(() => {
        if (!cancelled) {
          setIsLoaded(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setIsLoaded(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [meta, enabled]);

  return { isLoaded };
};
