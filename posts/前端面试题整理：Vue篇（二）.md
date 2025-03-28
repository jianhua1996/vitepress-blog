---
title: 前端面试题整理：Vue篇（二）
tags:
    - 前端
    - 面试
    - Vue
    - HTML
    - CSS
    - JavaScript

date: 2024-10-18
---

## Vue-Router 的两种路由模式？

Vue-Router 支持两种路由模式：hash 和 history。

-   **hash 模式**：使用 URL 的 hash 来存储路由信息，即 URL 中会包含一个 # 符号，如：http://www.example.com/#/about。
-   **history 模式**：使用 HTML5 的 history API 来存储路由信息，即 URL 中不会包含 # 符号，如：http://www.example.com/about。

它们的区别如下：

|     对比项     |      Hash 模式       |         History 模式          |
| :------------: | :------------------: | :---------------------------: |
|   URL 美观度   |          差          |              好               |
| 需要服务器支持 |          否          |              是               |
|     兼容性     |    几乎所有浏览器    | 需要支持 HTML5 的 history API |
|    SEO 优化    | 差(部分爬虫忽略哈希) |             较好              |
|    部署成本    |          低          |      高(需要服务器配合)       |

> history 模式官方配置说明 [服务器配置示例](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B)

## Vue-Router 有哪些钩子函数？它们的执行顺序？

### 钩子函数类型

| ​ 类型 ​     | ​ 钩子函数        | ​ ​ 触发时机 ​                                        |
| :----------- | :---------------- | :---------------------------------------------------- |
| 全局守卫     | beforeEach        | 全局前置守卫，每次导航前触发                          |
|              | beforeResolve     | 全局解析守卫，导航被确认前触发（适合处理异步数据）    |
|              | afterEach         | 全局后置钩子，导航完成后触发（无 next 参数）          |
| 路由独享守卫 | beforeEnter       | 在单个路由配置中定义，进入该路由前触发                |
| 组件内守卫   | beforeRouteEnter  | 进入组件前触发（无法访问实例）                        |
|              | beforeRouteUpdate | 当前路由改变但组件复用时触发（如 /user/:id 参数变化） |
|              | beforeRouteLeave  | 离开组件前触发（常用于阻止用户未保存离开）            |

### 钩子函数执行顺序

1. 导航被触发。
2. **在失活的组件里调用 beforeRouteLeave 守卫**。
3. **调用全局的 beforeEach 守卫**。
4. 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
5. **在路由配置里调用 beforeEnter**。
6. 解析异步路由组件。
7. **在被激活的组件里调用 beforeRouteEnter**。
8. **调用全局的 beforeResolve 守卫(2.5+)**。
9. 导航被确认。
10. **调用全局的 afterEach 钩子**。
11. 触发 DOM 更新。
12. **调用 beforeRouteEnter 守卫中传给 next 的回调函数**，创建好的组件实例会作为回调函数的参数传入

## Vue-Router 如何实现路由懒加载？

Vue-Router 默认支持路由懒加载，即在需要时才加载路由组件，从而提高性能。
在 Vue-Router 中，路由的懒加载是通过**动态导入**组件来实现的。

```javascript
const Home = () => import('./views/Home.vue') // 动态导入组件
const About = () => import('./views/About.vue') // 动态导入组件
const routes = [
	{ path: '/home', component: Home },
	{ path: '/about', component: About }
]
const router = createRouter({})
router.addRoute(routes)
export default router
```

在上面的代码中，`Home` 和 `About` 组件都是通过动态导入的方式定义的，即使用 `() => import('./views/Home.vue')` 的形式。
这样，当用户访问 `/home` 或 `/about` 路径时，相应的组件才会被加载，从而实现了路由懒加载。

> 需要注意的是，路由的动态导入（即路由懒加载）​ **必须依赖打包工具的支持**才能实现真正的代码分割和按需加载。
