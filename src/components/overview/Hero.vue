<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512" />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">Marketing website done with Nuxt</h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Nuxtship is a starter template for startups, marketing websites & landing pages.<wbr /> Built with Nuxt &
        TailwindCSS. You can quickly create any website with this starter.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <NuxtLink to="/review">
          <Button
            label="Lets get reviewing"
            severity="contrast"
            class="!py-3 !px-5" />
        </NuxtLink>
        <NuxtLink to="/review">
          <Button
            label="More information"
            severity="contrast"
            outlined
            class="!py-3 !px-5" />
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
