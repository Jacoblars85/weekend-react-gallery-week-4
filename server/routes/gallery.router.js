const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlQueryText = `
  SELECT * FROM "gallery"
  ORDER BY "id";
`
pool.query(sqlQueryText)
  .then((dbResult) => {
      console.log('dbResult', dbResult.rows);
      res.send(dbResult.rows);
  }).catch((dbError) => {
      res.sendStatus(500);
      console.log('error in server get route', dbError);
  })
});

module.exports = router;
