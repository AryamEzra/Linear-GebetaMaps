import { useCallback, useEffect } from 'react';
import type { RefObject } from 'react';

export function useClickOutside(
  ref: RefObject<Element>,
  callback: (event: Event) => void,
  outerRef?: RefObject<Element>
): void {
  const handleClick = useCallback(
    (event: Event) => {
      if (
        outerRef &&
        outerRef.current &&
        !outerRef.current.contains(event.target as Node)
      )
        return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    },
    [callback, ref, outerRef]
  );
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [handleClick]);
}