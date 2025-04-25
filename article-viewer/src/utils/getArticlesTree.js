export function getArticlesTree() {
  const files = import.meta.glob('../articles/**/*.md');

  const tree = {};

  Object.keys(files).forEach((fullPath) => {
    const relativePath = fullPath.replace('../articles/', '');
    const parts = relativePath.split('/');
    const fileName = parts.pop().replace('.md', '');

    let current = tree;

    for (const folder of parts) {
      if (!current[folder]) current[folder] = {};
      current = current[folder];
    }

    if (!current.files) current.files = [];
    current.files.push({
      name: fileName,
      path: fullPath
    });
  });

  return tree;
}
