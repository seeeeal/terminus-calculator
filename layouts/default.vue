<template>
  <div>
    <div class="w-full mx-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="header max-w-7xl mx-auto">
          <a href="https://www.terminuscalculator.uk/">
            <h1 class="bio-title text-4xl font-bold" style="color: #bc4749">
              {{ $t('calculator.layout.header.title') }}
            </h1>
          </a>
          <h2 class="bio-subtitle text-base mt-4" style="color: #bc4749">
            {{ $t('calculator.layout.header.subtitle') }}
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
            <h3 class="text-xl font-semibold mb-4" style="color: #386641">
              {{ $t('calculator.layout.footer.contact.title') }}
            </h3>
            <div style="color: #386641">
              <p class="mb-2">
                {{ $t('calculator.layout.footer.contact.email_prefix') }}
                <a href="mailto:seeeeal@foxmail.com" class="hover:underline">seeeeal@foxmail.com</a>
              </p>
              <p>{{ $t('calculator.layout.footer.contact.description') }}</p>
            </div>
          </div>

          <!-- Right Column -->
          <div>
            <h3 class="text-xl font-semibold mb-4" style="color: #386641">
              {{ $t('calculator.layout.footer.privacy.title') }}
            </h3>
            <div class="space-y-2" style="color: #386641">
              <p>{{ $t('calculator.layout.footer.privacy.intro') }}</p>
              <ul class="list-disc pl-6 space-y-1">
                <li>{{ $t('calculator.layout.footer.privacy.points.data') }}</li>
                <li>{{ $t('calculator.layout.footer.privacy.points.cookies') }}</li>
                <li>{{ $t('calculator.layout.footer.privacy.points.local') }}</li>
                <li>{{ $t('calculator.layout.footer.privacy.points.sharing') }}</li>
                <li>{{ $t('calculator.layout.footer.privacy.points.account') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Copyright Bar -->
        <div class="border-t pt-4" style="border-color: #386641">
          <div class="text-center" style="color: #386641">
            {{ $t('calculator.layout.footer.copyright.text') }}
            <a style="color: #bc4749" href="https://www.terminuscalculator.uk/">terminuscalculator.uk</a>
            {{ $t('calculator.layout.footer.copyright.rights') }}
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

  