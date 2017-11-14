import database, { firebase, googleAuthProvider } from '../firebase/firebase';

// ADD_USER
export const addUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const startAddUser = (userData = {}) => {

    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            displayName = '', 
            email = ''
        } = userData;
        
        const newUser = { displayName, email };
        
        return database.ref(`users/${uid}/info`).set(newUser).then(() => {
            dispatch(addUser({
                ...newUser
            }));
        });
        
    };  
};


// LOGIN
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            console.log(result);
        });
    };
};

// LOGOUT
export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};