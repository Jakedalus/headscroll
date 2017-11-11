import uuid from 'uuid';
import database from '../firebase/firebase';


// ADD_FRIEND
export const addFriend = (friend) => ({
    type: 'ADD_FRIEND',
    friend
});

export const startAddFriend = (friendData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            content = '', 
            author = '', 
            createdAt = 0,
            edited = false,
            comments = []
        } = expenseData;
        
        const friend = { content, author, createdAt, edited, comments };
        
        return database.ref(`users/${uid}/friends`).push(friend).then((ref) => {
            dispatch(addFriend
                id: ref.key,
                ...friend
            }));
        });
        
    };  
};

// REMOVE_FRIEND
export const removeFriend = ( { id } = {}) => ({
    type: 'REMOVE_FRIEND',
    id
});

export const startRemoveFriend = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/friends/${id}`).remove()
            .then(() => {
                dispatch(removeFriend({ id }));
            });
    };
};

// EDIT_FRIEND
export const editFriend = ( id, updates ) => ({
    type: 'EDIT_FRIEND',
    id, 
    updates
});

export const startEditFriend = ( id, updates ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/friends/${id}`).update(updates)
            .then(() => {
                dispatch(editFriend(id, updates));
            });
    }
};

// SET_FRIENDS
export const setFriends = (friends) => ({
    type: 'SET_FRIENDS',
    expenses
});


export const startSetFriends = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/friends`).once('value').then((snapshot) => {
            const friends = [];
            snapshot.forEach((childSnapshot) => {
                friends.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                }); 
            });
            
            dispatch(setFriendss(friends));
        });
    };  
};







