# vue-element-plus

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 引入 element-plus
```
vue add element-plus
```
（使用该命令后会自行引入需要引入的文件以及增加相应的配置信息）

### svg.js使用
#### 解决svg.js 3.x的select、resize插件报错的问题

在node_modules/svg.select.js/dist/svg.select.js文件引入
```
import * as SVG from '@svgdotjs/svg.js'
```

新建svg.set.js文件，复制Set()函数
https://github.com/svgdotjs/svg.js/issues/1146#issuecomment-688646918

引入svg.set.js文件
```
import set from './svg.set.js'
```

官方提供的Demo源码中使用的svg.resize.js文件与npm install出来的svg.resize.js文件不一致，复制Demo中的resize.js文件
https://svgdotjs.github.io/svg.resize.js/demo/svg.resize.js

在node_modules/svg.resize.js/dist/svg.resize.js文件引入
```
import * as SVG from '@svgdotjs/svg.js'
```
