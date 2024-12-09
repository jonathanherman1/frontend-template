# Frontend Demo

This is the frontend application for a full stack MERN demo. It is built using React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Frontend Demo](#frontend-demo)
  - [Table of Contents](#table-of-contents)
  - [Screenshots](#screenshots)
  - [Features](#features)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Testing](#testing)
  - [License](#license)

## Screenshots

- [Demo Video](https://youtu.be/gaenyhsL5nQ)
- [Empty State](https://drive.google.com/file/d/1gr1-yTLu2YKLaOJLtR0h1Uq18G_uNj5G/view)
- [Empty State - Dark Mode](https://drive.google.com/file/d/1RfR83t4u-yvs3ktX9XUWamNGTmclKbEd/view)
- [Mobile](https://drive.google.com/file/d/12SuMZT9mkExthe4bI7qvUgXx9Irj4Y44/view)
- [Mobile - Dark Mode](https://drive.google.com/file/d/1jS4Y6XjPDFNU3RtEbfLeZUCept6nFGK6/view)

## Features

- Form validation with React Hook Form and Zod
- Responsive design with Tailwind CSS
- Unit and integration tests with Vitest and Testing Library
- End-to-end tests with Cypress

## Installation

1. Clone the repository:
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create `.env.production` and `.env.development` files with the following variables (value does not include anything after "="):

    `.env.production`
    ```sh
    VITE_API_URL=<VERSIONED_API_URL_HERE>
    VITE_API_BASE_PATH=/api/v1
    ```

    `.env.development`
    ```sh
    VITE_API_URL=http://localhost:3000
    VITE_API_BASE_PATH=/api/v1
    ```


## Environment Variables

Create .env files in the root directory and configure the following variables as shown in the `.env.example`.

You'll need `.env.development`, `.env.device`, `.env.production`.

`.env.development`
```sh
VITE_API_URL=http://localhost:3000
VITE_API_BASE_PATH=/api/v1
```

`.env.device`
```sh
VITE_API_URL=<YOUR_IP_ADDRESS>:3000
VITE_API_BASE_PATH=/api/v1
```

`.env.production`
```sh
VITE_API_URL=<VERSIONED_API_URL_HERE>
VITE_API_BASE_PATH=/api/<CURRENT_API_VERSION>
```


## Usage

To start the development server, run:
```sh
npm run dev
```

To build the project for production (outputs built files to `/dist`), run:
```sh
npm run build
```

To preview the production build, run:
```sh
npm run preview
```

To preview the production build on a device on your local network:

1. Add a `.env.device` file in the root of the repo

    ```sh
    VITE_API_URL=http://<YOUR_IP_ADDRESS>:3000
    VITE_API_BASE_PATH=/api/v1
    ```

2. Build the app


3. Run the command to launch a build that's visible to the local network

    ```sh
    npm run preview:device
    ```

## Deployment

You can choose to deploy with the service of your choice.

The main thing is to make sure that you set an environment variable `VITE_API_URL` to the newly hosted backend base route (no trailing slashes!).

Note: It may make sense to deploy the backend first, but you can do this in either order. You will just need to set temporary environment variable(s) in one or the other until that service is deployed.


## Testing
To run unit and integration tests with Vitest, run:

```sh
npm run test
```

To run end-to-end tests with Cypress, run:
```sh
npm run test:e2e
```

To run end-to-end tests in headless mode, run:
```sh
npm run test:e2e:headless
```

## License
This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.
