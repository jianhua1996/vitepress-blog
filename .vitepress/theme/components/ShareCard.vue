<template>
  <div class="shareCard">
    <h1 class="title type-element">
      <span ref="typedTitle"></span>
    </h1>
    <p class="description">
      旨在记录自己作为一个前端工程师的日常.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Typed from 'typed.js';

const typedTitle = ref(null);

const options = {
  strings: ['你好👋，这里是jianhua1996的博客😊。', '欢迎你的到来🎉，这里记录着我的前端学习之路。'],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
}

onMounted(() => {
  const typed = new Typed(typedTitle.value, options);
});


</script>
<style scoped>
.shareCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  text-align: center;
}

.title {
  display: flex;
  align-items: center;
  font-size: 2.2em;
  font-weight: bold;
}

.description {
  margin: 1em 0;
}
</style>
