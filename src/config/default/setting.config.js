/**
 * @description 导出默认通用配置
 */
const setting = {
  // 开发以及部署时的URL，hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"，history模式默认使用"/"或者"/二级目录/"
  publicPath: '',
  // 生产环境构建文件的目录名
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  // 标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: 'vue-element-plus 管理系统',
  // 标题分隔符
  titleSeparator: ' - ',
  // 标题是否反转 如果为false:"page - title"，如果为true:"title - page"
  titleReverse: false,
  // 开发环境端口号
  devPort: '9999',
  // token名称
  tokenName: 'accessToken',
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: 'accessToken',
  // token存储位置localStorage sessionStorage cookie
  storage: 'localStorage',
  // 路由模式，可选值为 history 或 hash
  routerMode: 'hash',
  // 不经过token校验的路由
  routesWhiteList: ['/login', '/404', '/403'],
  // token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  // 是否开启登录拦截
  loginInterception: true,
  // intelligence（前端导出路由）和all（后端导出路由）两种方式
  authentication: 'all',
  // 是否开启roles字段进行角色权限控制（如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段）
  rolesControl: true,
  // 是否显示logo，不显示时设置false，显示时请填写remixIcon图标名称，暂时只支持设置remixIcon
  logo: 'vuejs-fill',
  // 语言类型zh、en
  i18n: 'zh',
}
module.exports = setting
