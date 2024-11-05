<template>
  <div class="bg-black px-20 py-20 mt-32 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
    <h2 class="text-white text-3xl md:text-6xl">Build better websites.</h2>
    <p class="text-slate-500 mt-4 text-lg md:text-xl">Start reviewing code and collaborating with the team</p>
    <div class="flex mt-5">
      <Button label="Get Started" class="!px-6 !bg-white" severity="secondary" @click="navigateTo('/review')" />
    </div>
  </div>
</template>
