<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onContentUpdated, useRouter } from "vitepress";

// const { route, go } = useRouter();
function deleteChild() {
  const element = document.querySelector("#gitalk-container");
  let child = element?.lastElementChild;
  while (child) {
    element?.removeChild(child);
    child = element?.lastElementChild;
  }
}
onContentUpdated(() => {
  // reset gittalk element for update
  deleteChild();
  const gitalk = new Gitalk({
    clientID: "21ba97714c82cd5e7db9",
    clientSecret: "48f2ba380ac4ea8d698915b319f0d2e618c8299a",
    repo: "vitepress-blog-comments",
    owner: "jianhua1996",
    admin: ["jianhua1996"],
    id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
    language: "zh-CN",
    distractionFreeMode: false, // Facebook-like distraction free mode
  });
  gitalk.render("gitalk-container");
});
</script>
<style scoped></style>
