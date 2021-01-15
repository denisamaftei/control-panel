import { createStore } from "vuex";
import userData from './data/user'
import adsData from './data/ads'

export default createStore({
    modules: {
        user: userData,
        ad: adsData
    }
});