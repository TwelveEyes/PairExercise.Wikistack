const router = require('express').Router();
const { addPage } = require('../views/');

router.get('/', (req, res, next) => {
  res.send('get home path');
});
router.post('/', (req, res, next) => {
  res.json(req.body);
});
router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;