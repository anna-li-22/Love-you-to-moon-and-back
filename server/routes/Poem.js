const express = require('express')

const db = require('../db/Poem')
const router = express.Router()

router.get('/', (req, res) => {
  db.getPoem()
    .then((poem) => {
      console.log(poem)
      res.json(poem)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getBackgroundById(id)
    .then((background) => {
      res.json(background)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// add new letters
router.post('/', (req, res) => {
  const newPoem = req.body
  db.addPoem(newPoem)
    .then(() => {
      return db.getPoem()
    })
    .then((poem) => {
      res.json(poem)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
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
