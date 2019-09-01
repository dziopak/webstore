const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const stripe = require('stripe');
const compression = require('compression');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const tourRouter = require('./routes/TourRoutes.js');
const projectRouter = require('./routes/ProjectRoutes.js');
const userRouter = require('./routes/UserRoutes.js');
const menusRouter = require('./routes/menusRoutes.js');
const itemRouter = require('./routes/itemRoutes.js');
const collectionRouter = require('./routes/collectionRoutes.js');

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/menus', menusRouter);
app.use('/api/v1/items', itemRouter);
app.use('/api/v1/collections', collectionRouter);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

module.exports = app;
