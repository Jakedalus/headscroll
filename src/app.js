import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetPosts } from './actions/posts';
import { startAddUser } from './actions/auth';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import database, { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = configureStore();

const jsx = (
    <MuiThemeProvider>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </MuiThemeProvider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app')); 
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app')); 

firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if(user) {
        store.dispatch(login(user.uid));
        
        database.ref(`users/${user.uid}/info`).once('value').then((snapshot) => {
            console.log(snapshot.val());
            if(snapshot.val() === null) {
                return store.dispatch(startAddUser({
                    displayName: user.displayName,
                    email: user.email
                })).then(() => {
                    store.dispatch(startSetPosts()).then(() => {
                        renderApp();   
                        if(history.location.pathname === '/') {
                            history.push('/scroll');
                        }
                    });
                });;
                
            } else {
                store.dispatch(startSetPosts()).then(() => {
                    renderApp();   
                    if(history.location.pathname === '/') {
                        history.push('/scroll');
                    }
                });

            }
            
             
        });
        
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

