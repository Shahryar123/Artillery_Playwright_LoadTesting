# Artillery + Playwright Project

This project integrates [Playwright](https://playwright.dev/) for browser automation and [Artillery](https://www.artillery.io/) for load testing. It demonstrates how to run functional browser tests and load tests against a sample login flow.

## Project Structure

```
.
├── artillery.yml                # Artillery load test configuration
├── package.json                 # Project dependencies
├── playwright.config.js         # Playwright configuration
├── playwright-report/           # Playwright HTML test reports
├── test-results/                # Playwright test result data
├── tests/
│   ├── example.spec.js          # Playwright test for login flow
│   ├── artillery/
│   │   └── login-flow.js        # Artillery processor using Playwright
│   └── commands/
│       └── login-flow.js        # Login flow logic for reuse
└── tests-examples/
    └── demo-todo-app.spec.js    # Example Playwright test
```

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Install Artillery globally (if not already):**
   ```sh
   npm install -g artillery
   ```

## Usage

### Run Playwright Tests

```sh
npx playwright test --headed
```

### Run Artillery Load Test

```sh
artillery run artillery.yml
```

### Generate Playwright Test from Recorder

```sh
npx playwright codegen
```

## How It Works

- The login flow is defined in [`tests/commands/login-flow.js`](tests/commands/login-flow.js).
- Playwright test: [`tests/example.spec.js`](tests/example.spec.js) runs the login flow.
- Artillery load test: [`artillery.yml`](artillery.yml) uses Playwright via [`tests/artillery/login-flow.js`](tests/artillery/login-flow.js) to simulate multiple users performing the login flow.

## Reports

- After running Playwright tests, view the HTML report in [`playwright-report/index.html`](playwright-report/index.html).

##

### Artillery Reports

- Create json file for the metrics outpur
```sh
artillery run artillery.yml --output results.json
```

- || The "report" command has been deprecated and is no longer supported
- Create html report from the json
```sh
artillery report results.json
```