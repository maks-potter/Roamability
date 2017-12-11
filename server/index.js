const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('Roamability server');
});

let pricesInterval;

/* Generate random price between 0 to 4 */
const getRandomOperatorId = () => {
  return Math.round(Math.random() * 4);
};

/* Generate random price between 1 to 10 */
const getRandomPrice = () => {
  return +(Math.random() * 10).toFixed(2);
};

const operators = [
  {
    operatorId: 0,
    operatorName: 'MTS',
    prices: []
  },
  {
    operatorId: 1,
    operatorName: 'Megafon',
    prices: []
  },
  {
    operatorId: 2,
    operatorName: 'Tele2',
    prices: []
  },
  {
    operatorId: 3,
    operatorName: 'Beeline',
    prices: []
  },
  {
    operatorId: 4,
    operatorName: 'Yota',
    prices: []
  }
];

io.on('connection', (socket) => {
  console.log('app is connected');
  io.emit("operators", operators);

  clearInterval(pricesInterval);
  pricesInterval = setInterval(() => {
    const operatorId = getRandomOperatorId();
    const price = getRandomPrice();
    const timestamp = new Date().getTime();
    io.emit("price", {operatorId, price, timestamp});
  }, 2000);

  socket.on('disconnect', () => {
    console.log('app is disconnected');
    clearInterval(pricesInterval);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
    