<template>
  <div class="container">
    <NuxtLayout style="width: 100vw;">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">

</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, 
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f2e8cf;
}

#__nuxt {
  height: 100%;
}

/* 主容器样式 */
.container {
  font-family: 'Inter', sans-serif;
  background-color: #f2e8cf;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(56, 189, 248, 0.03) 0%,
    transparent 100%
  );
  min-height: 100vh;
  height: 100%;
  color: #386641;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
}
</style>
