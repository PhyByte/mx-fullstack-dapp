# React DApp Template for MultiversX Blockchain

This project is a boilerplate for creating decentralized applications (DApps) using the MultiversX Blockchain SDK. It utilizes various modern technologies and tools to provide a fast, efficient, and easy-to-use development environment.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
  - *Benefit*: Declarative UI components, component-based architecture, and efficient updates and rendering.
- **TypeScript**: An open-source language that builds on JavaScript by adding static type definitions.
  - *Benefit*: Strongly typed, catch errors early, improved readability and understanding of the code.
- **Chakra UI**: A simple, modular, and accessible component library.
  - *Benefit*: Consistent design, ease of use, and accessibility.
- **Vite.js**: An extremely fast front-end build tool.
  - *Benefit*: Fast development, instant server start, and optimized builds.
- **Zustand**: A small, fast, and scalable state management tool.
  - *Benefit*: Minimal API, no boilerplate, and scalable.
- **Prettier**: An opinionated code formatter.
  - *Benefit*: Consistent code style, easy integration, and automation.

## Getting Started

### Prerequisites

Ensure that you have Node.js installed on your local machine.

### Installation

1. Clone the repository.
2. Change into the project directory.
3. Install the dependencies by running the following command:

```bash
npm install
```

### Running the Application

To run the application locally, execute:

```bash
npm run start
```

This will start the development server, and the application will be accessible at `http://localhost:3000`.

## Modify Configuration

### Environment Variables

You can configure the environment variables by modifying the `.env` file in the root of the project directory. Make sure to update the variables to match your MultiversX Blockchain configuration and other settings.

### Docker Container

To build and run the application using Docker, execute the following commands:

```bash
docker build -t react-dapp-template .
docker run -p 3000:3000 react-dapp-template
```

This will build a Docker image of your application and run it in a container, making it accessible at `http://localhost:3000`. Ensure Docker is installed on your system to use these commands.

## Available Scripts

In the project directory, you can run:

- `npm run start`: Runs the app in the development mode.
- `npm run build`: Builds the app for production, placing the build artifacts in the `build` directory.
- `npm test`: Launches the test runner, running all available tests in the project.

Use `npm run build` to prepare your application for deployment, ensuring it is optimized, minified, and ready for production use.

## Contributing

Feel free to send pull requests for any improvements or feature additions. Follow the standard Git workflow:

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Submit a pull request for review.

## License

This project is open-source and available under the [MIT License](LICENSE). Ensure to include the `LICENSE` file in your project directory to provide information on the terms and conditions for use, reproduction, and distribution of your project.

---

Happy Coding!
