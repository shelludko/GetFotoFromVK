import React from 'react';
import PropTypes from 'prop-types';

const Page = (props) => {
    const onBtnClick = (e) => {
        const year = +e.currentTarget.innerText;
        props.getPhotos(year); 
    };

    const renderTemplate = () => {
        const { photos, isFetching, error } = props;

        if (error) {
            return (
                <p className="error">Во время загрузки фото произошла ошибка</p>
            );
        }

        if (isFetching) {
            return <p>Загрузка...</p>;
        } else {
            return photos.map((entry) => (
                <div key={entry.id}>
                    <p>
                        <img
                            src={entry.sizes[1].url}
                            className="photo"
                            alt=""
                        />
                    </p>
                    <p>{entry.likes.count} ❤</p>
                </div>
            ));
        }
    };

    const { year, photos } = props;
    const checkYear = (year) => {
        if (year) {
            return `${ year } год[${ photos.length }]`;
        } else {
            return 'Год не выбран'
        }
     };
    return (
        <div className="ib page">
            <p>
                <button className="btn" onClick={onBtnClick}>
                    2022
                </button>{' '}
                <button className="btn" onClick={onBtnClick}>
                    2021
                </button>{' '}
                <button className="btn" onClick={onBtnClick}>
                    2020
                </button>{' '}
                <button className="btn" onClick={onBtnClick}>
                    2019
                </button>{' '}
                <button className="btn" onClick={onBtnClick}>
                    2017
                </button>
            </p>
            <h3>{checkYear(year)}</h3>
            <div className="show">{renderTemplate()}</div>
        </div>
    );
};

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
};

export default Page;
