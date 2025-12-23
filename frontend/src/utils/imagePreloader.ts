/**
 * Utility function to preload images
 * Forces browser to fetch and cache images before they're needed
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

/**
 * Preload multiple images
 */
export const preloadImages = async (srcs: string[]): Promise<void> => {
  try {
    await Promise.all(srcs.map(src => preloadImage(src)));
  } catch (error) {
    // Silently fail - images will still load normally via CSS
    console.warn('Some images failed to preload:', error);
  }
};

