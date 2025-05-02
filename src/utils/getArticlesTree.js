export function getArticlesFiles() {
  return import.meta.glob('../articles/**/*.md', { as: 'raw' });
}