let admin = require("firebase-admin");

let serviceAccount = require("../../../settings.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://petsapp-bfaf7.firebaseio.com"
  })


module.exports =  admin
