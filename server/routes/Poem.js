const express = require('express')

const db = require('../db/Poem')
const router = express.Router()

router.get('/', (req, res) => {
  db.getPoem()
    .then((poem) => {
      // const RandomPoem = Math.floor(Math.random() * poem.length)
      poem.sort(() => 0.5 - Math.random())
      console.log(poem)
      res.json(poem)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'error' })
    })
})

// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   db.getBackgroundById(id)
//     .then((background) => {
//       res.json(background)
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).json({ message: 'error' })
//     })
// })

// // add new letters
router.post('/', (req, res) => {
  const newPoem = req.body
  console.log('this is the post route', req.body)
  // get author_id and g
  db.addPoem(newPoem)
    .then(() => {
      return db.getPoem()
    })
    .then((poem) => {
      res.json(poem)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'It is not working' })
    })
})

// Update
// router.patch('/:id', (req, res) => {
//   const id = req.params.id
//   const newCount = req.body //????
//   db.updateTimeUsed(id, newCount)
//     .then(() => {
//       return db.getBackgroundById(id)
//     })
//     .then((background) => {
//       res.json(background)
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })
module.exports = router
