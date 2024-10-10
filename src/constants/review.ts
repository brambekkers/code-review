import qualityImg from '../assets/img/subjects/quality.avif';
import dependenciesImg from '../assets/img/subjects/dependencies.avif';
import setupImg from '../assets/img/subjects/setup.avif';
import technologyImg from '../assets/img/subjects/setup.avif';
import stylingImg from '../assets/img/subjects/styling.avif';
import bestPracticesImg from '../assets/img/subjects/best-practices.avif';
import testingImg from '../assets/img/subjects/testing.avif';
import accessibilityImg from '../assets/img/subjects/accessibility.avif';
import versioningImg from '../assets/img/subjects/versioning.avif';

export const review = {
  qualityGates: {
    title: 'Code Quality',
    img: qualityImg,
    description: 'Ensure that the codebase is of high quality and follows best practices.',
    topics: [
      {
        title: 'ESLint',
        applicable: true,
        description:
          '<ul><li>Ensure that ESLint is configured and enabled.</li><li>Run eslint</li><li>Search whole repository for the following query to find disabled rules</li><li>Ensure that the ESLint configuration is up-to-date and follows best practices.</li></ul>',
        questions: [
          {
            question: 'Is ESlint enabled?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the configuration in one file?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Does the configuration deviate?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are there in-line rule disablements?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there ESlint errors?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are there ESlint warnings?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
        ],
      },
      {
        title: 'SonarQube',
        applicable: true,
        description:
          '<ul><li>Check the SonarQube dashboard</li><li>Check the sonar-project.properties file to see if certain files are excluded from the scan</li><li>Check if the SonarQube scan is executed in the pipeline</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          {
            question: 'Is SonarQube enabled?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the correct Quality gate enabled?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there Blocker issues?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are there Critical issues?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are there Major issues?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are there Minor issues?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: "Are there incorrectly marked 'false-positives' or 'wont-fix'?",
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
      {
        title: 'HP Fortify',
        applicable: true,
        description:
          '<ul><li>Check the Fortify dashboard</li><li>Check if the Fortify scan is enabled in the pipeline file</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          {
            question: 'Is HP Fortify enabled?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there Critical issues?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are there High severity issues?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are there Medium severity issues?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are there Low severity issues?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
        ],
      },
      {
        title: 'NexusIQ',
        applicable: true,
        description:
          '<ul><li>Check the NexusIQ dashboard</li><li>Check if the NexusIQ scan is enabled in the pipeline file</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          {
            question: 'Is NexusIQ enabled?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there Blocking (threat level >=8) violations?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are there Future Blocking (threat level 7) violations?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are there other violations?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
        ],
      },
    ],
  },
  dependencies: {
    title: 'Dependencies',
    img: dependenciesImg,
    description: 'Ensure that the project dependencies are up-to-date and following best practices.',
    topics: [
      {
        title: 'Supported dependencies',
        applicable: true,
        description:
          '<ul><li>Invoke the vue-cli-plugin-ibrebuild and check the differences in dependencies</li><li>Check the nodeVersion that is set in the pipeline file (>18)</li><li>Check the lockfileVersion in the package-lock.json file (v3)</li><li>Check for unsupported dependencies like: emerald-global, axios, extract-loader, ...</li><li>Provide examples of problematic issues</li><li>Run `npx depcheck` to find possible dependency issues.</li></ul>',
        questions: [
          {
            question: 'Is the latest supported version of Vue used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the latest supported version of Node used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are the Emerald Web Components used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the @aab/sc-vue-cli-plugin-ibrebuild used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there unused dependencies used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are dependencies and devDependencies mixed? (Testcafe, playwright, babel, ... in dependencies)',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there unsupported dependencies used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there deprecated dependencies used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is semver used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
      {
        title: 'Lifecycle management',
        applicable: true,
        description: '<ul><li>Run npm outdated</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          {
            question: 'Are there outdated dependencies present?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
    ],
  },
  setup: {
    title: 'Project set-up',
    img: setupImg,
    description: 'Ensure that the project setup follows the expected structure and conventions.',
    topics: [
      {
        title: 'Folder structure',
        applicable: true,
        description:
          '<ul><li>Invoke the vue-cli-plugin-ibrebuild and check the differences in the source control section of your IDE</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          {
            question: 'Does the folder structure deviate from the default scaffolded project?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are the folders and files semantically named?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the folder- and file name spacing consistent?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there missing folders?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are concerns separated logically?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
      {
        title: 'Protected files from @aab/cli',
        applicable: true,
        description:
          '<ul><li>Invoke the vue-cli-plugin-ibrebuild and check the differences in the source control section of your IDE</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          {
            question: 'Are protected files modified?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
    ],
  },
  styling: {
    title: 'Styling',
    img: stylingImg,
    description: "Ensure that the project's styling follows the Emerald Design System guidelines.",
    topics: [
      {
        title: 'Emerald components',
        applicable: true,
        description:
          "<ul><li>Check the package.json for @aab/sc-aab-* components</li><li>Search the project with the following query for each component to find unused components: import '@aab/sc-aab-COMPONENT-NAME'</li><li>Check for unsupported dependencies like: bootstrap, vuetify</li><li>Provide examples of problematic issues</li></ul>",
        questions: [
          {
            question: 'Are the Emerald Web Components used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there unused Emerald components and imports present?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there local UI components present?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there third-party UI components present?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
      {
        title: 'Emerald styling',
        applicable: true,
        description:
          '<ul><li>Check the package.json for the @aab/sc-styles-emerald package</li><li>Check the package.json for the older @aab/sc-styles-* packages</li><li>Check the package.json for the deprecated emerald-global package</li><li>Lots of custom styling usually means deviation from the Emerald Design System</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          {
            question: 'Is the @aab/sc-styles-emerald component used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Does the project deviate from the Emerald Design System style guide?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is custom styling kept to a minimum?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is inline styling avoided?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are stylesheets logically located?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Is the old emerald-global present?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the old CSS-in-JS stack present?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
    ],
  },
  technology: {
    title: 'Technology stack usage',
    img: technologyImg,
    description: "Ensure that the project's technology stack usage follows best practices and conventions.",
    topics: [
      {
        title: 'Vue Essentials',
        applicable: true,
        description:
          "<p>This section follows the structure of the 'Essentials' section of the official Vuejs documentation: https://vuejs.org/guide/essentials/template-syntax.html</p><ul><li>Use the documentation to clarify doubts or best practices</li><li>Search the whole project for directives of a specific section (e.g.: v-if)</li><li>Search the whole project for method names of a specific section (e.g.: watch)</li><li>Provide examples of problematic issues</li></ul>",
        questions: [
          {
            question: 'Is text interpolation used correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are attributes bound correctly with the v-bind shorthand (:) which is preferred over its longer version?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are Boolean attributes bound correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are objects of attributes bound correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are JavaScript expressions inside of data bindings used correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are functions called correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Is v-html avoided?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is reactive state declared correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are methods declared correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Is reactive() used correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Is ref() used correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are computed properties used correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are computed properties side-effect free?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are computed properties immutable?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is class binding used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is style binding avoided?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are the v-if, v-else-if, and v-else directives used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are the directives used in combination with the <template> tag to toggle more than one element?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the v-show directive used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are v-if and v-for on the same element avoided?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the v-cloak directive avoided?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the v-for directive used correctly for an array?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the v-for directive used correctly for an object?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is v-for used in combination with the <template> tag to render a block of multiple elements?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are v-for and v-if on the same element avoided?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the key attribute used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are events handled using the v-on shorthand (@) which is preferred over its longer version?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: "Are inline handlers' length and complexity acceptable?",
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are method handlers used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are original DOM events passed correctly to handlers?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are event modifiers used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are key modifiers used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are mouse button modifiers used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is v-model used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are modifiers used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are lifecycle hooks used correctly for the options API?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are lifecycle hooks used correctly for the Composition API?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is data retrieval done in the correct lifecycle hook?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is DOM manipulation done in the correct lifecycle hook?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the amount of code in lifecycle hooks acceptable?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are watchers used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are deep watchers used cautiously?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are eager watchers used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is watchEffect() used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is callback flush timing used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are watchers stopped correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are refs used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are refs accessed correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are refs inside v-for used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are function refs used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are refs on components used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are composables used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: "Is the 'use' naming convention followed?",
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are input arguments handled correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are values returned correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are side effects handled correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are the usage restrictions kept in mind?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are composables correctly used for Code Organization?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are mixins avoided?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
      {
        title: 'Vue Components essentials',
        applicable: true,
        description:
          "<p>This section follows the structure of the 'Components In-Depth' section of the official Vuejs documentation: https://vuejs.org/guide/components/registration.html</p><ul><li>Use the documentation to clarify doubts or best practices</li><li>Search the whole project for unique parts of a specific section (e.g.: <slot)</li><li>Search the whole project for method names of a specific section (e.g.: emit)</li><li>Provide examples of problematic issues</li></ul>",
        questions: [
          {
            question: 'Are components defined correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are components registered correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the PascalCase name casing used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are props defined correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the camelCase name casing used for defining props?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are props used as kebab-case attributes?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is prop validation used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Do props have a type defined?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Do props have default value defined?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are events defined correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the camelCase name casing used for defining events?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the kebab-case name casing used for listening on events?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are events emitted correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are events listened to correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are event arguments passed correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are events explicitly declared using the emits option?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is event validation used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are slots used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are named slots used correctly?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is the v-slot shorthand (#) used which is preferred over its longer version?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are there renderless components present?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
      {
        title: 'Routing',
        applicable: true,
        description:
          '<p>This section follows the official vue-router documentation: https://router.vuejs.org/guide/</p><ul><li>Use the documentation to clarify doubts or best practices</li><li>Search the whole project for unique parts of a specific section (e.g.: router.push( )</li><li>Invoke the vue-cli-plugin-ibrebuild and check the differences in the source control section of your IDE</li><li>Provide examples of problematic issues</li></ul>',
        questions: [
          {
            question: 'Are routes defined correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are named routes used which is the preferred way?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is router-link or router.push used to navigate?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Is the namespacing of routes consistent?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Is there a fallback route in place?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is hashmode used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Is createWebHashHistory used?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
          {
            question: 'Are nested routes used correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are navigation guards used correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Is the meta field used correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are props passed correctly?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
          {
            question: 'Are the router files logically placed?',
            score: null,
            weight: 1,
            questionType: 'rating',
            comment: '',
          },
        ],
      },
    ],
  },
  bestPractices: {
    title: 'Best Practices',
    img: bestPracticesImg,
    description: 'Ensure that the project follows best practices and conventions.',
    topics: [
      {
        title: 'Readability',
        applicable: true,
        description: `<p>This section is based on Chapter 3 of the book: 
                        <i>Refactoring: Improving the Design of Existing Code</i> by Martin Fowler. 
                        The book is available on the O’reilly learning platform which is available within ABN AMRO: 
                        <a href="https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/">https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/</a></p>
                        <ul>
                          <li>Use the documentation to clarify doubts or best practices</li>
                          <li>Provide examples of problematic issues</li>
                        </ul>`,
        questions: [
          { question: 'Are mysterious names avoided?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is duplicate code avoided?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are long functions avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are functions with a long parameter list avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is non-state global data avoided?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is global mutable data avoided?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are you able to make a change in one single point?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are repeated conditionals avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are nested conditionals avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are lots of loops avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are nested loops avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are large components avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is formatting present?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is consistent name spacing present?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are high complexity functions avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are large expressions in templates avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'Documentation',
        applicable: true,
        questions: [
          { question: 'Is the code self-documenting?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are inline comments present?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are JSdoc comments present?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is there a proper changelog?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is there a proper readme?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Security',
        applicable: true,
        description: `<p>This section is based on the OWASP top 10: 
                        <a href="https://owasp.org/www-project-top-ten/">https://owasp.org/www-project-top-ten/</a></p>
                        <ul>
                          <li>Use the documentation to clarify doubts or best practices</li>
                          <li>Look for private keys or credentials</li>
                          <li>Provide examples of problematic issues</li>
                        </ul>`,
        questions: [
          { question: 'Are secrets in the repository avoided?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is broken access control avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are cryptographic failures avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the possibility of injection avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is insecure design avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is security misconfiguration avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are vulnerable and outdated components avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are identification and authentication failures avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are software and data integrity failures avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are security logging and monitoring failures present?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is server-side request forgery avoided?', score: null, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
    ],
  },
  testing: {
    title: 'Testing',
    img: testingImg,
    description: 'Ensure that the project has a high test coverage and follows best practices for testing.',
    topics: [
      {
        title: 'Unit testing',
        applicable: true,
        description: `<ul>
                          <li>No coverage tricks, search for:
                            <ul>
                              <li>/* c8 ignore</li>
                              <li>/* istanbul ignore</li>
                            </ul>
                          </li>
                          <li>No skipped unit-tests, search for:
                            <ul>
                              <li>.skip</li>
                              <li>.only</li>
                            </ul>
                          </li>
                          <li>100% coverage on all files is suspicious</li>
                          <li>Check if files are excluded from coverage from jest config file</li>
                          <li>Stryker can be used to get a more in-depth view on the quality of tests, though it should be used sensibly: 
                            <a href="https://stryker-mutator.io/docs/stryker-js/guides/vuejs/">https://stryker-mutator.io/docs/stryker-js/guides/vuejs/</a>
                          </li>
                          <li>Provide examples of problematic issues</li>
                        </ul>`,
        questions: [
          { question: 'Are unit tests present?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is code split up in pure functions to easily test?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the coverage threshold met? >80%, less than 100%', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are unit tests meaningful?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are unit tests isolated?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are externals mocked correctly?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are components mounted correctly?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are skipped test(suite)s avoided?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the ibrs-test-helpers module used?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are promises correctly handled?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the recommended way of unit testing followed?', score: null, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'Functional testing',
        applicable: true,
        description: `<ul>
                          <li>No skipped tests, search for:
                            <ul>
                              <li>.only</li>
                            </ul>
                          </li>
                          <li>Check if functional tests are run in the build step of the pipeline</li>
                          <li>Provide examples of problematic issues</li>
                        </ul>`,
        questions: [
          { question: 'Are functional tests present?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are critical flows tested?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is user interaction tested?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are skipped test(suite)s avoided?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are page object models from the Emerald Web Components used?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'E2E testing',
        applicable: true,
        description: `<ul>
                          <li>No skipped tests, search for:
                            <ul>
                              <li>.only</li>
                            </ul>
                          </li>
                          <li>Check if E2E tests are enabled in the pipeline on DTA</li>
                          <li>Provide examples of problematic issues</li>
                        </ul>`,
        questions: [
          { question: 'Are E2E tests present?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are critical flows tested?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are the E2E tests triggered on the acceptance environment?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Performance testing',
        applicable: true,
        description: `<ul>
                          <li>Check if E2E tests are enabled in the pipeline on DTA</li>
                          <li>Check the bundle size and content with the webpack-bundle analyzer, by:
                            <ul>
                              <li>Add the --report flag to the vue-cli build command</li>
                              <li>Run the build command</li>
                              <li>Check the report</li>
                            </ul>
                          </li>
                          <li>Check if a flow is created</li>
                        </ul>`,
        questions: [
          { question: 'Is performance testing enabled?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the performance testing result acceptable?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the size of the bundled application acceptable?', score: null, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
    ],
  },
  accessibility: {
    title: 'Accessibility',
    img: accessibilityImg,
    description: 'Ensure that the project is accessible for all users.',
    topics: [
      {
        title: 'Automated tests',
        applicable: true,
        description: `<ul>
                          <li>Check if the axe test is used</li>
                          <li>Look for rule disablements in the axe test</li>
                        </ul>`,
        questions: [
          { question: 'Are automated accessibility tests present?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is the vuejs accessibility eslint ruleset enabled?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Screenreader test',
        applicable: true,
        questions: [{ question: 'Does the application pass a manual screenreader test?', score: null, weight: 1, questionType: 'rating', comment: '' }],
      },
    ],
  },
  versioning: {
    title: 'Versioning',
    img: versioningImg,
    description: 'Ensure that the project follows best practices for version control and versioning.',
    topics: [
      {
        title: 'Merge Quality',
        applicable: true,
        description: `<ul>
                        <li>Ensure that merges are clean and do not contain unnecessary commits.</li>
                        <li>Check if conflicts are resolved properly.</li>
                        <li>Provide examples of problematic merge issues.</li>
                      </ul>`,
        questions: [
          { question: 'Are merges clean and concise?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are merge conflicts resolved appropriately?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is unnecessary merging avoided?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Commit Message Quality',
        applicable: true,
        description: `<ul>
                        <li>Ensure that commit messages are clear, concise, and meaningful.</li>
                        <li>Follow the conventional commit guidelines.</li>
                      </ul>`,
        questions: [
          { question: 'Are commit messages clear and meaningful?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Do commit messages follow conventional commit guidelines?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are commit messages concise?', score: null, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'Commit Linting',
        applicable: true,
        description: `<ul>
                        <li>Ensure that commit messages are linted to follow a consistent style.</li>
                        <li>Check if automated tools are used for commit linting.</li>
                      </ul>`,
        questions: [
          { question: 'Is commit linting enforced?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are automated tools used for commit linting?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are linting errors in commit messages avoided?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'Semantic Versioning Quality',
        applicable: true,
        description: `<ul>
                        <li>Ensure that semantic versioning is followed properly.</li>
                        <li>Check if version increments are meaningful and follow the standard (MAJOR.MINOR.PATCH).</li>
                      </ul>`,
        questions: [
          { question: 'Is semantic versioning followed?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are version increments meaningful?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Do versions follow the MAJOR.MINOR.PATCH format?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          {
            question:
              'Are semantic versions generated according to standards (conventional-commits)? For example: Breaking changes -> major, Feature -> minor, Bugfix -> patch',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
      {
        title: 'Change-log Quality',
        applicable: true,
        description: `<ul>
                        <li>Ensure that the change-log is updated and well-maintained.</li>
                        <li>Check if changes are documented clearly.</li>
                      </ul>`,
        questions: [
          { question: 'Is the change-log well-maintained?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are changes documented clearly in the change-log?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Is the change-log updated regularly?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Are change-logs generated on merge of a feature branch?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
        ],
      },
      {
        title: 'PR Discipline',
        applicable: true,
        description: `<ul>
                        <li>Ensure that pull requests (PRs) follow best practices.</li>
                        <li>Check if PRs are small, focused, and reviewed properly.</li>
                        <li>Provide examples of good and bad PR practices.</li>
                      </ul>`,
        questions: [
          { question: 'Are PRs small and focused?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are PRs reviewed properly?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are best practices followed in PRs?', score: null, weight: 1, questionType: 'rating', comment: '' },
        ],
      },
      {
        title: 'Branching Quality',
        applicable: true,
        description: `<ul>
                        <li>Ensure that the branching strategy is effective and branches are kept updated with main branches.</li>
                        <li>Check if rebasing is used where appropriate.</li>
                        <li>Provide examples of good branching practices.</li>
                      </ul>`,
        questions: [
          { question: 'Is the branching strategy effective?', score: null, weight: 1, questionType: 'rating', comment: '' },
          { question: 'Are branches regularly updated with main branches?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          { question: 'Is rebasing used where appropriate?', score: null, weight: 1, questionType: 'trueFalse', comment: '' },
          {
            question: 'Rebase is being used to avoid merges from main branches to feature branches and to keep the branches updated?',
            score: null,
            weight: 1,
            questionType: 'trueFalse',
            comment: '',
          },
        ],
      },
    ],
  },
};
