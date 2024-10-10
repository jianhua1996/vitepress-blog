<template>
  <div class="content">
    <img
      :src="theme.avator"
      class="avator animate__rubberBand animate__animated"
    />
  </div>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>
<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.avator {
  width: 165px;
  height: 165px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid var(--vp-avator-border);
}

@keyframes avator-transform {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.avator:hover {
  animation: 5s linear 0s infinite avator-transform;
}
</style>
