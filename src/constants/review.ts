import type { Subject } from "~/types/review";

type Review = { 
  [K in string]: Subject
}

export const review: Review = {
  qualityGates: {
    title: 'Code Quality',
    img: '/img/quality.avif',
    description: 'Ensure that the codebase is of high quality and follows best practices.',
    topics: [
      {
        title: 'ESLint',
        comment: '',
        applicable: true,
        description:
          '<p>ESLint is a powerful tool for identifying and fixing problems in JavaScript code. It is essential for maintaining code quality and ensuring consistency across a project. By enforcing a set of rules, ESLint helps developers adhere to best practices and avoid common pitfalls. It is highly customizable, allowing teams to tailor it to their specific coding standards. Proper configuration and usage of ESLint can significantly improve the readability and maintainability of the codebase, making it easier for new developers to onboard and for teams to collaborate effectively.</p><ul><li>Ensure that ESLint is configured and enabled.</li><li>Run eslint</li><li>Search the whole repository for the following query to find disabled rules: "eslint-disable" </li><li>Ensure that the ESLint configuration is up-to-date and follows best practices.</li></ul>',
        questions: [
          { question: 'Is ESlint enabled?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the configuration in one file?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Does the configuration deviate?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are there any rules disabled in-line?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there ESlint errors?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there ESlint warnings?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'SonarQube',
        comment: '',
        applicable: true,
        description:
          '<p>SonarQube is a leading continuous inspection tool used to automatically analyze source code, detecting potential bugs, vulnerabilities, and code smells. It serves as an invaluable resource for development teams aiming to maintain high standards of code quality and security. By integrating SonarQube into the development pipeline, teams can ensure that code quality is measured and monitored consistently, providing actionable insights and recommendations for improvement. This proactive approach not only helps in maintaining a healthy codebase but also facilitates better collaboration and accountability among developers.</p><ul><li>Check the SonarQube dashboard</li><li>Check the sonar-project.properties file to see if certain files are excluded from the scan</li><li>Check if the SonarQube scan is executed in the pipeline</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          { question: 'Is SonarQube enabled?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the correct Quality gate enabled?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there any Blocker issues?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are there any Critical issues?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are there any Major issues?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are there any Minor issues?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: "Are there any incorrectly marked 'false-positives' or 'wont-fix'?", score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'HP Fortify',
        comment: '',
        applicable: true,
        description:
          '<p>HP Fortify is a comprehensive application security tool designed to identify, prioritize, and remediate vulnerabilities in source code. It is widely used by organizations to safeguard their software against potential threats by performing deep security analysis and providing detailed insights into security weaknesses. By integrating Fortify into the development lifecycle, teams can proactively address security issues, ensuring that applications are robust and secure before deployment. This not only helps in minimizing risks but also enhances the overall security posture of the organization.</p><ul><li>Check the Fortify dashboard</li><li>Check if the Fortify scan is enabled in the pipeline file</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          { question: 'Is HP Fortify enabled?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there any Critical issues?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are there High any severity issues?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are there Medium any severity issues?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are there Low any severity issues?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'NexusIQ',
        comment: '',
        applicable: true,
        description:
          '<p>NexusIQ is a powerful tool for managing open-source components and ensuring that software applications remain secure and compliant. It offers comprehensive insights into the open-source libraries used within a project, identifying potential vulnerabilities, license compliance issues, and outdated components. By integrating NexusIQ into the development pipeline, organizations can automate the monitoring of open-source dependencies and receive early warnings about potential risks. This proactive approach helps teams maintain high security standards and avoid potential legal and compliance issues related to open-source software usage.</p><ul><li>Check the NexusIQ dashboard</li><li>Check if the NexusIQ scan is enabled in the pipeline file</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          { question: 'Is NexusIQ enabled?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there Blocking (threat level >=8) violations?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are there Future Blocking (threat level 7) violations?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are there other violations?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
    ],
  },
  dependencies: {
    title: 'Dependencies',
    img: '/img/dependencies.avif',
    description: 'Ensure that the project dependencies are up-to-date and following best practices.',
    topics: [
      {
        title: 'Supported dependencies',
        comment: '',
        applicable: true,
        description:
          "<p>Managing dependencies effectively is crucial for maintaining a healthy and stable software project. Dependencies are external libraries or modules that a project relies on, and keeping them updated and supported ensures compatibility, security, and optimal performance. Regularly reviewing and updating dependencies can prevent issues related to deprecated or unsupported packages, which can introduce vulnerabilities and unexpected behavior. By integrating tools and best practices into your workflow, you can ensure that your project's dependencies are well-managed and aligned with current standards.</p><ul><li>Invoke the vue-cli-plugin-ibrebuild/ Warp-drive and check the differences in dependencies</li><li>Check the nodeVersion that is set in the pipeline file (>18)</li><li>Check the lockfileVersion in the package-lock.json file (v3)</li><li>Check for unsupported dependencies like: emerald-global, axios, extract-loader, ...</li><li>Provide examples of problematic issues</li><li>Run `npx depcheck` to find possible dependency issues.</li></ul>",
        questions: [
          { question: 'Is the latest supported version of Vue used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the latest supported version of Node used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are the Emerald Web Components used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the @aab/sc-vue-cli-plugin-ibrebuild used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there major outdated dependencies present?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are dependencies and devDependencies mixed? (Testcafe, playwright, babel, ... in dependencies)', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are unsupported dependencies used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are deprecated dependencies used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is semver used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
    ],
  },
  setup: {
    title: 'Project set-up',
    img: '/img/setup.avif',
    description: 'Ensure that the project setup follows the expected structure and conventions.',
    topics: [
      {
        title: 'Folder structure',
        comment: '',
        applicable: true,
        description:
          "<p>A well-organized folder structure is a foundational aspect of any successful software project. It enhances code readability and maintainability by establishing a clear, logical arrangement of files and directories. This organization helps developers quickly locate and identify components, reducing the cognitive load and improving team collaboration. Adhering to a consistent folder structure can also facilitate smoother onboarding for new team members, as it provides an intuitive roadmap of the project's architecture. Regularly reviewing and refining the folder structure ensures that it evolves alongside the project, accommodating new features and technologies effectively.</p><ul><li>Invoke the vue-cli-plugin-ibrebuild/Warp-drive and check the differences in the source control section of your IDE</li><li>Provide examples of problematic issues</li></ul>",
        questions: [
          { question: 'Does the folder structure deviate from the default scaffolded project?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are the folders and files semantically named?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the folder- and file name spacing consistent?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there any missing folders?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is there a logical separation of concern (e.g. state, functions, components)?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'Protected files from @aab/cli',
        comment: '',
        applicable: true,
        description:
          '<p>In big development projects, certain files need to be protected to ensure the integrity and security of the application. Within ABN Amro the concept of protected files involves restricting direct modifications to critical files that could impact the functionality, security, or stability of the project. Utilizing tools like @aab/cli, developers can enforce rules and guidelines on how these files are managed within the source control system. This approach helps prevent accidental changes and ensures that only authorized modifications are made, maintaining a high standard of code quality and consistency across the team.</p><ul><li>Invoke the vue-cli-plugin-ibrebuild/Warp-drive and check the differences in the source control section of your IDE</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          { question: 'Are protected files modified?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
    ],
  },
  styling: {
    title: 'Styling',
    img: '/img/styling.avif',
    description: "Ensure that the project's styling follows the Emerald Design System guidelines.",
    topics: [
      {
        title: 'Emerald components',
        comment: '',
        applicable: true,
        description:
          "<p>The Emerald design system is a vital resource for maintaining visual and functional consistency across applications. It provides a unified set of components and styling guidelines that help teams deliver a cohesive user experience. By leveraging Emerald components, developers can ensure that their applications not only adhere to branding standards but also benefit from pre-tested, reusable elements that enhance efficiency and reduce development time. Regularly reviewing the usage of these components ensures that the project remains aligned with the latest updates and best practices, preventing the use of deprecated or unsupported styling libraries.</p><ul><li>Check the package.json for @aab/sc-aab-* components</li><li>Search the project with the following query for each component to find unused components: import '@aab/sc-aab-COMPONENT-NAME'</li><li>Check for unsupported dependencies like: bootstrap, vuetify</li><li>Provide examples of problematic issues</li></ul>",
        questions: [
          { question: 'Are the Emerald Web Components used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there any unused Emerald components and imports present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there any local UI components present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there any third-party UI components present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Emerald styling',
        comment: '',
        applicable: true,
        description:
          '<p>Emerald styling plays a crucial role in ensuring that applications maintain a consistent and polished appearance across all platforms. By utilizing the Emerald styling package, developers can align their projects with the established design language and branding guidelines, fostering a unified look and feel. This approach not only streamlines the styling process but also reduces the need for extensive customizations that may lead to inconsistencies. Regularly auditing the styling packages and minimizing custom styles helps maintain adherence to the Emerald Design System, ensuring that the application remains current with design updates and avoids reliance on deprecated or older styling solutions.</p><ul><li>Check the package.json for the @aab/sc-styles-emerald package</li><li>Check the package.json for the older @aab/sc-styles-* packages</li><li>Check the package.json for the deprecated emerald-global package</li><li>Lots of custom styling usually means deviation from the Emerald Design System</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          { question: 'Is the @aab/sc-styles-emerald component used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Does the project deviate from the Emerald Design System style guide?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is custom styling kept to a minimum?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is inline styling avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are the stylesheets logically located?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the old emerald-global present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the old CSS-in-JS stack used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
    ],
  },
  technology: {
    title: 'Technology stack usage',
    img: '/img/setup.avif',
    description: "Ensure that the project's technology stack usage follows best practices and conventions.",
    topics: [
      {
        title: 'Vue Essentials',
        comment: '',
        applicable: true,
        description:
          "<p>Mastering the essentials of Vue.js is fundamental for any developer working with this JavaScript framework. The 'Essentials' section of the official Vue.js documentation provides a comprehensive overview of key concepts, ranging from template syntax to reactive properties and lifecycle hooks. By understanding and applying these core principles, developers can build robust and efficient applications. Regularly consulting the documentation not only clarifies doubts but also ensures adherence to best practices, enabling developers to harness the full power of Vue.js. This approach facilitates the creation of maintainable and scalable applications that leverage Vue's reactive nature and component-based architecture.</p><p>This section follows the structure of the 'Essentials' section of the official Vue.js documentation: https://vuejs.org/guide/essentials/template-syntax.html</p><ul><li>Use the documentation to clarify doubts or best practices</li><li>Review the project for directives of a specific section (e.g., v-if)</li><li>Review the project for method names of a specific section (e.g., watch)</li><li>Provide examples of problematic issues</li></ul>",
        questions: [
          { question: 'Is text interpolation used correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are attributes bound correctly with the v-bind shorthand (:) which is preferred over its longer version?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are boolean attributes bound correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are objects of attributes bound correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are JavaScript expressions inside of data bindings used correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are functions called correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is v-html avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is reactive state declared correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are methods declared correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is reactive() used correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are computed properties used correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are computed properties side-effect free?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are computed properties immutable?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is class binding used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is style binding avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are the v-if, v-else-if, and v-else directives used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are the directives used in combination with the <template> tag to toggle more than one element?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the v-show directive used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are v-if and v-for on the same element avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the v-cloak directive avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the v-for directive used correctly for an array?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the v-for directive used correctly for an object?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is v-for used in combination with the <template> tag to render a block of multiple elements?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the "key" attribute used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are events handled using the v-on shorthand (@) which is preferred over its longer version?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: "Are inline handlers' length and complexity acceptable?", score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are method handlers used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are original DOM events passed correctly to handlers?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are event modifiers used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are "key" modifiers used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are mouse button modifiers used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is v-model used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are modifiers used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are lifecycle hooks used correctly for the options API?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are lifecycle hooks used correctly for the Composition API?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is data retrieval done in the correct lifecycle hook?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is DOM manipulation done in the correct lifecycle hook?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the amount of code in lifecycle hooks not excessive?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are watchers used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are deep watchers used cautiously?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are eager watchers used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is watchEffect() used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is callback flush timing used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are watchers stopped correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are refs used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are refs accessed correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are refs inside v-for used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are function refs used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are refs on components used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are composables used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: "Is the 'use' naming convention followed?", score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are input arguments handled correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are values returned correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are side effects handled correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are the usage restrictions kept in mind?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are composables correctly used for Code Organization?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are mixins avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Vue Components Essentials',
        comment: '',
        applicable: true,
        description:
          "<p>Understanding the essentials of Vue components is crucial for building dynamic and reusable elements in Vue.js applications. Components are the building blocks of Vue applications, enabling developers to encapsulate functionality and create modular, maintainable code. The 'Components In-Depth' section of the official Vue.js documentation offers valuable insights into component registration, props, slots, and more, guiding developers through best practices and advanced techniques. By mastering these concepts, developers can effectively leverage Vue's component-based architecture to enhance flexibility and scalability in their projects.</p><p>This section follows the structure of the 'Components In-Depth' section of the official Vue.js documentation: https://vuejs.org/guide/components/registration.html</p><ul><li>Use the documentation to clarify doubts or best practices</li><li>Review the project for unique parts of a specific section (e.g., &lt;slot&gt;)</li><li>Review the project for method names of a specific section (e.g., emit)</li><li>Provide examples of problematic issues</li></ul>",
        questions: [
          { question: 'Are components defined correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are components registered correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the PascalCase name casing used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are props defined correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the camelCase name casing used for defining props?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are props used as kebab-case attributes?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is prop validation used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Do props have a type defined?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Do props have default value defined?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are events defined correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the camelCase name casing used for defining events?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the kebab-case name casing used for listening on events?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are events emitted correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is event listening correctly implemented?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are event arguments passed correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are events explicitly declared using the emits option?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is event validation used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are slots used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are named slots used correctly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the v-slot shorthand (#) used which is preferred over its longer version?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are there renderless components present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Routing',
        comment: '',
        applicable: true,
        description:
          '<p>Routing is a fundamental aspect of single-page applications (SPAs) built with Vue.js, enabling seamless navigation and dynamic content rendering without full page reloads. The Vue Router library is the official solution for managing routes in Vue applications, offering a rich set of features such as nested routes, route parameters, and lazy loading. By mastering Vue Router, developers can create intuitive and efficient navigation structures that enhance the user experience. The official Vue Router documentation provides detailed guidance and best practices, helping developers implement routing solutions that are robust and maintainable.</p><p>This section follows the official Vue Router documentation: https://router.vuejs.org/guide/</p><ul><li>Use the documentation to clarify doubts or best practices</li><li>Search the whole project for unique parts of a specific section (e.g., router.push())</li><li>Invoke the vue-cli-plugin-ibrebuild/ Warp-drive and check the differences in the source control section of your IDE</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          { question: 'Are routes defined correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are named routes used?(preferred way)', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is router-link or router.push used to navigate?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the namespacing of routes consistent?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is there a fallback route in place?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is hashmode used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is createWebHashHistory used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are nested routes used correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are navigation guards used correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the meta field used correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are the router files logically placed?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
    ],
  },
  bestPractices: {
    title: 'Best Practices',
    img: '/img/best-practices.avif',
    description: 'Ensure that the project follows best practices and conventions.',
    topics: [
      {
        title: 'Readability',
        comment: '',
        applicable: true,
        description:
          '<p>Ensuring code readability is a cornerstone of maintainable software development. Readable code not only facilitates easier understanding and collaboration among team members but also aids in the long-term sustainability of the project. Chapter 3 of Martin Fowler\'s seminal book, <i>Refactoring: Improving the Design of Existing Code</i>, delves into techniques and strategies for enhancing code readability. By focusing on clear naming conventions, consistent formatting, and the simplification of complex logic, developers can significantly improve the clarity and quality of their code. The principles outlined in this chapter serve as a valuable guide for writing code that is both efficient and easy to navigate.</p><p>This section is based on Chapter 3 of the book: <i>Refactoring: Improving the Design of Existing Code</i> by Martin Fowler. The book is available on the O’Reilly learning platform, which is accessible within ABN AMRO: <a href="https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/">https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/</a></p><ul><li>Use the documentation to clarify doubts or best practices</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          { question: 'Are mysterious names avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is duplicate code avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are long functions avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are functions with a long parameter list avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is non-state global data avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is global mutable data avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are you able to make a change in one single point?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are repeated conditionals avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are nested conditionals avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are lots of loops avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are nested loops avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are large components avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is formatting present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is consistent name spacing present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are high complexity functions avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are large expressions in templates avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'Documentation',
        comment: '',
        applicable: true,
        description:
          '<p>Comprehensive and well-maintained documentation is a vital component of any successful software project. It serves as a crucial resource for developers, stakeholders, and users, providing clear guidance on how to use, maintain, and contribute to the project. Effective documentation enhances collaboration by ensuring that knowledge is shared and easily accessible, reducing the learning curve for new team members and facilitating smoother project handovers. By prioritizing clarity, consistency, and completeness in documentation, teams can significantly improve communication and project efficiency, ultimately leading to higher quality software and a more cohesive development process.</p>',
        questions: [
          { question: 'Is the code self-documenting?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are inline comments present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are JSdoc comments present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is there a proper changelog?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is there a proper readme?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Security',
        comment: '',
        applicable: true,
        description: `<p>This section is based on the OWASP top 10: 
                        <a href="https://owasp.org/www-project-top-ten/">https://owasp.org/www-project-top-ten/</a></p>
                        <ul>
                          <li>Use the documentation to clarify doubts or best practices</li>
                          <li>Look for private keys or credentials</li>
                          <li>Provide examples of problematic issues</li>
                        </ul>`,
        questions: [
          { question: 'Are secrets in the repository avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is broken access control avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are cryptographic failures avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the possibility of injection avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is insecure design avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is security misconfiguration avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are vulnerable and outdated components avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are identification and authentication failures avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are software and data integrity failures avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are security logging and monitoring failures present?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is server-side request forgery avoided?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
    ],
  },
  testing: {
    title: 'Testing',
    img: '/img/testing.avif',
    description: 'Ensure that the project has a high test coverage and follows best practices for testing.',
    topics: [
      {
        title: 'Unit Testing',
        comment: '',
        applicable: true,
        description:
          '<p>Unit testing is a critical practice in software development that focuses on verifying the smallest testable parts of an application, typically individual functions or components, to ensure they work as intended. By systematically testing each unit in isolation, developers can identify and fix bugs early in the development process, leading to more reliable and maintainable code. A robust unit testing strategy not only enhances code quality but also provides a safety net for future changes, enabling developers to refactor and evolve the codebase with confidence. Utilizing tools like Jest and Vite for unit testing and mutation testing, respectively, can further improve the depth and effectiveness of testing efforts, ensuring comprehensive coverage and code quality.</p><ul><li>No coverage tricks, search for: <mark>/* c8 ignore</mark>, <mark>/* istanbul ignore</mark></li><li>No skipped unit-tests, search for: <mark>.skip</mark>, <mark>.only</mark></li><li>Check if files are excluded from coverage from jest config file</li><li>Stryker can be used to get a more in-depth view on the quality of tests, though it should be used sensibly: <a href="https://stryker-mutator.io/docs/stryker-js/guides/vuejs/">https://stryker-mutator.io/docs/stryker-js/guides/vuejs/</a></li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          { question: 'Are unit tests present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is code split up in pure functions to easily test?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the coverage threshold met? >80%, less than 100%', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are unit tests meaningful?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are unit tests isolated?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are externals mocked correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are components mounted correctly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are skipped test(suite)s avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the ibrs-test-helpers module used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are promises correctly handled?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the recommended way of unit testing followed?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'Functional Testing',
        comment: '',
        applicable: true,
        description:
          '<p>Functional testing is an essential aspect of software quality assurance, focusing on verifying that the application performs its intended functions correctly. Unlike unit tests, which test individual components in isolation, functional tests assess the system as a whole, ensuring that all components interact correctly to deliver the desired outcomes. This type of testing is crucial for validating user flows and business logic, providing confidence that the application meets both functional and user requirements. By integrating functional tests into the development pipeline, teams can catch regressions early, improve reliability, and deliver a seamless user experience.</p><ul><li>No skipped tests, search for: <mark>.only</mark></li><li>Check if functional tests are run in the build step of the pipeline</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          { question: 'Are functional tests present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are critical flows tested?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is user interaction tested?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are skipped test(suite)s avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are page object models from the Emerald Web Components used?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'E2E Testing',
        comment: '',
        applicable: true,
        description:
          "<p>End-to-end (E2E) testing is a comprehensive testing approach that simulates real user scenarios to validate the complete workflow of an application. By testing the application from start to finish, E2E tests ensure that all integrated components function together as expected, providing a high level of confidence in the application's reliability and performance. E2E testing is crucial for identifying issues that may not be caught by unit or functional tests, such as integration errors or unexpected user interactions. Incorporating E2E tests into the development pipeline helps teams detect and resolve issues early, ensuring a seamless and robust user experience.</p><ul><li>No skipped tests, search for: <mark>.only</mark></li><li>Check if E2E tests are enabled in the pipeline on DTA</li><li>Provide examples of problematic issues</li></ul>",
        questions: [
          { question: 'Are E2E tests present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are critical flows tested?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are the E2E tests triggered on the acceptance environment?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Performance Testing',
        comment: '',
        applicable: true,
        description:
          "<p>Performance testing is a critical component of software development that ensures applications meet required speed, scalability, and stability standards under various conditions. By simulating user loads and measuring response times, resource usage, and throughput, performance testing identifies bottlenecks and potential issues that could impact the user experience. This type of testing is essential for optimizing the application's efficiency and ensuring it can handle expected traffic and usage patterns. Integrating performance testing into the development and deployment pipeline allows teams to continuously monitor and improve the application's performance, delivering a smooth and responsive user experience.</p><ul><li>Check if E2E tests are enabled in the pipeline on DTA</li><li>Check the bundle size and content with the webpack-bundle analyzer, by: <ul><li>Add the --report flag to the vue-cli build command</li><li>Run the build command</li><li>Check the report</li></ul></li><li>Check if a flow is created</li></ul>",
        questions: [
          { question: 'Is performance testing enabled?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the performance testing result acceptable?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the size of the bundled application acceptable?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
    ],
  },
  accessibility: {
    title: 'Accessibility',
    img: '/img/accessibility.avif',
    description: 'Ensure that the project is accessible for all users.',
    topics: [
      {
        title: 'Automated Tests',
        comment: '',
        applicable: true,
        description:
          '<p>Automated accessibility testing is a crucial step in ensuring that web applications are inclusive and meet accessibility standards. Tools like Axe can be integrated into the testing process to automatically identify and report accessibility issues, providing developers with actionable insights to improve the user experience for individuals with disabilities. By incorporating automated tests into the development workflow, teams can efficiently catch and address accessibility violations early in the process, reducing the risk of non-compliance and enhancing the overall usability of the application. This proactive approach helps maintain a high standard of accessibility throughout the project lifecycle.</p><ul><li>Check if the Axe test is used</li><li>Look for rule disablements in the Axe test</li></ul>',
        questions: [
          { question: 'Are automated accessibility tests present?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the vuejs accessibility eslint ruleset enabled?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Screenreader Test',
        comment: '',
        applicable: true,
        description:
          '<p>Screenreader testing is an essential component of accessibility evaluation, ensuring that web applications are navigable and comprehensible for users who rely on assistive technologies. Screenreaders convert digital text into synthesized speech, allowing individuals with visual impairments to interact with web content. By conducting thorough screenreader tests, developers can identify potential barriers and enhance the usability of their applications for this audience. This process involves verifying that all interactive elements are properly labeled, content is logically structured, and navigation is intuitive. Prioritizing screenreader compatibility not only fosters inclusivity but also aligns with accessibility standards and best practices.</p>',
        questions: [{ question: 'Does the application pass a manual screenreader test?', score: 0, weight: 1, questionType: 'rating', comment: '' }],
      },
    ],
  },
  versioning: {
    title: 'Versioning',
    img: '/img/versioning.avif',
    description: 'Ensure that the project follows best practices for version control and versioning.',
    topics: [
      {
        title: 'Merge Quality',
        comment: '',
        applicable: true,
        description:
          '<p>Maintaining high merge quality is essential for ensuring a clean and stable codebase in any version-controlled project. Effective merge practices help avoid unnecessary complications, such as redundant commits and unresolved conflicts, which can lead to code instability and hinder collaboration. By prioritizing clean merges, teams can ensure that only relevant changes are integrated, maintaining a clear project history and facilitating easier tracking of modifications. Proper conflict resolution and diligent review of merge requests are crucial steps in preserving code integrity and preventing potential issues during deployment.</p><ul><li>Ensure that merges are clean and do not contain unnecessary commits.</li><li>Check if conflicts are resolved properly.</li><li>Provide examples of problematic merge issues.</li></ul>',
        questions: [
          { question: 'Are merges clean and concise?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are merge conflicts resolved appropriately?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is unnecessary merging avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Commit Message Quality',
        comment: '',
        applicable: true,
        description: `<ul>
                        <li>Ensure that commit messages are clear, concise, and meaningful.</li>
                        <li>Follow the conventional commit guidelines.</li>
                      </ul>`,
        questions: [
          { question: 'Are commit messages clear and meaningful?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Do commit messages follow conventional commit guidelines?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are commit messages concise?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'Commit Linting',
        comment: '',
        applicable: true,
        description: `<ul>
                        <li>Ensure that commit messages are linted to follow a consistent style.</li>
                        <li>Check if automated tools are used for commit linting.</li>
                      </ul>`,
        questions: [
          { question: 'Is commit linting enforced?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are automated tools used for commit linting?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are linting errors in commit messages avoided?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Commit Message Quality',
        comment: '',
        applicable: true,
        description:
          "<p>Commit message quality is a vital aspect of effective version control, playing a significant role in maintaining a project's clarity and manageability. Well-crafted commit messages provide a clear and concise history of changes, making it easier for team members to understand the evolution of the codebase. By following conventional commit guidelines, developers can ensure that messages are structured and informative, facilitating better collaboration and simplifying tasks such as code reviews and debugging. High-quality commit messages not only enhance communication within the team but also serve as valuable documentation for future reference.</p><ul><li>Ensure that commit messages are clear, concise, and meaningful.</li><li>Follow the conventional commit guidelines.</li></ul>",
        questions: [
          { question: 'Is semantic versioning followed?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are version increments meaningful?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Do versions follow the MAJOR.MINOR.PATCH format?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          {
            question:
              'Are semantic versions generated according to standards (conventional-commits)? For example: Breaking changes -> major, Feature -> minor, Bugfix -> patch',
            score: 0,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
      {
        title: 'Change-log Quality',
        comment: '',
        applicable: true,
        description:
          "<p>A high-quality change-log is an essential tool for tracking the history of changes in a project, providing a comprehensive record that benefits developers, stakeholders, and users alike. A well-maintained change-log not only documents what has been modified, added, or removed but also offers context and clarity, making it easier to understand the project's evolution. By ensuring that changes are documented clearly and consistently, teams can facilitate seamless communication and collaboration, aiding in tasks such as deployments, troubleshooting, and auditing. A thorough change-log enhances transparency and accountability, serving as a reliable reference for all project participants.</p><ul><li>Ensure that the change-log is updated and well-maintained.</li><li>Check if changes are documented clearly.</li></ul>",
        questions: [
          { question: 'Is the change-log well-maintained?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are changes documented clearly in the change-log?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the change-log updated regularly?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are change-logs generated on merge of a feature branch?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'PR Discipline',
        comment: '',
        applicable: true,
        description:
          '<p>Maintaining strong pull request (PR) discipline is crucial for effective collaboration and code quality in a development team. Well-managed PRs facilitate smooth integration of changes, reduce the risk of introducing bugs, and enhance the overall development workflow. By ensuring that PRs are small, focused, and adhere to best practices, teams can streamline the review process and enable more thorough and efficient evaluations. This discipline helps in catching potential issues early, promoting a culture of continuous improvement and learning. Providing examples of good and bad PR practices can further reinforce these principles, guiding developers towards more effective contribution strategies.</p><ul><li>Ensure that pull requests (PRs) follow best practices.</li><li>Check if PRs are small, focused, and reviewed properly.</li><li>Provide examples of good and bad PR practices.</li></ul>',
        questions: [
          { question: 'Are PRs small and focused?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are PRs reviewed properly?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are best practices followed in PRs?', score: 0, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'Branching Quality',
        comment: '',
        applicable: true,
        description:
          '<p>Branching quality is a key factor in maintaining an organized and efficient version control system. An effective branching strategy allows teams to manage multiple streams of work simultaneously, enabling features, bug fixes, and experiments to be developed in isolation before being integrated into the main codebase. Keeping branches updated with main branches and using rebasing where appropriate ensures that changes are smoothly incorporated and reduces the potential for conflicts. Adopting good branching practices, such as meaningful branch naming and regular synchronization with the main branch, enhances collaboration and helps maintain a clean project history, facilitating easier tracking and management of changes.</p><ul><li>Ensure that the branching strategy is effective and branches are kept updated with main branches.</li><li>Check if rebasing is used where appropriate.</li><li>Provide examples of good branching practices.</li></ul>',
        questions: [
          { question: 'Is the branching strategy effective?', score: 0, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are branches regularly updated with main branches?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is rebasing used where appropriate?', score: 0, weight: 1, questionType: 'trueFalse', comment: '' },
          {
            question: 'Rebase is being used to avoid merges from main branches to feature branches and to keep the branches updated?',
            score: 0,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
    ],
  },
};