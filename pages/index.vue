<template>
  <div class="w-full mx-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="main-content w-full mx-auto">
        <div class="variables-container w-full mx-auto md:mx-0 md:w-full">
          <!-- X变量部分 -->
          <div class="variable bio-section" id="x-variables">
            <h2
              class="variable-title mx-auto text-center font-bold"
              style="color: #bc4749"
            >
              X
            </h2>
            <div class="options-grid">
              <div class="image-option" @click="() => selectVariable('x', 0)">
                <img
                  src="https://i.ibb.co/5rDRw30/symbols-01.jpg"
                  alt="Value 0"
                  :class="{ selected: selectedImages.x === 0 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('x', 10)">
                <img
                  src="https://i.ibb.co/PFmbJ00/symbols-02.jpg"
                  alt="Value 10"
                  :class="{ selected: selectedImages.x === 10 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('x', 11)">
                <img
                  src="https://i.ibb.co/FqXw4mG/symbols-03.jpg"
                  alt="Value 11"
                  :class="{ selected: selectedImages.x === 11 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('x', 20)">
                <img
                  src="https://i.ibb.co/TrNY7Qf/symbols-04.jpg"
                  alt="Value 20"
                  :class="{ selected: selectedImages.x === 20 }"
                />
              </div>

              <div class="image-option" @click="() => selectVariable('x', 21)">
                <img
                  src="https://i.ibb.co/jfYKRth/symbols-05.jpg"
                  alt="Value 21"
                  :class="{ selected: selectedImages.x === 21 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('x', 22)">
                <img
                  src="https://i.ibb.co/bXGth05/symbols-06.jpg"
                  alt="Value 22"
                  :class="{ selected: selectedImages.x === 22 }"
                />
              </div>
            </div>
          </div>

          <!-- Y变量部分 -->
          <div class="variable bio-section" id="y-variables">
            <h2
              class="variable-title mx-auto text-center font-bold"
              style="color: #bc4749"
            >
              Y
            </h2>
            <div class="options-grid">
              <div class="image-option" @click="() => selectVariable('y', 0)">
                <img
                  src="https://i.ibb.co/5rDRw30/symbols-01.jpg"
                  alt="Value 0"
                  :class="{ selected: selectedImages.y === 0 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('y', 10)">
                <img
                  src="https://i.ibb.co/PFmbJ00/symbols-02.jpg"
                  alt="Value 10"
                  :class="{ selected: selectedImages.y === 10 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('y', 11)">
                <img
                  src="https://i.ibb.co/FqXw4mG/symbols-03.jpg"
                  alt="Value 11"
                  :class="{ selected: selectedImages.y === 11 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('y', 20)">
                <img
                  src="https://i.ibb.co/TrNY7Qf/symbols-04.jpg"
                  alt="Value 20"
                  :class="{ selected: selectedImages.y === 20 }"
                />
              </div>

              <div class="image-option" @click="() => selectVariable('y', 21)">
                <img
                  src="https://i.ibb.co/jfYKRth/symbols-05.jpg"
                  alt="Value 21"
                  :class="{ selected: selectedImages.y === 21 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('y', 22)">
                <img
                  src="https://i.ibb.co/bXGth05/symbols-06.jpg"
                  alt="Value 22"
                  :class="{ selected: selectedImages.y === 22 }"
                />
              </div>
            </div>
          </div>

          <!-- Z变量部分 -->
          <div class="variable bio-section" id="z-variables">
            <h2
              class="variable-title mx-auto text-center font-bold"
              style="color: #bc4749"
            >
              Z
            </h2>
            <div class="options-grid">
              <div class="image-option" @click="() => selectVariable('z', 0)">
                <img
                  src="https://i.ibb.co/5rDRw30/symbols-01.jpg"
                  alt="Value 0"
                  :class="{ selected: selectedImages.z === 0 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('z', 10)">
                <img
                  src="https://i.ibb.co/PFmbJ00/symbols-02.jpg"
                  alt="Value 10"
                  :class="{ selected: selectedImages.z === 10 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('z', 11)">
                <img
                  src="https://i.ibb.co/FqXw4mG/symbols-03.jpg"
                  alt="Value 11"
                  :class="{ selected: selectedImages.z === 11 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('z', 20)">
                <img
                  src="https://i.ibb.co/TrNY7Qf/symbols-04.jpg"
                  alt="Value 20"
                  :class="{ selected: selectedImages.z === 20 }"
                />
              </div>

              <div class="image-option" @click="() => selectVariable('z', 21)">
                <img
                  src="https://i.ibb.co/jfYKRth/symbols-05.jpg"
                  alt="Value 21"
                  :class="{ selected: selectedImages.z === 21 }"
                />
              </div>
              <div class="image-option" @click="() => selectVariable('z', 22)">
                <img
                  src="https://i.ibb.co/bXGth05/symbols-06.jpg"
                  alt="Value 22"
                  :class="{ selected: selectedImages.z === 22 }"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="results"
          class="results-section w-full mb-16 mx-auto md:mx-0 md:w-full"
          style="background-color: #f2e8cf"
        >
          <h3 class="w-full mx-auto text-center" style="color: #bc4749">
            Results
          </h3>
          <div class="flex flex-row justify-around mt-2">
            <p id="result1" style="color: #386641">1° Number: /</p>
            <p id="result2" style="color: #386641">2° Number: /</p>
            <p id="result3" style="color: #386641">3° Number: /</p>
          </div>
        </div>
      </div>

      <!-- 概述部分 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">
          What is the Terminus Calculator (BO6)?
        </h2>
        <div
          class="backdrop-blur-md rounded-xl p-6 border"
          style="border-color: #386641; background-color: #f2e8cf"
        >
          <p class="leading-relaxed" style="color: #6a994e">
            The Terminus Calculator (BO6) is an indispensable online tool
            designed for players of Call of Duty: Black Ops 6, specifically for
            tackling the complex puzzles in the Zombies mode. Whether you're
            decoding symbols or solving Easter egg challenges, this free tool
            ensures fast, accurate solutions, enhancing your gameplay experience
            without wasting resources.
          </p>
        </div>
      </section>

      <!-- 特点部分 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">
          Key Features
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf"
          >
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              Free to Use
            </h3>
            <p class="" style="color: #6a994e">
              Access all features without any cost or subscription requirements.
            </p>
          </div>
          <div
            class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf"
          >
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              Instant Solutions
            </h3>
            <p class="" style="color: #6a994e">
              Get immediate results for your symbol combinations.
            </p>
          </div>
          <div
            class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf"
          >
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              Accurate Calculations
            </h3>
            <p class="" style="color: #6a994e">
              Precise results verified by the gaming community.
            </p>
          </div>
        </div>
      </section>

      <!-- 使用指南 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">
          How to Use
        </h2>
        <div class="space-y-4">
          <div class="flex items-center backdrop-blur-md rounded-xl p-0 border">
            <span
              class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4"
              style="background-color: #386641; color: #f2e8cf"
              >1</span
            >
            <p class="" style="color: #6a994e">
              Select your X variable from the first set of symbols
            </p>
          </div>
          <div class="flex items-center backdrop-blur-md rounded-xl p-0 border">
            <span
              class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4"
              style="background-color: #386641; color: #f2e8cf"
              >2</span
            >
            <p class="" style="color: #6a994e">
              Choose your Y variable from the second set
            </p>
          </div>
          <div class="flex items-center backdrop-blur-md rounded-xl p-0 border">
            <span
              class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4"
              style="background-color: #386641; color: #f2e8cf"
              >3</span
            >
            <p class="" style="color: #6a994e">
              Pick your Z variable from the third set
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ部分 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">FAQs</h2>
        <div class="space-y-4">
          <div
            class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf"
          >
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              How accurate are the calculations?
            </h3>
            <p class="" style="color: #6a994e">
              All calculations are thoroughly tested and verified by our
              community of players.
            </p>
          </div>

          <div
            class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf"
          >
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              Will this work with future updates?
            </h3>
            <p class="" style="color: #6a994e">
              We regularly update the calculator to match game patches and
              changes.
            </p>
          </div>

          <div
            class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf"
          >
            <h3 class="text-xl font-semibold mb-3" style="color: #6a994e">
              Can I use it on my mobile phone?
            </h3>
            <p class="" style="color: #6a994e">
              Yes, the calculator is optimized for both desktop and mobile
              devices.
            </p>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6" style="color: #386641">
          Why Players Love the Terminus Calculator (BO6)
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf"
          >
            <p class="" style="color: #6a994e">Time-Saving</p>
            <p class="mt-4" style="color: #6a994e">
              Avoid spending hours solving complex puzzles.
            </p>
          </div>
          <div
            class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf"
          >
            <p class="" style="color: #6a994e">Resource Efficient</p>
            <p class="mt-4" style="color: #6a994e">
              Save in-game essence (5000 per retry) by using precise codes.
            </p>
          </div>
          <div
            class="backdrop-blur-md rounded-xl p-6 border"
            style="border-color: #386641; background-color: #f2e8cf"
          >
            <p class="" style="color: #6a994e">Community Support</p>
            <p class="mt-4" style="color: #6a994e">
              Built by fans for fans, making it a reliable resource.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    useHead({
      title: 'Terminus Calculator (BO6): Solve Zombies Mode Puzzles Instantly!',
      meta: [
        {
          name: 'description',
          content:
            'Discover the Terminus Calculator (BO6), the ultimate free tool for solving puzzles in Call of Duty: Black Ops 6 Zombies mode. Instantly decode terminal symbols and progress without delays!',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://i.ibb.co/f2n22kV/android-chrome-192x192.png' }],
    });

    // 定义状态变量
    const xValue = ref<number | null>(null);
    const yValue = ref<number | null>(null);
    const zValue = ref<number | null>(null);

    // 使用响应式状态
    const selectedImages = reactive({
      x: null as number | null,
      y: null as number | null,
      z: null as number | null
    });

    // 修改选择变量的函数
    function selectVariable(variable: 'x' | 'y' | 'z', value: number): void {
      // 更新选中状态
      selectedImages[variable] = value;

      // 更新变量值
      if (variable === 'x') {
        xValue.value = value;
      } else if (variable === 'y') {
        yValue.value = value;
      } else if (variable === 'z') {
        zValue.value = value;
      }

      // 如果所有值都已选择，计算结果
      if (
        xValue.value !== null &&
        yValue.value !== null &&
        zValue.value !== null
      ) {
        calculateResults();
      }
    }

    // 计算结果并更新 DOM
    function calculateResults(): void {
      if (
        xValue.value !== null &&
        yValue.value !== null &&
        zValue.value !== null
      ) {
        const result1 = xValue.value * 2 + 11;
        const result2 = zValue.value * 2 + yValue.value - 5;
        const result3 = zValue.value + yValue.value - xValue.value;

        const result1El = document.getElementById('result1');
        const result2El = document.getElementById('result2');
        const result3El = document.getElementById('result3');

        if (result1El)
          result1El.innerHTML = `1° Number: <strong>${result1}</strong>`;
        if (result2El)
          result2El.innerHTML = `2° Number: <strong>${result2}</strong>`;
        if (result3El)
          result3El.innerHTML = `3° Number: <strong>${Math.abs(
            result3
          )}</strong>`;
      }
    }

    // 返回方法以便在模板中调用
    return {
      selectVariable,
      selectedImages, // 暴露给模板使用
    };
  },
});
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
  font-size: 1rem;
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