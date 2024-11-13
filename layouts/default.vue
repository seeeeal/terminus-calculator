<template>
  <div>
    <div class="w-full mx-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="header max-w-7xl mx-auto">
          <h1 class="bio-title text-4xl font-bold" style="color: #bc4749">
            Terminus Calculator (BO6)
          </h1>
          <h2 class="bio-subtitle text-base mt-4" style="color: #bc4749">
            Your Solution to Zombies Mode Challenges - Select Values for x, y
            and z
          </h2>
        </div>
      </div>
    </div>

    <main class="w-full">
      <slot class="w-full" />
    </main>
    <footer class="w-full text-center py-4">
      © Copyright 2024. terminuscalculator.uk All rights reserved.
    </footer>
  </div>
</template>

<style scoped>
/* 标题区域 */
.header {
  text-align: sta;
  padding: 2rem 0;
}
</style>

  