const database = require('../config/firebase').firestore()
const faker = require('faker')

const middleware = {
    checkLogin: async (req, res) => {
        const id = req.session.user;
        const snapshot = await database.collection('auth').get()
        const users = []
        await snapshot.forEach(user => {
            users.push({ id: user.id, user: user.data() })
        })
        const user = users.filter(user => user.id === id);
        (user.length === 0) ? res.status(403).send({ message: "Forbidden" }) : next()
    }
}

const controller = {

    login: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        const snapshot = await database.collection('auth').get()
        const users = []
        await snapshot.forEach(user => {
            users.push(user.data())
        })
        const user = users.filter(user => user.password === password && user.email === email);
        if (user.length === 0) {
            res.status(403).send({ message: "Incorrect email or password" });
        } else {
            if (req.session.user) {
                res.status(202).send({ message: "Already logged in" })
            } else {
                const user = await (await database.doc(`/users/${user[0].user}`).get()).data()
                req.session.user = user[0].user;
                req.session.first_name=user[0].first_name;
                req.session.last_nae=user[0].last_name;
                res.status(200).send({ message: "Login successfully" })
            }
        }
    },
    logout: async (req, res) => {
        req.session.reset();
        res.status(200).send({ message: "You've been logged out" });
    },
    middleware

}

module.exports = controller