const fs = require('fs-extra');
const execSync = require('child_process').execSync;
const webpackCli = 'node_modules/.bin/webpack';
const args = '--config=build/webpack.config.js --progress --mode production';

fs.removeSync('dist/site');

execSync(`${webpackCli} ${args}  --configPath=site/webpack.desktop.config.js`, {
    stdio: 'inherit',
});

execSync(`${webpackCli} ${args}  --configPath=site/webpack.mobile.config.js`, {
    stdio: 'inherit',
});

fs.removeSync('docs');

fs.copy('dist/site', 'docs')
  .then(() => {
      console.log('build done!');
      console.log('');
      console.log('now you can push code to github for publish your web pages!');
    })
  .catch(err => console.error(err))
