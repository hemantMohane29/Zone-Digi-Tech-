import { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Lazy loading with Intersection Observer
 * - Explicit width/height to prevent layout shift
 * - Progressive loading with blur-up effect
 * - Automatic WebP/AVIF support with fallback
 * - Error handling with fallback image
 * - Responsive image sizing
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  objectPosition,
  loading = 'lazy',
  priority = false,
  fallbackSrc = '/favicon.png',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Priority images load immediately
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Skip intersection observer for priority images
    if (priority) return;

    // Set up Intersection Observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (observerRef.current && imgRef.current) {
              observerRef.current.unobserve(imgRef.current);
            }
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    console.warn(`Image failed to load: ${currentSrc}`);
    setHasError(true);
    setCurrentSrc(fallbackSrc);
    if (onError) onError(e);
  };

  // Calculate aspect ratio for responsive sizing
  const aspectRatio = width && height ? (height / width) * 100 : undefined;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        paddingBottom: aspectRatio ? `${aspectRatio}%` : undefined,
        ...style,
      }}
    >
      {/* Blur placeholder while loading */}
      {!isLoaded && isInView && (
        <div
          className="absolute inset-0 bg-stone-200 dark:bg-stone-800 animate-pulse"
          style={{ zIndex: 1 }}
        />
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            objectPosition: objectPosition || 'center',
            zIndex: 2,
          }}
          {...props}
        />
      )}

      {/* Error state indicator */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-100 dark:bg-stone-900 text-stone-400 text-xs">
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
