import { RefObject, useEffect, useState } from "react";

/**
 * Tracks reading progress within a specific scrollable container element.
 * @param containerRef - A ref object attached to the scrollable container element (the one with overflow: auto/scroll).
 * @param contentRef - A ref object attached to the content element inside the container.
 * @returns The reading progress as a percentage (0-100), or 0 if the elements are not available or not scrollable.
 */
export function useContainerReadingProgress(
    containerRef: RefObject<HTMLElement | null>,
    contentRef: RefObject<HTMLElement | null>
  ): number {
    const [progress, setProgress] = useState<number>(0);
  
    useEffect(() => {
      const container = containerRef.current;
      const content = contentRef.current;
  
      if (!container || !content) {
        setProgress(0);
        return;
      }
  
      const handleScroll = () => {
        const scrollableHeight = container.scrollHeight - container.clientHeight;
  
        if (scrollableHeight <= 0) {
          setProgress(0);
          return;
        }
  
        const scrollTop = container.scrollTop;
  
        const scrollProgress = (scrollTop / scrollableHeight) * 100;
  
        setProgress(Math.max(0, Math.min(100, scrollProgress)));
      };
  
      container.addEventListener('scroll', handleScroll);
  
      handleScroll();
  
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
  
    }, [containerRef, contentRef]);
  
    return Math.round(progress);
  }
  