// GitHub Pages hosts this site under /<repo-name>/ (a "project site"), so any
// plain path like "/photo.jpg" needs that prefix added manually — Next.js only
// adds it automatically for next/link and next/image, not plain <img>/<a> tags.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBase(path: string) {
  return `${basePath}${path}`;
}
