---
title: 前端面试题整理：Vue篇（一）
tags:
    - 前端
    - 面试
    - Vue
    - HTML
    - CSS
    - JavaScript

date: 2024-10-17
---

## 对 Vue 框架的理解

### Vue 是什么?

Vue 是一个**响应式**的、**数据驱动**的 JavaScript 框架。

### Vue 为什么出现？Vue 的出现解决了什么问题？

在 Vue 这种响应式的框架出现之前，前端大致经历了几个发展阶段：

1. 完全静态页面时期，前端展示的内容通常只是一个静态的页面，没有什么动态特性
2. 早期的服务端渲染时期，以 jsp、asp、php 这种在服务端组织 HTML 代码为主的形式，前后端通常不分离，前端的工作包含在后端之中
3. JQuery + Ajax 时期，Ajax 的出现，也促使了前后端的分离，这时候前端可以通过 Ajax 的形式动态的从服务器获取内容，然后使用 JQuery 之类的库将获取到的数据通过 Dom 操作的形式更新到页面上
4. 现代 JavaScript 框架时期，Angular、React、Vue 等响应式框架出现，前端可以从 Dom 操作中分离，只关心数据和视图，响应式框架负责 Dom Diff（或脏检查）和更新

Vue 等响应式框架的出现，**解决的是原来前端需要频繁的通过 JQuery 或者原生 api 操作 Dom 来更新界面的问题**，Vue 等响应式框架出现后，前端可以**从 Dom 操作中分离出来，只需要关注数据和视图**就可以了。

### Vue 如何实现的响应式和数据驱动？

Vue 的响应式是通过**数据劫持**的相关 api 来实现的，2.0 是`Object.defineProperty`,3.0 是`Proxy`，数据驱动是通过**观察者模式**模式来实现的。

## 对 Vue 中双向绑定的理解

### 什么是双向绑定？

双向绑定指的是，当数据模型发生改变时，对应的视图也会自动发生改变，反过来，当视图有变化时，数据模型也会随之改变。

### 双向绑定的实现？

主要是通过**数据劫持**和**事件监听**

通过拦截数据模型的访问和修改，实现数据的自动同步。通过监听视图中的用户输入事件（如 input、change 等），实现视图到数据模型的同步。

## 对 SPA（单页面应用）的理解

### 什么是 SPA？

SPA（Single Page Application，单页应用）是一种 Web 应用程序的设计模式，它通过动态加载内容来实现页面的无刷新更新。SPA 的核心思想是在用户与应用程序交互时，只加载和更新必要的部分内容，而不是整个页面。这种设计模式可以提供更流畅的用户体验，减少页面加载时间，并提高应用程序的响应速度。

### SPA 的特点？

1. **无刷新页面更新**：SPA 通过动态加载内容来实现页面的无刷新更新，用户在浏览应用程序时不会看到页面重新加载的过程。

2. **前端路由**：SPA 通常使用前端路由（Front-End Routing）来管理页面导航。前端路由通过 JavaScript 来处理 URL 的变化，并根据 URL 加载相应的页面内容。

3. **前后端分离**：SPA 通常采用前后端分离的架构，前端负责页面渲染和用户交互，后端负责提供数据和服务。

4. **动态内容加载**：SPA 通过 AJAX、Fetch API 等技术动态加载内容，而不是通过传统的页面刷新来加载内容。

### SPA 的实现？

SPA 的实现
SPA 的实现通常依赖于以下几个核心技术：

-   **前端框架**：如 React、Vue.js、Angular 等，这些框架提供了组件化开发、状态管理和前端路由等功能，帮助开发者构建复杂的 SPA。

-   **前端路由**：如 React Router、Vue Router、Angular Router 等，这些库提供了前端路由功能，帮助开发者管理页面导航和 URL 变化。

-   **AJAX/Fetch API**：用于动态加载数据，实现页面的无刷新更新。

-   **状态管理**：如 Redux、Vuex、MobX 等，用于管理应用程序的状态，确保状态的一致性和可预测性。

## 为什么 Vue 中的 data 属性是一个函数而不是一个对象？

**避免**在组件重用时，**多个组件实例共享一个数据对象**，从而导致如果某个实例改变了 data 中的某个值，其他所有的实例都会受到影响的行为。

## Vue 组件之间传值有几种方式？

### 1. 父子组件之间传值

#### 父传子 - props

```html
<!-- 父组件 -->
<template>
	<ChildComponent :message="parentMessage" />
</template>

<script>
	import ChildComponent from './ChildComponent.vue'
	export default {
		components: {
			ChildComponent
		},
		data() {
			return {
				parentMessage: 'Hello from Parent!'
			}
		}
	}
</script>

<!-- 子组件 -->
<template>
	<div>{{ message }}</div>
</template>

<script>
	export default {
		props: {
			message: {
				type: String
			}
		}
	}
</script>
```

#### 子传父 - $emit

```html
<!-- 父组件 -->
<template>
	<ChildComponent @child-event="handleEvent" />
</template>

<script>
	import ChildComponent from './ChildComponent.vue'
	export default {
		components: {
			ChildComponent
		},
		methods: {
			handleEvent(data) {
				console.log(data) // 接收到的数据
			}
		}
	}
</script>

<!-- 子组件 -->
<template>
	<button @click="sendData">Send Data</button>
</template>

<script>
	export default {
		methods: {
			sendData() {
				this.$emit('child-event', 'Hello from Child!')
			}
		}
	}
</script>
```

### 2. 兄弟组件之间传值

#### 通过父组件作为中介（使用父组件的状态和方法）

