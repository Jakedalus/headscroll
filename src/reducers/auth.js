
export default (state = {}, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {
                user: action.user,
                ...state
            };
        case 'LOGIN':
            return {
                uid: action.uid,
                ...state
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};