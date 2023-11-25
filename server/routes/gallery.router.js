const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  let idofPic = req.params.id;

    const sqlQueryText = `
    UPDATE "gallery"
    SET "likes" = "likes" + 1
    WHERE "id" = ($1);
    `

    const sqlValues = [idofPic];

    pool.query(sqlQueryText, sqlValues)
    .then((dbResult) => {
        res.sendStatus(200);
        console.log('PUT successful');
    }).catch((dbError) => {
        res.sendStatus(500);
    })
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
