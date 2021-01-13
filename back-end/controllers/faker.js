const faker = require('faker')
const db = require('../config/firebase').firestore()

const controller = {
    insertFakeData: async (req, res) => {
        try {
            const adRef = db.collection("adoptions");
            const usersRef = db.collection("users")
            for (let i = 0; i < 20; i++) {

                const uuid = faker.random.uuid()
                const email = faker.internet.email()
                const first_name = faker.name.firstName()
                const last_name = faker.name.lastName()

                const adId = faker.random.uuid()
                const description = faker.lorem.paragraphs()
                const image = faker.image.animals()
                const petAge = faker.random.number({
                    "min": 1
                })
                const title = faker.lorem.words()


                let ad = {
                    "image": image,
                    "title": title,
                    "petAge": petAge,
                    "description": description,                
                }

                let user = {                    
                    "name":{
                        "first_name":first_name,
                        "last_name":last_name
                    },
                    "email":email,
                }
                await adRef.doc(adId).set(ad)
                await usersRef.doc(uuid).set(user)
            }
            res.status(201).send({ "message": "created" })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ "message": "not working" })
        }
    }
}

module.exports = controller