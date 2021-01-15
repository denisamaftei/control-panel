 
import Axios from "axios"
import Cookies from 'js-cookie'
const APIAds = "http://localhost:3000/api/ads/"
export default {
    state: {
        ads: null
    },
    actions: {
        findAll(state) {
            return new Promise((resolve, reject) => {
                Axios.get(APIAds + 'all')
                    .then(response => {
                        if (response.data.length > 0) {
                            response.data.forEach((element) => {
                                response.data.adPreviewText = response.data.description
                            });
                          }
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        findOne(state,adKey) {
            return new Promise((resolve, reject) => {
                Axios.get(APIAds + 'ads/'+adKey.adKey+'/')
                    .then(element => {
                        if(element.data!==null){
                            let date = new Date(1970, 0, 1);
                            date.setSeconds(element.data.data._seconds);
                            element.data.date =
                            date.getDate().toString().length == 2
                            ? date.getDate() + "-"
                            : "0" + date.getDate() + "-";
                            element.data.date +=
                            date.getMonth().toString().length == 2
                            ? date.getMonth() + "-"
                            : "0" + date.getMonth() + "-";
                            element.data.date += date.getFullYear();
                        }
                        resolve(element)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        insertAd(state,ad){
            return new Promise((resolve, reject) => {
                Axios.post(APIAds + 'insert/',ad)
                    .then(response => {
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        editAd(state,ad){
            return new Promise((resolve, reject) => {
                Axios.put(APIAds + 'update/'+ad.adKey+"/",{title:ad.title,description:ad.description,petAge:ad.petAge,image:ad.image})
                    .then(response => {
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        deleteAd(state,adId){
            return new Promise((resolve, reject) => {
                Axios.delete(APIAds + 'delete/'+adId.adKey+"/")
                    .then(response => {
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    },


}