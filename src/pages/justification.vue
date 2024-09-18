<script setup lang="ts">
const subjects = [
  {
    legend: 'Quality Gates',
    description:
      'Quality gates are essential to ensure that code meets predefined standards before it is integrated into the main codebase. They help in identifying issues early in the development lifecycle, reducing the cost of fixing defects.',
    items: [
      {
        title: 'ESLint',
        content:
          "Ensuring ESLint is enabled and properly configured helps enforce consistent coding standards and practices across the codebase. By checking for deviations and in-line rule disablements, we ensure that exceptions are justified and don't introduce inconsistencies. Identifying errors and warnings early helps maintain code quality and prevents potential issues from escalating.",
      },
      {
        title: 'SonarQube',
        content:
          "SonarQube is a powerful tool for continuous code quality analysis. Ensuring it is enabled and the correct quality gate is set helps maintain high standards. Identifying blocker, critical, major, and minor issues ensures that code is free from severe defects. Correctly categorizing false-positives and won't-fix issues ensures that the quality metrics remain accurate and actionable.",
      },
      {
        title: 'HP Fortify',
        content:
          'HP Fortify is crucial for identifying security vulnerabilities. Ensuring it is enabled and checking for critical, high, medium, and low severity issues helps maintain the security posture of the application, protecting it from potential exploits.',
      },
      {
        title: 'NexusIQ',
        content:
          'Managing dependencies is critical to avoid vulnerabilities introduced through third-party libraries. Ensuring NexusIQ is enabled and checking for blocking, future blocking, and other violations helps maintain a secure dependency tree, reducing the risk of security breaches.',
      },
    ],
  },
  {
    legend: 'Dependencies',
    description: 'Managing dependencies is crucial to ensure that the software uses supported, secure, and up-to-date libraries.',
    items: [
      {
        title: 'Supported Dependencies',
        content:
          'Ensuring the use of the latest supported versions of key dependencies like Vue and Node helps leverage the latest features, improvements, and security patches. Using internal components and plugins ensures compatibility and standardization. Checking for unused, unsupported, and deprecated dependencies helps reduce bloat, potential security risks, and maintenance overhead. Correct semver usage ensures smooth dependency management and versioning.',
      },
      {
        title: 'Lifecycle Management',
        content:
          'Regularly updating dependencies is vital to maintain security and compatibility. Outdated dependencies can introduce vulnerabilities and compatibility issues, making it essential to identify and update them promptly.',
      },
    ],
  },
  {
    legend: 'Setup',
    description: 'Proper project setup ensures easier maintenance and better organization.',
    items: [
      {
        title: 'Folder Structure',
        content:
          'Adhering to a standardized folder structure helps maintain consistency and makes the project easier to navigate. Logical separation of concerns, consistent naming conventions, and avoiding deviations from the default scaffolded structure ensure that the project remains maintainable and understandable.',
      },
      {
        title: 'Protected Files from @aab/cli',
        content:
          'Ensuring that protected files are not modified prevents critical configurations from being tampered with, maintaining the integrity of the application setup.',
      },
    ],
  },
  {
    legend: 'Styling',
    description: 'Adhering to a consistent styling guide ensures a cohesive look and feel across the application.',
    items: [
      {
        title: 'Emerald Components',
        content:
          'Using standardized Emerald Web Components ensures a uniform user interface and reduces the overhead of custom UI development. Identifying unused or local UI components helps maintain a clean and efficient codebase.',
      },
      {
        title: 'Emerald Styling',
        content:
          'Adhering to the Emerald Design System style guide ensures consistency in design. Minimizing custom styling, avoiding inline styles, and logically placing stylesheets helps maintain a clean and maintainable codebase. Detecting the presence of outdated styling methods ensures that modern practices are followed.',
      },
    ],
  },
  {
    legend: 'Technology',
    description: 'Ensuring the correct usage of technology and frameworks helps in maintaining best practices and leveraging framework features effectively.',
    items: [
      {
        title: 'Vue Essentials',
        content:
          'Correct usage of Vue.js features and directives ensures that the application is built using best practices. This includes proper data binding, state management, lifecycle hooks, and avoiding anti-patterns. Ensuring reactive properties, computed properties, and event handling are implemented correctly helps maintain a performant and maintainable application.',
      },
      {
        title: 'Vue Components Essentials',
        content:
          'Proper definition, registration, and usage of Vue components ensure modularity and reusability. Correct prop validation, event handling, and slot usage help maintain component integrity and reduce the risk of bugs.',
      },
      {
        title: 'Routing',
        content:
          'Proper route definition, navigation, and usage of guards and meta fields ensure a robust and navigable application. Consistent namespacing and logical placement of router files help maintain an organized codebase.',
      },
    ],
  },
  {
    legend: 'Best Practices',
    description: 'Adhering to best practices ensures code readability, maintainability, and security.',
    items: [
      {
        title: 'Readability',
        content:
          'Ensuring code readability helps developers understand and maintain the codebase. Avoiding mysterious names, duplicate code, long functions, and complex structures reduces cognitive load and potential errors. Consistent formatting and naming conventions improve overall code quality.',
      },
      {
        title: 'Documentation',
        content:
          'Proper documentation, including self-documenting code, inline comments, JSdoc comments, changelogs, and readme files, ensures that the codebase is understandable and maintainable. It helps new developers onboard quickly and provides a reference for existing developers.',
      },
      {
        title: 'Security',
        content:
          'Ensuring security best practices helps protect the application from common vulnerabilities. Avoiding secrets in the repository, broken access control, cryptographic failures, injections, insecure design, and other security vulnerabilities is critical to maintaining a secure application.',
      },
    ],
  },
  {
    legend: 'Testing',
    description: 'Thorough testing ensures that the application is reliable, performs well, and meets user expectations.',
    items: [
      {
        title: 'Unit Testing',
        content:
          'Ensuring the presence and quality of unit tests helps catch bugs early and ensures that individual components work as expected. Meaningful and isolated tests, proper mocking, and adhering to testing best practices contribute to a robust test suite.',
      },
      {
        title: 'Functional Testing',
        content:
          'Functional tests ensure that critical flows and user interactions work as intended. This helps catch issues that may not be apparent in unit tests and ensures a smooth user experience.',
      },
      {
        title: 'E2E Testing',
        content:
          'End-to-end tests ensure that the entire application works as expected in a production-like environment. Testing critical flows and triggering tests in the acceptance environment helps catch integration issues and ensures overall application reliability.',
      },
      {
        title: 'Performance Testing',
        content:
          'Performance testing ensures that the application meets performance expectations. It helps identify bottlenecks and ensures that the bundled application size is acceptable, contributing to a better user experience.',
      },
    ],
  },
  {
    legend: 'Accessibility',
    description:
      'Ensuring accessibility makes the application usable by people with disabilities, complying with legal standards and improving user experience.',
    items: [
      {
        title: 'Automated Tests',
        content:
          'Automated accessibility tests help catch common accessibility issues early in the development process. Enabling the vuejs accessibility eslint ruleset ensures adherence to accessibility standards.',
      },
      {
        title: 'Screenreader Test',
        content:
          'Manual screenreader tests ensure that the application is navigable and usable by users who rely on assistive technologies, contributing to an inclusive user experience.',
      },
    ],
  },
];
</script>