```html
<!-- 父组件 -->
<template>
	<SiblingA @updateParentState="updateState" />
	<SiblingB :state="parentState" />
</template>

<script>
	import SiblingA from './SiblingA.vue'
	import SiblingB from './SiblingB.vue'

	export default {
		components: {
			SiblingA,
			SiblingB
		},
		data() {
			return {
				parentState: ''
			}
		},
		methods: {
			updateState(newState) {
				this.parentState = newState
			}
		}
	}
</script>

<!-- SiblingA -->
<template>
	<button @click="updateState">Update State</button>
</template>

<script>
	export default {
		methods: {
			updateState() {
				this.$emit('updateParentState', 'New State')
			}
		}
	}
</script>

<!-- SiblingB -->
<template>
	<div>{{ state }}</div>
</template>

<script>
	export default {
		props: {
			state: String
		}
	}
</script>
```

### 3. 全局事件总线

#### 创建一个全局的 Vue 实例作为事件中心，用于非父子关系的组件间通信。

```js
// eventBus.js
import Vue from 'vue';
export const EventBus = new Vue();

// 组件 A
import { EventBus } from './eventBus';

export default {
  methods: {
    sendData() {
      EventBus.$emit('global-event', 'Hello from Component A!');
    }
  }
};

// 组件 B
import { EventBus } from './eventBus';

export default {
  created() {
    EventBus.$on('global-event', this.handleEvent);
  },
  beforeDestroy() {
    EventBus.$off('global-event', this.handleEvent);
  },
  methods: {
    handleEvent(data) {
      console.log(data); // 接收到的数据
    }
  }
};
```

### 4. 全局状态管理（Vuex）

```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++
		}
	},
	actions: {
		increment({ commit }) {
			commit('increment')
		}
	},
	getters: {
		getCount: state => state.count
	}
})

// main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
	store,
	render: h => h(App)
}).$mount('#app')
```

```html
// 组件中使用
<template>
	<div>{{ $store.getters.getCount }}</div>
	<button @click="$store.dispatch('increment')">Increment</button>
</template>
```

### 5. ref 引用

#### 父组件可以通过 ref 属性引用子组件，并通过 $refs 访问子组件实例。

```html
<!-- 父组件 -->
<template>
	<ChildComponent ref="child" />
	<button @click="callChildMethod">Call Child Method</button>
</template>

<script>
	import ChildComponent from './ChildComponent.vue'
	export default {
		components: {
			ChildComponent
		},
		methods: {
			callChildMethod() {
				this.$refs.child.childMethod()
			}
		}
	}
</script>

<!-- 子组件 -->
<script>
	export default {
		methods: {
			childMethod() {
				console.log('Called child method')
			}
		}
	}
</script>
```

### 6. Provide/Inject

#### 上层组件通过 provide 选项提供数据，下层组件通过 inject 选项注入数据。

```html
<!-- 上层组件 -->
<template>
	<div>
		<ChildComponent />
	</div>
</template>

<script>
	export default {
		provide() {
			return {
				parentData: 'Hello from Parent!'
			}
		}
	}
</script>

<!-- 下层组件 -->
<template>
	<div>{{ parentData }}</div>
</template>

<script>
	export default {
		inject: ['parentData']
	}
</script>
```

## Vue 组件生命周期

Vue 组件的生命周期包括以下几个阶段：

1. **beforeCreate**：组件实例被创建之前调用。
2. **created**：组件实例被创建之后调用。
3. **beforeMount**：组件挂载之前调用。
4. **mounted**：组件挂载之后调用。
5. **beforeUpdate**：组件更新之前调用。
6. **updated**：组件更新之后调用。
7. **beforeDestroy**：组件销毁之前调用。
8. **destroyed**：组件销毁之后调用。

父子组件触发生命周期的顺序：

```markdown
挂载阶段:
父: beforeCreate → created → beforeMount
子: beforeCreate → created → beforeMount → mounted
父: mounted

更新阶段:
父: beforeUpdate
子: beforeUpdate → updated
父: updated

销毁阶段:
父: beforeDestroy
子: beforeDestroy → destroyed
父: destroyed
```

**父组件总是在子组件的 mouted、updated、destroyed 生命周期函数调用之后再调用自身对应的生命周期函数，如果子组件的生命周期函数中存在异步操作，也不会等待其执行完毕，而是会立即继续执行，即：**

1. 父 mounted → 在 所有子组件 mounted 之后
2. 父 updated → 在 所有子组件 updated 之后
3. 父 destroyed → 在 所有子组件 destroyed 之后

<ImageBuilder :source="['lifecycle.jpg']" />

## v-for 和 v-if 为什么不推荐放在一起

同时使用 v-for 和 v-if 会导致优先级不明显，在 vue2 中 v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中，造成性能浪费。

## watch 和 computed 的区别

|  特性  |        computed        |              watch               |
| :----: | :--------------------: | :------------------------------: |
|  目的  | 基于其他数据生成新的值 | 监听数据的变化，并执行相应的操作 |
| 返回值 |          必须          |              不需要              |
|  缓存  |         有缓存         |              无缓存              |

## nextTick 是什么，它的作用？

`nextTick` 是 Vue 提供的异步方法，用于 **​ 在下次 DOM 更新循环结束之后执行回调**。它解决了数据变化后 ​ 立即操作 DOM 可能获取旧状态 ​ 的问题。

### 为什么需要使用 nextTick？

由于 Vue 的异步更新机制，**Vue 在检测到数据变化时，不会立即更新 DOM**，而是开启一个队列，缓冲同一事件循环中的所有数据变更。
