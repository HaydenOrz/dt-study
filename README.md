### TODO

- 设置 git 钩子
- 提升构建速度 happypack
- 完善 webpack 配置

### 关于 webpack

- `html-webpack-plugin` 打包 HTML 文件,可配置引入入口文件（默认引入 entry）
- `webpack-merge` webpack 配置文件分离合并
- `webpack.SourceMapDevToolPlugin` 配置 sourceMap
- `copy-webpack-plugin` 直接复制静态资源
- 具体请参考 [webpack 配置](https://www.webpackjs.com/configuration/)。

### 关于 babel

- `@babel/core babel` 核心库
- `@babel/preset-env` 提供 babel 的基本环境（一站式）
- `babel-loader` 用来转译 js 文件，但是对于 jsx/tsx/ts 等文件，需要做一些预处理，babel-loader 本身只识别 js 文件，在 babel-loader 运行时，会去读取.babelrc 或者 babel.config.json,在其中配置的 preset 则是用来预处理的包
- `@babel/preset-react` 转译 jsx 语法
- `@babel/preset-typescript` 转译 typescript
- `@babel/plugin-proposal-class-properties` 转换静态类属性以及使用属性初始值设定项语法声明的属性
- 添加 babelrc/babel.config.js/babel.config.json
- 具体请参考 [babel 配置](https://babel.docschina.org/docs/en/7.0.0/configuration/)

### 关于 css

- `css-loader` 将 css 转译成字符串，使 js 可以直接使用
- `style-loader` 将 css 代码用 style 标签的形式插入到页面中
- `mini-css-extract-plugin` 将 css 代码用 link 标签，以 css 文件的方式引入，配置时需 new plugin 以及添加 `MiniCssExtractPlugin.loader`
- `less/sass-loader` 编译 css 预处理器文件，同时需要安装 node-sass

##### 注意：

- 在使用 `MiniCssExtractPlugin` 时一直打包失败，不同版本的报错信息分别为：
  `MiniCssExtractPlugin@v0`: <font color="red">TypeError: Cannot read property 'split' of undefined</font>
  `MiniCssExtractPlugin@v1` : <font color="red">TypeError: compilation.getAssets is not a function or its return value is not iterable</font>

- 社区给出的解决方案中可行的是将`css-loader` 版本回退到 v3，原因未知

### 关于静态资源

- 方案一：使用`url-loader`或者`file-loader`
- 方案二：使用`copy-webpack-plugin` 直接将静态资源 copy 到 dist 文件夹

### 关于 TypeScript

- 安装`@types`系列包 其中包含了 ts 对于基础接口的定义 如对 react 组件中 setState 的定义
- 添加`tsconfig.json` TS 编译器在编译 TS 文件的时候都会先在项目根目录的 tsconfig.json 文件，根据该文件的配置进行编译
- 安装`@typescript-eslint`系列包 typescript eslint 语法检验相关包
- 具体请参考 [ts 配置](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

### 关于 eslint

- `eslint` eslint 核心包
- `eslint-plugin`系列包 eslint 对于 react、typescript、node 环境等的插件
- 添加`.eslintrc`文件 ，在其中配置
- 具体请参考 [eslint 配置](http://eslint.cn/docs/rules/)
