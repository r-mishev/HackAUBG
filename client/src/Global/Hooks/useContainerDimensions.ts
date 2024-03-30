import { RefObject, useEffect, useRef, useState } from "react";

const useContainerDimensions = (
  elementRef: RefObject<HTMLDivElement>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  anotherProps?: React.ReactNode | any
) => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const observerRef = useRef<ResizeObserver>();

  const getDimensions = () => ({
    width: elementRef.current?.offsetWidth || 0,
    height: elementRef.current?.offsetHeight || 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };
    observerRef.current = new ResizeObserver(handleResize);

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
      setDimensions(getDimensions());
    }

    return () => {
      if (elementRef.current && observerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observerRef.current.unobserve(elementRef.current);
      }
      observerRef.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    elementRef.current?.offsetWidth,
    elementRef.current?.offsetHeight,
    anotherProps,
  ]);

  return dimensions;
};

export default useContainerDimensions;
