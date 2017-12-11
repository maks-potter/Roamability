# Roamability
(Angular 5, Socket.io)

## Setup App
* Install Node.js 8
* Install yarn: `npm install -g yarn`
* `git clone https://github.com/makspotter/Roamability.git Roamability`
* `cd Roamability`
* `yarn install --force`

## Run Socket.io server (websocket)
Run `yarn server`
Server will be run on `http://localhost:3000/`

## Run Application
### Development server
Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build
Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests
Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).