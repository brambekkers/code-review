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

      <section class="flex flex-col gap-6">
        <h2 class="font-medium text-2xl text-gray-800">Subjects and Justifications</h2>
        <Fieldset pt:legend="font-medium text-2xl" legend="Quality Gates">
          <p class="mb-4">
            Quality gates are essential to ensure that code meets predefined standards before it is integrated into the main codebase. They help in identifying
            issues early in the development lifecycle, reducing the cost of fixing defects.
          </p>

          <h3 class="font-medium text-lg text-gray-800">ESLint</h3>
          <p class="mb-4">
            Ensuring ESLint is enabled and properly configured helps enforce consistent coding standards and practices across the codebase. By checking for
            deviations and in-line rule disablements, we ensure that exceptions are justified and don't introduce inconsistencies. Identifying errors and
            warnings early helps maintain code quality and prevents potential issues from escalating.
          </p>

          <h3 class="font-medium text-lg text-gray-800">SonarQube</h3>
          <p class="mb-4">
            SonarQube is a powerful tool for continuous code quality analysis. Ensuring it is enabled and the correct quality gate is set helps maintain high
            standards. Identifying blocker, critical, major, and minor issues ensures that code is free from severe defects. Correctly categorizing
            false-positives and won't-fix issues ensures that the quality metrics remain accurate and actionable.
          </p>

          <h3 class="font-medium text-lg text-gray-800">HP Fortify</h3>
          <p class="mb-4">
            HP Fortify is crucial for identifying security vulnerabilities. Ensuring it is enabled and checking for critical, high, medium, and low severity
            issues helps maintain the security posture of the application, protecting it from potential exploits.
          </p>

          <h3 class="font-medium text-lg text-gray-800">NexusIQ</h3>
          <p class="mb-4">
            Managing dependencies is critical to avoid vulnerabilities introduced through third-party libraries. Ensuring NexusIQ is enabled and checking for
            blocking, future blocking, and other violations helps maintain a secure dependency tree, reducing the risk of security breaches.
          </p>
        </Fieldset>
        <Fieldset pt:legend="font-medium text-2xl" legend="Dependencies">
          <p class="mb-4">Managing dependencies is crucial to ensure that the software uses supported, secure, and up-to-date libraries.</p>

          <h3 class="font-medium text-lg text-gray-800">Supported Dependencies</h3>
          <p class="mb-4">
            Ensuring the use of the latest supported versions of key dependencies like Vue and Node helps leverage the latest features, improvements, and
            security patches. Using internal components and plugins ensures compatibility and standardization. Checking for unused, unsupported, and deprecated
            dependencies helps reduce bloat, potential security risks, and maintenance overhead. Correct semver usage ensures smooth dependency management and
            versioning.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Lifecycle Management</h3>
          <p class="mb-4">
            Regularly updating dependencies is vital to maintain security and compatibility. Outdated dependencies can introduce vulnerabilities and
            compatibility issues, making it essential to identify and update them promptly.
          </p>
        </Fieldset>
        <Fieldset pt:legend="font-medium text-2xl" legend="Setup">
          <h2 class="font-medium text-xl text-gray-800"></h2>
          <p class="mb-4">Proper project setup ensures easier maintenance and better organization.</p>

          <h3 class="font-medium text-lg text-gray-800">Folder Structure</h3>
          <p class="mb-4">
            Adhering to a standardized folder structure helps maintain consistency and makes the project easier to navigate. Logical separation of concerns,
            consistent naming conventions, and avoiding deviations from the default scaffolded structure ensure that the project remains maintainable and
            understandable.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Protected Files from @aab/cli</h3>
          <p class="mb-4">
            Ensuring that protected files are not modified prevents critical configurations from being tampered with, maintaining the integrity of the
            application setup.
          </p>
        </Fieldset>
        <Fieldset pt:legend="font-medium text-2xl" legend="Styling">
          <p class="mb-4">Adhering to a consistent styling guide ensures a cohesive look and feel across the application.</p>

          <h3 class="font-medium text-lg text-gray-800">Emerald Components</h3>
          <p class="mb-4">
            Using standardized Emerald Web Components ensures a uniform user interface and reduces the overhead of custom UI development. Identifying unused or
            local UI components helps maintain a clean and efficient codebase.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Emerald Styling</h3>
          <p class="mb-4">
            Adhering to the Emerald Design System style guide ensures consistency in design. Minimizing custom styling, avoiding inline styles, and logically
            placing stylesheets helps maintain a clean and maintainable codebase. Detecting the presence of outdated styling methods ensures that modern
            practices are followed.
          </p>
        </Fieldset>

        <Fieldset pt:legend="font-medium text-2xl" legend="Technology">
          <p class="mb-4">
            Ensuring the correct usage of technology and frameworks helps in maintaining best practices and leveraging framework features effectively.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Vue Essentials</h3>
          <p class="mb-4">
            Correct usage of Vue.js features and directives ensures that the application is built using best practices. This includes proper data binding, state
            management, lifecycle hooks, and avoiding anti-patterns. Ensuring reactive properties, computed properties, and event handling are implemented
            correctly helps maintain a performant and maintainable application.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Vue Components Essentials</h3>
          <p class="mb-4">
            Proper definition, registration, and usage of Vue components ensure modularity and reusability. Correct prop validation, event handling, and slot
            usage help maintain component integrity and reduce the risk of bugs.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Routing</h3>
          <p class="mb-4">
            Proper route definition, navigation, and usage of guards and meta fields ensure a robust and navigable application. Consistent namespacing and
            logical placement of router files help maintain an organized codebase.
          </p>
        </Fieldset>
        <Fieldset pt:legend="font-medium text-2xl" legend="Best Practices">
          <p class="mb-4">Adhering to best practices ensures code readability, maintainability, and security.</p>

          <h3 class="font-medium text-lg text-gray-800">Readability</h3>
          <p class="mb-4">
            Ensuring code readability helps developers understand and maintain the codebase. Avoiding mysterious names, duplicate code, long functions, and
            complex structures reduces cognitive load and potential errors. Consistent formatting and naming conventions improve overall code quality.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Documentation</h3>
          <p class="mb-4">
            Proper documentation, including self-documenting code, inline comments, JSdoc comments, changelogs, and readme files, ensures that the codebase is
            understandable and maintainable. It helps new developers onboard quickly and provides a reference for existing developers.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Security</h3>
          <p class="mb-4">
            Ensuring security best practices helps protect the application from common vulnerabilities. Avoiding secrets in the repository, broken access
            control, cryptographic failures, injections, insecure design, and other security vulnerabilities is critical to maintaining a secure application.
          </p>
        </Fieldset>
        <Fieldset pt:legend="font-medium text-2xl" legend="Testing">
          <p class="mb-4">Thorough testing ensures that the application is reliable, performs well, and meets user expectations.</p>

          <h3 class="font-medium text-lg text-gray-800">Unit Testing</h3>
          <p class="mb-4">
            Ensuring the presence and quality of unit tests helps catch bugs early and ensures that individual components work as expected. Meaningful and
            isolated tests, proper mocking, and adhering to testing best practices contribute to a robust test suite.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Functional Testing</h3>
          <p class="mb-4">
            Functional tests ensure that critical flows and user interactions work as intended. This helps catch issues that may not be apparent in unit tests
            and ensures a smooth user experience.
          </p>

          <h3 class="font-medium text-lg text-gray-800">E2E Testing</h3>
          <p class="mb-4">
            End-to-end tests ensure that the entire application works as expected in a production-like environment. Testing critical flows and triggering tests
            in the acceptance environment helps catch integration issues and ensures overall application reliability.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Performance Testing</h3>
          <p class="mb-4">
            Performance testing ensures that the application meets performance expectations. It helps identify bottlenecks and ensures that the bundled
            application size is acceptable, contributing to a better user experience.
          </p>
        </Fieldset>
        <Fieldset pt:legend="font-medium text-2xl" legend="Accessibility">
          <p class="mb-4">
            Ensuring accessibility makes the application usable by people with disabilities, complying with legal standards and improving user experience.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Automated Tests</h3>
          <p class="mb-4">
            Automated accessibility tests help catch common accessibility issues early in the development process. Enabling the vuejs accessibility eslint
            ruleset ensures adherence to accessibility standards.
          </p>

          <h3 class="font-medium text-lg text-gray-800">Screenreader Test</h3>
          <p class="mb-4">
            Manual screenreader tests ensure that the application is navigable and usable by users who rely on assistive technologies, contributing to an
            inclusive user experience.
          </p>
        </Fieldset>
      </section>
    </div>
  </div>
</template>
