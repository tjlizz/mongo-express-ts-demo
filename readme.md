# Create Project
```
 $ mkdir mongo-express-ts-demo
 $ cd  mongo-express-ts-demo
```
 
 使用npm初始化package.json文件
 ```
 $ npm init -y
 ```
# Hello, world!

  首先安装 `express`

  ```
  $ npm install express
  ```
  接下来选择你喜欢的编辑器开始编码吧

  创建一个名为`src`的文件夹，并在次文件夹中添加一个名为`index.js`的文件。内容如下

/src/index.js 
  ```

  const express = require( "express" );
const app = express();
const port = 8080;

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
  ```
接下来更新`package.json`指导`npm`如何运行程序，将`main`属性值更改为指向`src/index.js`，然后将`start`脚本添加到`scripts`对象。
```
 "main": "src/index.js",
  "scripts": {
    "start": "node .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
现在可以在终端中启动项目了

```
$ npm   start
```
如果一切顺利，此时应该看到终端中显示
```
server started at http://localhost:8080
```
启动浏览器输入`http://localhost:8080`可以看到文本`Hello world！`。

![](https://user-gold-cdn.xitu.io/2019/12/17/16f1185bce852024?w=442&h=192&f=png&s=8816)
# TypeScript

 老规矩，第一步还是先安装依赖
 ```
 $ npm install --save-dev typescript
 $  npm install --save-dev @types/node @types/express

 ```
 下一步是添加`tsconfig.json`文件
 
 tsconfig.json
 ```
 {
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*", "src/types/*"]
    }
  },
  "include": ["src/**/*"]
}

 ```
 > 配置的内容可自行搜索查询

 修改`/src.index.js`

 ```
import express , { Request, Response }  from "express" ;
const app = express();
const port = 8080; 

app.get( "/", ( req: Request, res: Response) => {
  res.send( "Hello world!" );
} );

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );
 ```

 如果你有代码整洁强迫症，添加`tslint`并创建一个`tslint.json`指示编辑器如何整理代码也是一个很好的方法。

 ```
 npm install --save-dev tslint
 ```
 下面我们创建`tslint.json`，添加以下配置
 ```
 {
  "rules": {
    "class-name": true,
    "comment-format": [true, "check-space"],
    "indent": [true, "spaces"],
    "one-line": [true, "check-open-brace", "check-whitespace"],
    "no-var-keyword": true,
    "quotemark": [true, "double", "avoid-escape"],
    "semicolon": [true, "always", "ignore-bound-class-methods"],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-module",
      "check-separator",
      "check-type"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      },
      {
        "call-signature": "onespace",
        "index-signature": "onespace",
        "parameter": "onespace",
        "property-declaration": "onespace",
        "variable-declaration": "onespace"
      }
    ],
    "no-internal-module": true,
    "no-trailing-whitespace": true,
    "no-null-keyword": true,
    "prefer-const": true,
    "jsdoc-format": true
  }
}

 ```
 > 配置内容可根据个人的习惯修改

 再次更新`package.json`中的内容
 ```
   "main": "dist/index.js",
  "scripts": {
    "prebuild": "tslint -c tslint.json -p tsconfig.json --fix",
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
 ```
 最后，将src/index.js文件的扩展名从.js更改.ts，然后运行启动脚本。
 ```
 npm run start
 ```

