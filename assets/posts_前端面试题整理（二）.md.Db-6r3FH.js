import{_ as s,c as i,o as e,ai as a}from"./chunks/framework.Cw7UrGgX.js";const g=JSON.parse('{"title":"前端面试题整理（二）","description":"","frontmatter":{"title":"前端面试题整理（二）","tags":["前端","面试","Vue","HTML","CSS","JavaScript"],"date":"2024-10-18T00:00:00.000Z"},"headers":[],"relativePath":"posts/前端面试题整理（二）.md","filePath":"posts/前端面试题整理（二）.md","lastUpdated":1742611062000}'),l={name:"posts/前端面试题整理（二）.md"};function n(h,t,r,k,p,d){return e(),i("div",null,t[0]||(t[0]=[a(`<h2 id="vue-router-的两种路由模式" tabindex="-1">Vue-Router 的两种路由模式？ <a class="header-anchor" href="#vue-router-的两种路由模式" aria-label="Permalink to &quot;Vue-Router 的两种路由模式？&quot;">​</a></h2><p>Vue-Router 支持两种路由模式：hash 和 history。</p><ul><li><strong>hash 模式</strong>：使用 URL 的 hash 来存储路由信息，即 URL 中会包含一个 # 符号，如：<a href="http://www.example.com/#/about%E3%80%82" target="_blank" rel="noreferrer">http://www.example.com/#/about。</a></li><li><strong>history 模式</strong>：使用 HTML5 的 history API 来存储路由信息，即 URL 中不会包含 # 符号，如：<a href="http://www.example.com/about%E3%80%82" target="_blank" rel="noreferrer">http://www.example.com/about。</a></li></ul><p>它们的区别如下：</p><table tabindex="0"><thead><tr><th style="text-align:center;">对比项</th><th style="text-align:center;">Hash 模式</th><th style="text-align:center;">History 模式</th></tr></thead><tbody><tr><td style="text-align:center;">URL 美观度</td><td style="text-align:center;">差</td><td style="text-align:center;">好</td></tr><tr><td style="text-align:center;">需要服务器支持</td><td style="text-align:center;">否</td><td style="text-align:center;">是</td></tr><tr><td style="text-align:center;">兼容性</td><td style="text-align:center;">几乎所有浏览器</td><td style="text-align:center;">需要支持 HTML5 的 history API</td></tr><tr><td style="text-align:center;">SEO 优化</td><td style="text-align:center;">差(部分爬虫忽略哈希)</td><td style="text-align:center;">较好</td></tr><tr><td style="text-align:center;">部署成本</td><td style="text-align:center;">低</td><td style="text-align:center;">高(需要服务器配合)</td></tr></tbody></table><blockquote><p>history 模式官方配置说明 <a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B" target="_blank" rel="noreferrer">服务器配置示例</a></p></blockquote><h2 id="vue-router-有哪些钩子函数-它们的执行顺序" tabindex="-1">Vue-Router 有哪些钩子函数？它们的执行顺序？ <a class="header-anchor" href="#vue-router-有哪些钩子函数-它们的执行顺序" aria-label="Permalink to &quot;Vue-Router 有哪些钩子函数？它们的执行顺序？&quot;">​</a></h2><h3 id="钩子函数类型" tabindex="-1">钩子函数类型 <a class="header-anchor" href="#钩子函数类型" aria-label="Permalink to &quot;钩子函数类型&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">​ 类型 ​</th><th style="text-align:left;">​ 钩子函数</th><th style="text-align:left;">​ ​ 触发时机 ​</th></tr></thead><tbody><tr><td style="text-align:left;">全局守卫</td><td style="text-align:left;">beforeEach</td><td style="text-align:left;">全局前置守卫，每次导航前触发</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">beforeResolve</td><td style="text-align:left;">全局解析守卫，导航被确认前触发（适合处理异步数据）</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">afterEach</td><td style="text-align:left;">全局后置钩子，导航完成后触发（无 next 参数）</td></tr><tr><td style="text-align:left;">路由独享守卫</td><td style="text-align:left;">beforeEnter</td><td style="text-align:left;">在单个路由配置中定义，进入该路由前触发</td></tr><tr><td style="text-align:left;">组件内守卫</td><td style="text-align:left;">beforeRouteEnter</td><td style="text-align:left;">进入组件前触发（无法访问实例）</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">beforeRouteUpdate</td><td style="text-align:left;">当前路由改变但组件复用时触发（如 /user/:id 参数变化）</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">beforeRouteLeave</td><td style="text-align:left;">离开组件前触发（常用于阻止用户未保存离开）</td></tr></tbody></table><h3 id="钩子函数执行顺序" tabindex="-1">钩子函数执行顺序 <a class="header-anchor" href="#钩子函数执行顺序" aria-label="Permalink to &quot;钩子函数执行顺序&quot;">​</a></h3><ol><li>导航被触发。</li><li><strong>在失活的组件里调用 beforeRouteLeave 守卫</strong>。</li><li><strong>调用全局的 beforeEach 守卫</strong>。</li><li>在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。</li><li><strong>在路由配置里调用 beforeEnter</strong>。</li><li>解析异步路由组件。</li><li><strong>在被激活的组件里调用 beforeRouteEnter</strong>。</li><li><strong>调用全局的 beforeResolve 守卫(2.5+)</strong>。</li><li>导航被确认。</li><li><strong>调用全局的 afterEach 钩子</strong>。</li><li>触发 DOM 更新。</li><li><strong>调用 beforeRouteEnter 守卫中传给 next 的回调函数</strong>，创建好的组件实例会作为回调函数的参数传入</li></ol><h2 id="vue-router-如何实现路由懒加载" tabindex="-1">Vue-Router 如何实现路由懒加载？ <a class="header-anchor" href="#vue-router-如何实现路由懒加载" aria-label="Permalink to &quot;Vue-Router 如何实现路由懒加载？&quot;">​</a></h2><p>Vue-Router 默认支持路由懒加载，即在需要时才加载路由组件，从而提高性能。 在 Vue-Router 中，路由的懒加载是通过<strong>动态导入</strong>组件来实现的。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./views/Home.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 动态导入组件</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> About</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./views/About.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 动态导入组件</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> routes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">	{</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/home</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> component</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">	{</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/about</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> component</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> About</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> router</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> createRouter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({})</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">router</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">addRoute</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">routes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> router</span></span></code></pre></div><p>在上面的代码中，<code>Home</code> 和 <code>About</code> 组件都是通过动态导入的方式定义的，即使用 <code>() =&gt; import(&#39;./views/Home.vue&#39;)</code> 的形式。 这样，当用户访问 <code>/home</code> 或 <code>/about</code> 路径时，相应的组件才会被加载，从而实现了路由懒加载。</p><blockquote><p>需要注意的是，路由的动态导入（即路由懒加载）​ <strong>必须依赖打包工具的支持</strong>才能实现真正的代码分割和按需加载。</p></blockquote>`,16)]))}const y=s(l,[["render",n]]);export{g as __pageData,y as default};
