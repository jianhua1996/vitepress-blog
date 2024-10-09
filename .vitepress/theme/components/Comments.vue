<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onContentUpdated, useRouter } from "vitepress";

// const { route, go } = useRouter();
function deleteChild(element: HTMLDivElement | null) {
  let child = element?.lastElementChild;
  while (child) {
    element?.removeChild(child);
    child = element?.lastElementChild;
  }
}
onContentUpdated(() => {
  // reset gittalk element for update
  const element = document.querySelector("#gitalk-container");
  if (!element) {
    return;
  }
  deleteChild(element);
  const gitalk = new Gitalk({
    clientID: import.meta.env.VITE_GITHUB_CLIENT_ID,
    clientSecret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
    repo: "vitepress-blog-comments",
    owner: "jianhua1996",
    admin: ["jianhua1996"],
    id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
    language: "zh-CN",
    distractionFreeMode: true, // Facebook-like distraction free mode
  });
  gitalk.render("gitalk-container");
});

</script>
<style scoped></style>
