const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact.js');


router.post('/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save()
        .then((savedContact) => {
            console.log(savedContact);
            res.status(201).json({'status': 'msg created'});
        })
        .catch((err) => {
            console.log(err);
            // if (err && err.keyPattern === 11000 && err.keyPattern && err.keyPattern.emailAddress)
            res.status(500).json({'status': 'err'});
        });
    }
    catch(err) {
        console.log(err);
        res.status(500).json({err: 'err'})
    }
});

router.get('/contact', async (req, res) => {
    try {
        Contact.find()
        .then((data) => {
            console.log(data);
            res.status(200).json({contacts: data});
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({msg: 'err'});
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({'status': 'err'})
    }
});

router.get('/contact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        Contact.findById(id)
        .then((data) => {
            res.status(200).json({'contact': data});
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({msg: 'err'});
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({msg: 'err'});
    }
});

router.get('/search', async (req, res) => {
    try {
        console.log(req.query)
        const { contact } = req.query;
        const searchRegex = new RegExp(contact, 'i');
        await Contact.find({
            $or: [
                {firstName: searchRegex},
                {lastName: searchRegex},
                {emailAddress: searchRegex},
            ]
        })
        .then((data) => {
            res.status(200).json({contact: data});
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({msg: 'err'});
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: 'err'});
    }
});

router.put('/contact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(200).json({msg: 'id not found'})
        }
        const data = req.body;
        await Contact.findOneAndUpdate({_id:id},data, {new: true})
        .then((data) => {
            console.log(data);
            res.status(200).json({msg: data});
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({msg: 'err'});
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({msg: 'err'});
    }
});

router.delete('/contact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.findByIdAndDelete({_id: id})
        .then((data) => {
            res.status(200).json({msg: 'ok'});
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({msg: 'err'});
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({msg: 'err'});
    }
});

module.exports = router;