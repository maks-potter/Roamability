# Roamability
(Angular 5, Node.js, Socket.io)

## Task
>Implement a price distribution system for services to subscribers.<br>

>Operators:<br>
MTS, BEELINE, MEGAFON, TELE2, YOTA

>Backend "Data source":
>- Random number generator, once in 0.6 seconds gives a new value of the price from one of the 5 operators.

>Frontend:
>- receives an update every two seconds
>- displays the list of prices received in the table
>- allows you to choose one operator for which in a separate widget the user can see the latest price, with color coding, green - decreased, red - increased, if there is no change, the color does not change. Compare with the previous price in time.
>- when opening in another browser tab, the setting of the selected operator should be preserved

>Implement on Angular version 4 or above.<br>
>The protocol of interaction with the server of any choice: REST, SOAP, WebSocket<br>
>The implementation of Backend is anything, even you can make it mock on the client.<br>
>Design - at your discretion.

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
