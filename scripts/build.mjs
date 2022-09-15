import { defineConfig } from './base-config.mjs';
import { build } from 'vite';
import chalk from 'chalk';

(async () => {

  const defaultExternal = [
    '@iiif/vault',
    '@iiif/vault-helpers',
    '@iiif/parser',
    'redux',
    'typesafe-actions',
    'react',
    'react/jsx-runtime',
    'react-dom',
    'react-use',
    'react-use-measure',
    '@atlas-viewer/atlas',
    '@atlas-viewer/iiif-image-api',
    'react-iiif-vault',
  ];

  // Main UMD build.
  buildMsg('UMD');
  await build(
    defineConfig({
      entry: `src/npm.ts`,
      name: 'index',
      outDir: 'dist',
      globalName: 'CodexViewer',
      external: ['react', 'react-dom'],
      react: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    })
  );

  buildMsg('Libraries');
  await build(
    defineConfig({
      entry: `src/npm.ts`,
      name: 'index',
      outDir: 'dist/bundle',
      external: [...defaultExternal],
      react: true,
      react18: true,
    })
  );
  await build(
    defineConfig({
      entry: `src/npm.ts`,
      name: 'index',
      outDir: 'dist/react17',
      external: [...defaultExternal],
      react: true,
      react18: false,
    })
  );

  function buildMsg(name) {
    console.log(chalk.grey(`\n\nBuilding ${chalk.blue(name)}\n`));
  }
  function listItem(name) {
    console.log(chalk.gray(`- ${chalk.green(name)}`));
  }
})();
