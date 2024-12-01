import path from 'path';
import fs from 'fs';
import { globby } from 'globby';

function pathPrefix(level) {
  return '  '.repeat(level) + '*';
}

function printPath(oldPath, newPath, output) {
  const oldParts = oldPath.split(path.sep);
  const newParts = newPath.split(path.sep);

  for (let i = 0; i < newParts.length; i++) {
    const newPart = newParts[i];
    if (i >= oldParts.length || oldParts[i] !== newPart) {
      if (newPart) {
        output.push(`${pathPrefix(i)} **${newPart.replace('_', ' ')}**`);
      }
    }
  }

  return newPath;
}

function pathsToMarkdown(filePaths) {
  const output = [];
  let oldPath = '';

  filePaths.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  for (let filepath of filePaths) {
    const filename = path.basename(filepath);
    const directory = path.dirname(filepath);

    if (directory !== oldPath) {
      oldPath = printPath(oldPath, directory, output);
    }

    const indent = directory.split(path.sep).length;
    const prefix = pathPrefix(indent);

    // Remove the file extension and construct the URL-friendly path
    const name = path.basename(filename, path.extname(filename));
    const url = filepath.replace(/\\/g, '/'); // Ensure URLs use forward slashes

    output.push(`${prefix} [${name}](${url})`);
  }

  return output.join('\n');
}

// Get paths of all .js files while excluding irrelevant files and directories
(async () => {
  try {
    const filePaths = await globby([
      '**/*.js',
      '!node_modules/**',
      '!.github/**',
      '!**/test/**',
      '!**/*.test.js',
      '!**/*.manual-test.js',
      '!vitest.config.ts',
    ]);

    const markdown = pathsToMarkdown(filePaths);

    const outputPath = 'DIRECTORY.md';

    // Compare existing content to avoid unnecessary updates
    if (fs.existsSync(outputPath)) {
      const existingContent = fs.readFileSync(outputPath, 'utf8');
      if (existingContent.trim() === markdown.trim()) {
        console.log('No changes detected. Skipping write operation.');
        return;
      }
    }

    // Write updated markdown content
    fs.writeFileSync(outputPath, markdown + '\n', { encoding: 'utf8' });
    console.log('DIRECTORY.md updated successfully.');
  } catch (error) {
    console.error('Error updating DIRECTORY.md:', error);
  }
})();

  

    
  
