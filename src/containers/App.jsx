import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import getPhotos from '../actions/PageActions';
import handleLogin from '../actions/UserActions';


const App = ({ user, page, getPhotosAction, handleLoginAction }) => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Мой топ фото</h1>
            </header>
            <User
                name={user.name}
                isFetching={user.isFetching}
                error={user.error}
                handleLogin={handleLoginAction}
            />
            {user.name ? (
                <Page
                    photos={page.photos}
                    year={page.year}
                    isFetching={page.isFetching}
                    error={page.error}
                    getPhotos={getPhotosAction}
                />
            ) : (
                <h2>Авторизуйтесь, чтобы посмотреть фото</h2>
            )}
        </div>
    );
};

const stateToProps = (store) => {
    return {
        user: store.user,
        page: store.page,
    };
};

const dispatchToProps = (dispatch) => ({
    getPhotosAction: (year) => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin()),
});

export default connect(stateToProps, dispatchToProps)(App);
