# SocketChatExampleApp

The application has deployed to Heroku platform and could be accessed by URL:
https://egorovdmi-socket-chat-app.herokuapp.com/

To build from sources and run localy follow steps below.

## Running development version

### Step 1. Install packages
Run `npm i` to install required packages.

### Step 2. Run development server
Run `npm run serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running production version

### Step 1. Install packages
Run `npm i` to install required packages.

### Step 2. Build
Run `npm run postinstall` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` and `--aot` flag for a production build.

### Step 3. Run Express server
Run `npm run start` to run Express server. Navigate to `http://localhost/`.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
