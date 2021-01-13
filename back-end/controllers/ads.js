const database = require('../config/firebase').firestore();
const faker = require('faker');

const controller = {

    findAll: async (req, res) => {
        let ads = [];
        let promise = database
            .collection("adoptions")
            .get()
            .then(snapShot => {
                snapShot.forEach(doc => {
                    ads.push(doc.data())
                })
            })
            .catch(err => {
                console.log("Error while trying to get the ads", err);
            })

        Promise.resolve(promise)
            .then(() => {
                res.status(200).send(JSON.stringify(ads));
            })
            .catch(err => {
                res.status(500).send(err);
            })
    },
    findOne: async (req, res) => {
        const adKey = req.query.adKey;
        let ad = {};
        let promise = database
            .doc('/adoptions' + adKey)
            .get()
            .then(doc => {
                if (doc.exists) {
                    ad = doc.data();
                }
            })
            .catch(err => {
                console.log("Error while trying to get the ad with id " + adKey);
            })
            Promise.resolve(promise)
                .then(() => {
                    res.status(200).send(JSON.stringify(ad));
                })
                .catch(err => {
                res.status(500).send(err);
            })
    },
    insert: async(req, res) => {
        const adRef = database.collection("adoptions");
        const ad = req.body;
        const currentUser = {
            id: req.session.user,
            first_name: req.session.first_name,
            last_name: req.session.last_name 
        }
        const adId = faker.random.uui();
        const promise = adRef.doc(adId).set(ad);
        Promise.resolve(promise)
            .then(() => {
                res.status(201).json({"id":adId});
            })
            .catch(err => {
                res.status(500).send(er);
            })
    },
    edit: async (req, res) => {
        const adRef = database.doc(`/adoptions/${req.body.adKey}`);
        const promise = adRef.set({
            title: req.body.title,
            description: req.body.description,
            petAge: req.body.petAge,
            image: req.body.image
        })
        Promise.resolve(promise)
            .then(() => {
                res.status(204).json({"message":"updated"});
            })
            .catch(err => {
                res.status(500).send(er);
            })
    },
    delete: async (req, res) => {
        const adRef = database.doc(`/adoptions/${req.body.blogKey}`);
        const promise = adRef.delete();
        Promise.resolve(promise)
        .then(() => {
            res.status(204).json({"message":"deleted"})
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}

module.exports = controller;