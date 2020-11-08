# Javascript Test Bed Application to Tryout Things
This is my starter app with ES6 and webpack. I try out things here. 


--------------------------------------------
Steps to reproduce
--------------------------------------------
1. npm init -y
2. npm install --save-dev webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env babel-loader
3. npm install --save-dev sass-loader node-sass css-loader style-loader
4. npm install --save-dev mini-css-extract-plugin -> to build css into seperate file instead of loading it in .js In this case, style-loader is not needed
5. Add script "build": "webpack" in package.json
6. Create new file in root folder with name "webpack.config.js" and modify it

7. For async, await - use babel polyfill : 
npm install --save-dev @babel/polyfill
https://www.youtube.com/watch?v=iWUR04B42Hc
