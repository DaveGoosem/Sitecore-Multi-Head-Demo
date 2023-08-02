/**
 * Format string to url
 */
export const getFormattedUrl = (unformatted: string): string => {
  if (unformatted === null || unformatted === undefined) {
    return '';
  }

  let formatted = unformatted.replaceAll(' ', '-');
  formatted = formatted.replaceAll('&', '-');
  formatted = formatted.replaceAll(',', '-');

  return formatted.toLowerCase();
};

/**
 * Is internal/relative path
 * @param url
 * @returns
 */
export const isRelativeUrl = (url: string): boolean => {
  if (url === null || url === undefined) {
    return false;
  }

  return !url.startsWith('http');
};

/**
 * Generate the canonical url for page
 * @param canonicalUrl
 * @param currentPath
 * @returns
 */
export const getCanonicalUrl = (canonicalUrl: string, currentPath: string): string => {
  //if canonical field empty OR relative path
  if (!canonicalUrl) {
    return `${process.env.NEXT_PUBLIC_PUBLIC_URL + getFormattedUrl(currentPath)}`;
  } else if (isRelativeUrl(canonicalUrl)) {
    return `${process.env.NEXT_PUBLIC_PUBLIC_URL + getFormattedUrl(canonicalUrl)}`;
  }

  return canonicalUrl;
};

export const getUrlFromPath = (targetUrl: string): string => {
  const url = new URL(targetUrl);
  return targetUrl.replace(url.origin, '');
};

export const getAnchorUrlFromAnchor = (anchor: string | null): string => {
  if (!anchor) {
    return '';
  }

  return anchor?.replace(/[\s&]+/g, '-').toLowerCase();
};

export const getStringFromGuidString = (guidString: string): string => {
  return guidString.replace(/-/gi, '').toLowerCase();
};
