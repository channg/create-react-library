#!/usr/bin/env node
const node_modules = require('get_node_modules_path');
var colors = require('colors');
const spawn = require('cross-spawn');
console.log('🙈     create-react是一个快捷创建react组件包开发环境的脚手架'.bold)
console.log('🙉     方便的为你装配好了多种配置模式'.bold)
console.log('🙊     支持HMR，命令式调用components，可选择css in js'.bold)
console.log('🐵     方便的打包，调试，让使用者只关心开发功能'.bold)

const child = spawn.sync(node_modules()+'/.bin/coir', ['i', 'create-react-library'], { stdio: 'inherit' });
console.log('')
console.log('✨     cd Your_Project'.bold)
console.log('✨     npm install'.bold)
console.log('✨     npm run start'.bold)