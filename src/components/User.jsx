import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
    const renderTemplate = () => {
        const { name, error, isFetching } = props;

        if (error) {
            return <p>Во время запроса произошла ошибка, обновите страницу</p>;
        }

        if (isFetching) {
            return <p>Загружаю...</p>;
        }

        if (name) {
            return (
                <h3>
                    Привет, {name}!{' '}
                    <button className="btn">
                        Выйти
                    </button>
                </h3>
            );
        } else {
            return (
                <button className="btn" onClick={props.handleLogin}>
                    Войти
                </button>
            );
        }
    };
    
    return <div className="ib user">{renderTemplate()}</div>;
};
User.propTypes = {
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired,
};

export default User;
