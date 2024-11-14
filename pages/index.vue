<template>
  <div class="w-full mx-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="main-content w-full mx-auto">
        <div class="variables-container w-full mx-auto md:mx-0 md:w-full">
          <!-- X变量部分 -->
          <div class="variable bio-section" id="x-variables">
            <h2 class="variable-title mx-auto text-center font-bold" style="color: #bc4749">
              {{ $t('calculator.variables.x') }}
            </h2>
            <div class="options-grid">
              <div class="image-option" @click="() => selectVariable('x', 0)">
                <img src="https://i.ibb.co/5rDRw30/symbols-01.jpg" alt="X-0" 
                  :class="{ selected: selectedImages.x === 0 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('x', 10)">
                <img src="https://i.ibb.co/PFmbJ00/symbols-02.jpg" alt="X-10" 
                  :class="{ selected: selectedImages.x === 10 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('x', 11)">
                <img src="https://i.ibb.co/FqXw4mG/symbols-03.jpg" alt="X-11" 
                  :class="{ selected: selectedImages.x === 11 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('x', 20)">
                <img src="https://i.ibb.co/TrNY7Qf/symbols-04.jpg" alt="X-20" 
                  :class="{ selected: selectedImages.x === 20 }" />
              </div>

              <div class="image-option" @click="() => selectVariable('x', 21)">
                <img src="https://i.ibb.co/jfYKRth/symbols-05.jpg" alt="X-21" 
                  :class="{ selected: selectedImages.x === 21 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('x', 22)">
                <img src="https://i.ibb.co/bXGth05/symbols-06.jpg" alt="X-22" 
                  :class="{ selected: selectedImages.x === 22 }" />
              </div>
            </div>
          </div>

          <!-- Y变量部分 -->
          <div class="variable bio-section" id="y-variables">
            <h2 class="variable-title mx-auto text-center font-bold" style="color: #bc4749">
              {{ $t('calculator.variables.y') }}
            </h2>
            <div class="options-grid">
              <div class="image-option" @click="() => selectVariable('y', 0)">
                <img src="https://i.ibb.co/5rDRw30/symbols-01.jpg" alt="Y-0" 
                  :class="{ selected: selectedImages.y === 0 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('y', 10)">
                <img src="https://i.ibb.co/PFmbJ00/symbols-02.jpg" alt="Y-10" 
                  :class="{ selected: selectedImages.y === 10 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('y', 11)">
                <img src="https://i.ibb.co/FqXw4mG/symbols-03.jpg" alt="Y-11" 
                  :class="{ selected: selectedImages.y === 11 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('y', 20)">
                <img src="https://i.ibb.co/TrNY7Qf/symbols-04.jpg" alt="Y-20" 
                  :class="{ selected: selectedImages.y === 20 }" />
              </div>

              <div class="image-option" @click="() => selectVariable('y', 21)">
                <img src="https://i.ibb.co/jfYKRth/symbols-05.jpg" alt="Y-21" 
                  :class="{ selected: selectedImages.y === 21 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('y', 22)">
                <img src="https://i.ibb.co/bXGth05/symbols-06.jpg" alt="Y-22" 
                  :class="{ selected: selectedImages.y === 22 }" />
              </div>
            </div>
          </div>

          <!-- Z变量部分 -->
          <div class="variable bio-section" id="z-variables">
            <h2 class="variable-title mx-auto text-center font-bold" style="color: #bc4749">
              {{ $t('calculator.variables.z') }}
            </h2>
            <div class="options-grid">
              <div class="image-option" @click="() => selectVariable('z', 0)">
                <img src="https://i.ibb.co/5rDRw30/symbols-01.jpg" alt="Z-0" 
                  :class="{ selected: selectedImages.z === 0 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('z', 10)">
                <img src="https://i.ibb.co/PFmbJ00/symbols-02.jpg" alt="Z-10" 
                  :class="{ selected: selectedImages.z === 10 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('z', 11)">
                <img src="https://i.ibb.co/FqXw4mG/symbols-03.jpg" alt="Z-11" 
                  :class="{ selected: selectedImages.z === 11 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('z', 20)">
                <img src="https://i.ibb.co/TrNY7Qf/symbols-04.jpg" alt="Z-20" 
                  :class="{ selected: selectedImages.z === 20 }" />
              </div>

              <div class="image-option" @click="() => selectVariable('z', 21)">
                <img src="https://i.ibb.co/jfYKRth/symbols-05.jpg" alt="Z-21" 
                  :class="{ selected: selectedImages.z === 21 }" />
              </div>
              <div class="image-option" @click="() => selectVariable('z', 22)">
                <img src="https://i.ibb.co/bXGth05/symbols-06.jpg" alt="Z-22" 
                  :class="{ selected: selectedImages.z === 22 }" />
              </div>
            </div>
          </div>
        </div>

        <div id="results" class="results-section w-full mb-8 mx-auto md:mx-0 md:w-full" 
          style="background-color: #f2e8cf">
          <h3 class="w-full mx-auto text-center" style="color: #bc4749">
            {{ $t('calculator.results.title') }}
          </h3>
          <div class="flex flex-row justify-around mt-2">
            <p id="result1" style="color: #386641">{{ $t('calculator.results.first_num') }}-</p>
            <p id="result2" style="color: #386641">{{ $t('calculator.results.second_num') }}-</p>
            <p id="result3" style="color: #386641">{{ $t('calculator.results.third_num') }}-</p>
          </div>
        </div>
      </div>

      <!-- 语言切换部分 -->
      <section class="w-full mb-16">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-wrap justify-center gap-4">
            <button v-for="locale in $i18n.locales" :key="locale.code"
              @click="$i18n.setLocale(locale.code)"
              class="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
              :class="[
                $i18n.locale === locale.code 
                  ? 'bg-[#386641] text-white' 
                  : 'bg-[#f2e8cf] text-[#386641] hover:bg-[#6a994e] hover:text-white'
              ]"
              style="border: 2px solid #386641">
              <span class="text-xl">{{ getFlag(locale.code) }}</span>
              <span class="font-medium">{{ locale.name }}</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 计算原理部分 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">
          {{ $t('calculator.how_it_works.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- 左侧说明文字 -->
          <div class="backdrop-blur-md rounded-xl p-6 border" 
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-4" style="color: #6a994e">
              {{ $t('calculator.how_it_works.process_title') }}
            </h3>
            <div class="space-y-4" style="color: #6a994e">
              <p>{{ $t('calculator.how_it_works.description') }}</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>{{ $t('calculator.how_it_works.variables_list.x') }}</li>
                <li>{{ $t('calculator.how_it_works.variables_list.y') }}</li>
                <li>{{ $t('calculator.how_it_works.variables_list.z') }}</li>
              </ul>
              <p class="mt-4 font-semibold">{{ $t('calculator.how_it_works.formula_title') }}</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>{{ $t('calculator.how_it_works.formulas.first') }}</li>
                <li>{{ $t('calculator.how_it_works.formulas.second') }}</li>
                <li>{{ $t('calculator.how_it_works.formulas.third') }}</li>
              </ul>
            </div>
          </div>

          <!-- 右侧示意图 -->
          <div class="space-y-6">
            <div class="backdrop-blur-md rounded-xl p-4 border" 
              style="border-color: #386641; background-color: #f2e8cf">
              <img src="https://i.ibb.co/1mjWNV9/terminus-map.jpg" 
                alt="Terminus Code Calculator In-game Screenshot"
                class="rounded-lg mb-4 mx-auto" style="width: 300px; height: auto;" />
              <p class="text-center italic" style="color: #6a994e">
                {{ $t('calculator.how_it_works.screenshot_caption') }}
              </p>
            </div>
            <div class="backdrop-blur-md rounded-xl p-6 border" 
              style="border-color: #386641; background-color: #f2e8cf">
              <h4 class="text-lg font-semibold mb-3" style="color: #6a994e">
                {{ $t('calculator.how_it_works.pro_tips.title') }}
              </h4>
              <ul class="list-disc pl-6 space-y-2" style="color: #6a994e">
                <li>{{ $t('calculator.how_it_works.pro_tips.tip1') }}</li>
                <li>{{ $t('calculator.how_it_works.pro_tips.tip2') }}</li>
                <li>{{ $t('calculator.how_it_works.pro_tips.tip3') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 概述部分 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">
          {{ $t('calculator.what_is.title') }}
        </h2>
        <div class="backdrop-blur-md rounded-xl p-6 border" 
          style="border-color: #386641; background-color: #f2e8cf">
          <p class="leading-relaxed" style="color: #6a994e">
            {{ $t('calculator.what_is.description') }}
          </p>
        </div>
      </section>

      <!-- 特点部分 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">
          {{ $t('calculator.features.title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="backdrop-blur-md rounded-xl p-6 border" 
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.features.free.title') }}
            </h3>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.features.free.description') }}
            </p>
          </div>
          <div class="backdrop-blur-md rounded-xl p-6 border" 
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.features.instant.title') }}
            </h3>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.features.instant.description') }}
            </p>
          </div>
          <div class="backdrop-blur-md rounded-xl p-6 border" 
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.features.accurate.title') }}
            </h3>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.features.accurate.description') }}
            </p>
          </div>
        </div>
      </section>

      <!-- 使用指南 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">
          {{ $t('calculator.how_to_use.title') }}
        </h2>
        <div class="space-y-4">
          <div class="flex items-center backdrop-blur-md rounded-xl p-0 border">
            <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4"
              style="background-color: #386641; color: #f2e8cf">1</span>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.how_to_use.step1') }}
            </p>
          </div>
          <div class="flex items-center backdrop-blur-md rounded-xl p-0 border">
            <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4"
              style="background-color: #386641; color: #f2e8cf">2</span>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.how_to_use.step2') }}
            </p>
          </div>
          <div class="flex items-center backdrop-blur-md rounded-xl p-0 border">
            <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4"
              style="background-color: #386641; color: #f2e8cf">3</span>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.how_to_use.step3') }}
            </p>
          </div>
        </div>
      </section>
      <!-- FAQ部分 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">{{ $t('calculator.faq.title') }}</h2>
        <div class="space-y-4">
          <!-- 免费使用 -->
          <div class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.faq.items.is_free.question') }}
            </h3>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.faq.items.is_free.answer') }}
            </p>
          </div>

          <!-- 支持版本 -->
          <div class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.faq.items.supported_versions.question') }}
            </h3>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.faq.items.supported_versions.answer') }}
            </p>
          </div>

          <!-- 准确性 -->
          <div class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.faq.items.accuracy.question') }}
            </h3>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.faq.items.accuracy.answer') }}
            </p>
          </div>

          <!-- 更新频率 -->
          <div class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.faq.items.update_frequency.question') }}
            </h3>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.faq.items.update_frequency.answer') }}
            </p>
          </div>

          <!-- 离线使用 -->
          <div class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.faq.items.offline_use.question') }}
            </h3>
            <p class="" style="color: #6a994e">
              {{ $t('calculator.faq.items.offline_use.answer') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Why Love部分 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">
          {{ $t('calculator.why_love.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- 社区支持 -->
          <div class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.why_love.reasons.community.title') }}
            </h3>
            <p class="mt-4" style="color: #6a994e">
              {{ $t('calculator.why_love.reasons.community.description') }}
            </p>
          </div>

          <!-- 节省时间 -->
          <div class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.why_love.reasons.time_saving.title') }}
            </h3>
            <p class="mt-4" style="color: #6a994e">
              {{ $t('calculator.why_love.reasons.time_saving.description') }}
            </p>
          </div>

          <!-- 用户友好 -->
          <div class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.why_love.reasons.user_friendly.title') }}
            </h3>
            <p class="mt-4" style="color: #6a994e">
              {{ $t('calculator.why_love.reasons.user_friendly.description') }}
            </p>
          </div>

          <!-- 移动兼容 -->
          <div class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf">
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              {{ $t('calculator.why_love.reasons.mobile.title') }}
            </h3>
            <p class="mt-4" style="color: #6a994e">
              {{ $t('calculator.why_love.reasons.mobile.description') }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('calculator.title'),
  meta: [
    {
      name: 'description',
      content: t('calculator.meta_description'),
    },
  ],
})

// 定义状态变量
const xValue = ref(null)
const yValue = ref(null)
const zValue = ref(null)

// 使用响应式状态
const selectedImages = reactive({
  x: null,
  y: null,
  z: null,
})

// 修改选择变量的函数
function selectVariable(variable, value) {
  // 更新选中状态
  selectedImages[variable] = value

  // 更新变量值
  if (variable === 'x') {
    xValue.value = value
  } else if (variable === 'y') {
    yValue.value = value
  } else if (variable === 'z') {
    zValue.value = value
  }

  // 如果所有值都已选择，计算结果
  if (xValue.value !== null && yValue.value !== null && zValue.value !== null) {
    calculateResults()
  }
}

// 计算结果并更新 DOM
function calculateResults() {
  if (xValue.value !== null && yValue.value !== null && zValue.value !== null) {
    const result1 = xValue.value * 2 + 11
    const result2 = zValue.value * 2 + yValue.value - 5
    const result3 = zValue.value + yValue.value - xValue.value

    const result1El = document.getElementById('result1')
    const result2El = document.getElementById('result2')
    const result3El = document.getElementById('result3')

    if (result1El)
      result1El.innerHTML = `${t('calculator.results.first_num')}<strong>${result1}</strong>`
    if (result2El)
      result2El.innerHTML = `${t('calculator.results.second_num')}<strong>${result2}</strong>`
    if (result3El)
      result3El.innerHTML = `${t('calculator.results.third_num')}<strong>${Math.abs(result3)}</strong>`
  }
}

// 国旗表情符号映射
const getFlag = (code) => {
  const flags = {
    'en': '🇺🇸', // 美国
    'zh': '🇨🇳', // 中国
    'es': '🇪🇸', // 西班牙
    'fr': '🇫🇷', // 法国
    'de': '🇩🇪', // 德国
    'ru': '🇷🇺', // 俄罗斯
    'ja': '🇯🇵', // 日本
    'ar': '🇸🇦', // 沙特阿拉伯
    'ko': '🇰🇷'  // 韩国
  }
  return flags[code] || ''
}
</script>

<style scoped>
.bio-title {
  font-size: 2.2rem;
  color: #a7c957;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #a7c957, #a7c957);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bio-subtitle {
  color: #a7c957;
  font-size: 1.2rem;
}

/* 主要内容区域 */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* 变量容器 */
.variables-container {
  background: rgb(242, 232, 207);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.variable {
  background: #f2e8cf;
  border: 1px solid #386641;
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(12px);
}

.variable-title {
  color: #f2e8cf;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

/* 选项网格 */
.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  justify-items: center;
}

/* 图片样式 */
img {
  width: 60px;
  height: 60px;
  border: 2px solid #386641;
  border-radius: 8px;
  transition: all 0.3s ease;
  filter: grayscale(30%);
}

img:hover,
img.selected {
  transform: translateY(-2px);
  border-color: #f8383e;
  box-shadow: 0 0 15px #386641;
  filter: grayscale(0%);
}

/* 结果区域 */
.results-section {
  background: #f2e8cf;
  border: 1px solid #386641;
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(12px);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.results-section h3 {
  color: #f2e8cf;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.results-section p {
  color: #f2e8cf;
  font-size: 2rem;
}

/* 页脚 */
.footer {
  margin-top: auto;
  text-align: center;
  padding: 2rem 0;
  color: #f2e8cf;
  font-size: 0.9rem;
}
</style>