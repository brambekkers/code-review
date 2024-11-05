<template>
  <div class="mt-36">
    <h2 class="text-center text-xl font-light text-slate-500">Test our technologies</h2>
    <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
      <Icon v-tooltip="'Azure'" class="h-8 md:h-12" name="teenyicons:azure-solid" size="48" />
      <Icon v-tooltip="'Vue'" class="h-8 md:h-14" name="simple-icons:vuedotjs" size="48" />
      <Icon v-tooltip="'HTML'" class="h-8 md:h-14" name="simple-icons:html5" size="48" />
      <Icon v-tooltip="'Prime'" class="h-8 md:h-12" name="prime:prime" size="48" />
      <Icon v-tooltip="'CSS'" class="h-8 md:h-14" name="simple-icons:css3" size="48" />
      <Icon v-tooltip="'Nuxt'" class="h-8 md:h-14" name="simple-icons:nuxtdotjs" size="48" />
      <Icon v-tooltip="'Tailwind'" class="h-8 md:h-14" name="simple-icons:tailwindcss" size="48" />
    </div>
  </div>
</template>
