<script setup>
const features = [
  {
    title: "Enhance Code Quality",
    description:
      "Code reviews ensure that every piece of code meets a high standard of quality. By catching bugs, enforcing coding standards, and promoting best practices, code reviews help maintain a codebase that's clean, efficient, and easy to maintain.",
    icon: "bx:bxs-data",
  },
  {
    title: "Boost Team Collaboration",
    description:
      "Code reviews foster a culture of collaboration and knowledge sharing. Developers can learn from each other's expertise, leading to a more cohesive and knowledgeable team. This collaborative process helps distribute knowledge about the codebase, reducing dependency on individual developers.",
    icon: "bx:bxs-group",
  },
  {
    title: "Improve Code Security",
    description:
      "A thorough code review process can identify potential security vulnerabilities early in the development cycle. By proactively addressing security flaws, you can prevent costly breaches and ensure that your codebase is robust and secure.",
    icon: "bx:bxs-check-shield",
  },
  {
    title: "Accelerate Learning and Growth",
    description:
      "Code reviews are an excellent learning opportunity for developers at all levels. Junior developers can gain insights from more experienced colleagues, while senior developers can reinforce their knowledge and stay updated with new techniques and technologies.",
    icon: "bx:bxs-book-open",
  },
  {
    title: "Ensure Code Consistency",
    description:
      "Consistency in code style and structure is vital for maintaining a readable and maintainable codebase. Code reviews help enforce coding standards across the team, making the code easier to navigate and reducing the cognitive load on developers.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Reduce Technical Debt",
    description:
      "By addressing issues early through code reviews, you can significantly reduce the accumulation of technical debt. This proactive approach helps avoid future headaches and costly refactoring, ensuring the long-term health and scalability of your project.",
    icon: "bx:bxs-coin-stack",
  },
];



</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Everything you need to start a website
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Nuxt comes batteries included. It takes the best parts of state-of-the-art
      tools and adds its own innovations.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
