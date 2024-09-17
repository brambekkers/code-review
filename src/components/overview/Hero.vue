<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-all ease-in-out shadow-xl hover:scale-125 aspect-square object-cover"
        src="~/assets/img/hero.webp"
        alt="Review the code"
        loading="eager"
        format="webp"
        width="512"
        height="512" />
    </div>

    <div>
      <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">Reviewing made easy</h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Supercharge Your Code Reviews with Advanced Tools and Collaborative Insights for Maximum Impact. Elevate Your
        Reviewing Skills, Enhance Code Quality, and Gain Recognition as a Top Reviewer.
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
