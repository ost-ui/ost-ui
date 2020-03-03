//npm run dev-mobile | npm run dev-desktop

var path = require('path');
var cp = require('child_process');

console.log('father process. PID:', process.pid);

var _server = path.resolve('build', 'server.js');

cp.fork(
  _server, 
  ['./site/webpack.mobile.config.js'],
  {
    stdio: 'inherit',
    cwd: path.resolve('build')
  }
);

cp.fork(
  _server, 
  ['./site/webpack.desktop.config.js'],
  {
    stdio: 'inherit',
    cwd: path.resolve('build')
  }
);

