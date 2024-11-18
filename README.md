# Code Review App

This is a simple code review application designed to assist code reviewers in evaluating codebases. Built using Vite and Vue3, the app guides you through various topics, allowing you to answer questions and provide ratings for each topic. At the end of the review, the project receives a score for each topic, and the results can be shared with the team.

This tool is intended for reviewers and not for the teams managing the project. As a reviewer, you provide all the information from the team, allowing for effective comparison of teams afterward.

## Features

- **Guided Review Process**: Walk through predefined topics to ensure comprehensive code reviews.
- **Rating and Feedback**: Provide ratings and answer questions for each topic to give detailed feedback.
- **Different scoring systems**: Currently we support different ways of scoring topics within an application. One of them is s-tier rating but also true/false answers.
- **Mark certain topics as unapplicable**: Not every topic will be applicable to every project. You can make topics n/a and they will not be included in the final score.
- **Export and Import Reviews**: Save your work by exporting reviews as JSON files and import them when needed.
- **Score Sharing**: Share the final scores of the reviewed project with your team for collaborative insights.

## Demo

https://code-review-f53d6.web.app

## Usage

1. Launch the application and start a new code review session.
2. Follow the prompts to review each topic, provide ratings, and respond to questions.
3. Upon completion, view the scores for each topic and share the results as needed.
4. Use the export feature to save your review as a JSON file, and import it later if necessary.

## Local installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/brambekkers/code-review
   ```

2. Navigate to the project directory:

   ```bash
   cd code-review
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to use the app.

## Contribution

Feel free to contribute to the project by forking the repository and creating a pull request with your changes. Please ensure your changes align with the overall project goals and maintain the code quality.

## License

This project is a personal project but build for ABN Amro.

## Contact

For any questions or feedback, please reach out to me. Thank you for using the Code Review App! We hope it enhances your code reviewing experience.