<template>
  <div>
    <LayoutSectionHead>
      <template v-slot:title>Justification</template>
      <template v-slot:desc>Why this is a good way of reviewing</template>
    </LayoutSectionHead>

    <div class="flex flex-col gap-10 mx-auto max-w-4xl mt-16">
      <h2 class="font-medium text-2xl text-gray-800">Why we check what we check</h2>

      <section>
        <h2 class="font-medium text-xl text-gray-800">Introduction</h2>
        <p>
          In modern software development, ensuring the quality, maintainability, and security of code is paramount. Our code review app is designed to
          facilitate thorough reviews across multiple subjects, ensuring that code adheres to best practices, standards, and guidelines. This document provides
          a detailed justification for why we test on the specified subjects, topics, and questions.
        </p>
      </section>

      <section class="flex flex-col">
        <h2 class="font-medium text-2xl text-gray-800">Subjects and Justifications</h2>

        <Fieldset
          v-for="(subject, index) in subjects"
          :key="index"
          pt:legend="font-medium text-2xl !bg-transparent"
          class="!bg-slate-50 !mb-6"
          :legend="subject.legend"
        >
          <p class="mb-4">{{ subject.description }}</p>

          <div v-for="(item, idx) in subject.items" :key="idx">
            <h3 class="font-medium text-lg text-gray-800">{{ item.title }}</h3>
            <p class="mb-4">{{ item.content }}</p>
          </div>
        </Fieldset>
      </section>
    </div>
  </div>
</template>
