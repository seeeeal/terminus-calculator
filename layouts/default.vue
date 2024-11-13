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
    <footer class="w-full py-12 mt-8" style="background-color: #f2e8cf">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Main Footer Content -->
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <!-- Left Column -->
          <div>
            <h3 class="text-xl font-semibold mb-4" style="color: #386641">Contact Us</h3>
            <div style="color: #386641">
              <p class="mb-2">Email: <a href="mailto:seeeeal@foxmail.com" class="hover:underline">seeeeal@foxmail.com</a></p>
              <p>Feel free to reach out if you have any questions or suggestions about the Terminus Code Calculator (BO6).</p>
            </div>
          </div>

          <!-- Right Column -->
          <div>
            <h3 class="text-xl font-semibold mb-4" style="color: #386641">Privacy Policy</h3>
            <div class="space-y-2" style="color: #386641">
              <p>At Terminus Code Calculator (BO6), we take your privacy seriously:</p>
              <ul class="list-disc pl-6 space-y-1">
                <li>No personal data collection or storage</li>
                <li>No cookies or tracking mechanisms</li>
                <li>All calculations are performed locally in your browser</li>
                <li>No user information is shared with third parties</li>
                <li>No registration or account required</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Copyright Bar -->
        <div class="border-t pt-4" style="border-color: #386641">
          <div class="text-center" style="color: #386641">
            © Copyright 2024 terminuscalculator.uk - All rights reserved. The Terminus Code Calculator (BO6) is a free tool for the gaming community.
          </div>
        </div>
      </div>
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

  