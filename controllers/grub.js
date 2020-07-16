const express = require('express');
const router = express.Router();
const Grubs = require('../models/grub.js');

router.get('/', (req, res) =>{
  Grubs.find({}, (err, foundGrub)=>{
    res.json(foundGrub);
  });
});

router.post('/', (req, res)=>{
  Grubs.create(req.body, (err, createdGrub)=>{
    res.json(createdGrub);
  });
});

router.delete('/:id', (req, res)=>{
  Grubs.findByIdAndRemove(req.params.id, (err, deletedGrub)=>{
    res.json(deletedGrub);
  });
});

router.put('/:id', (req, res)=>{
  Grubs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGrub)=>{
    res.json(updatedGrub);
  });
});

module.exports = router;
