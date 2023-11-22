import firebase from "firebase/app"

export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                throw e
            }
        }
    },
    async register({},{email, password, name}) {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (e) {
            throw e
        }
    },
    async logout() {
        await firebase.auth().signOut()
    }
}