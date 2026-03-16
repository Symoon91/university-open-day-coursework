# University Open Day Application

This repository contains the source code for the University Open Day Application, a web-based project designed to showcase various aspects of a university during an open day event. It provides an interactive experience for prospective students to explore the campus, departments, and facilities.

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Before you begin, ensure you have the following software installed on your system:

*   **Node.js**: Version 18 or higher. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm** (Node Package Manager) or **pnpm** (Performant Node Package Manager) or **Yarn**: These are package managers for JavaScript. npm comes bundled with Node.js. If you prefer pnpm or Yarn, you can install them globally:
    ```bash
    npm install -g pnpm
    # or
    npm install -g yarn
    ```

### Installation

1.  **Clone the repository**:
    Open your terminal or command prompt and run the following command to clone the project to your local machine:
    ```bash
    git clone https://github.com/Symoon91/university-open-day-coursework.git
    ```

2.  **Navigate into the project directory**:
    ```bash
    cd university-open-day-coursework
    ```

3.  **Install dependencies**:
    Use your preferred package manager to install the project dependencies:
    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

### Running the Application

To start the development server and run the application locally, execute one of the following commands in the project directory:

```bash
npm run dev
# or
pnpm run dev
# or
yarn dev
```

Once the development server starts, the application will typically be accessible in your web browser at `http://localhost:5173` (or another port if 5173 is already in use). The terminal will usually provide the exact URL.

## Project Structure

The project is structured as a standard React application, likely using Vite for fast development. Key directories include:

*   `public/`: Static assets like `favicon.ico` and `extracted_logo.png`.
*   `src/`: Contains the main application logic, including:
    *   `src/App.jsx`: The main React component.
    *   `src/main.jsx`: Entry point of the application.
    *   `src/components/`: Reusable React components.
    *   `src/assets/`: Images and other media assets.
    *   `src/hooks/`: Custom React hooks.
    *   `src/lib/`: Utility functions.

## Contributing

If you plan to contribute to this project, please ensure you follow the existing code style and commit message conventions. More detailed contribution guidelines can be added here if necessary.

## License

This project is open-sourced under the MIT License. See the `LICENSE` file for more details (if applicable).

---


