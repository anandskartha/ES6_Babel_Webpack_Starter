
https://www.youtube.com/watch?v=iWUR04B42Hc

--------------------------------------------
Steps to reproduce
--------------------------------------------
1. npm init -y
2. npm install --save-dev webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env babel-loader
3. npm install --save-dev css-loader style-loader
3. Add script "build": "webpack" in package.json
4. Create new file in root folder with name "webpack.config.js" and modify it

5. For async, await - use babel polyfill : 
npm install --save-dev @babel/polyfill