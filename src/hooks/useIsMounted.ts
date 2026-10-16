'use client';

import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * Clean SSR-safe hydration hook using React's useSyncExternalStore.
 * Avoids calling setState in useEffect (which triggers ESLint react-hooks/set-state-in-effect and cascading renders).
 */
export function useIsMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
