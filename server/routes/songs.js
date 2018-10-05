let router = require('express').Router()
let Songs = require('../models/song')

// router.get('/', (req, res, next)=>{
//   Songs.find({})
//   .then(songs => res.send(songs))
//   .catch(next)
// })
router.get('/', (req, res, next) => {
  Songs.find({
   // id: req.params.id
  }).then(slist => {
    res.send(slist)
  }).catch(next)
})

// router.get('/:id', (req, res, next)=>{
//   Songs.findById(req.params.id)
//     .then(song=>{
//       res.send(song)
//     })
//     .catch(next)
// })

router.post('/', (req, res, next) => {
  Songs.create(req.body)
    .then(song => {
      res.send(song)
    }).catch(next)
})
router.put('/:id', (req, res, next) => {
  Songs.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
     message: "Done"
    }))
    .catch(next)
})
router.delete('/:id', (req, res, next) => {
  Songs.findByIdAndRemove(req.params.id)
    .then(() => res.send({
    message: "Song has been deleted"
    }))
    .catch(next)
})


module.exports = router