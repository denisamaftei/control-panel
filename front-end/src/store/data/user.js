import Axios from "axios"
import Cookies from 'js-cookie'

const APIUser = "http://localhost:3000/api/auth/"
export default {
    state: {
        userData: null
    },
    actions: {
        register (state, userObj) {
            return new Promise((resolve, reject) => {
                Axios.post(APIUser + 'register/', userObj, { withCredentials: true })
                    .then(response => {
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        login (context, userObj) {
            return new Promise((resolve, reject) => {
                
                Axios.post(APIUser + 'login', userObj, { withCredentials: true })
                    .then(response => {
                        context.commit("loginUser",response.data.user)
                        Cookies.set("user",{first_name:response.data.user.first_name,last_name:response.data.user.last_name})
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        logout (state) {
            return new Promise((resolve, reject) => {
                Axios.post(APIUser + 'logout/', {}, { withCredentials: true })
                    .then(response => {
                       resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    },
        getters: {
        getUser: state => { return state.userData }
    },
        mutations: {
        loginUser: ( state, user ) => state.userData = user
    }
    
}