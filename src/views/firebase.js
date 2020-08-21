import firebase from 'firebase/app';
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBSHHGFEUsF00vlWrK3ajHU4vnKnuyxZZg",
    authDomain: "fitm-user-mgmt.firebaseapp.com",
    databaseURL: "https://fitm-user-mgmt.firebaseio.com",
    projectId: "fitm-user-mgmt",
    storageBucket: "fitm-user-mgmt.appspot.com",
    messagingSenderId: "667630076960",
    appId: "1:667630076960:web:925d75789709bc2ae02845",
    measurementId: "G-MBX17DVZCE"
}

firebase.initializeApp(config)

export const db = firebase.database()
export const userRef = db.ref('users')
export const defaultUserRef = db.ref('defaultuser')