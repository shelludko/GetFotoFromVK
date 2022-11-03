import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL,
} from '../constants/constants';

let photosArr = [];
let cached = false;

const makeYearPhotos = (photos, selectedYear) => {
    console.log('photos', photos)
    let yearPhotos = [];

    photos.forEach((item) => {
        const createdYear = new Date(item.date * 1000).getFullYear();
        if (createdYear === selectedYear) {
            yearPhotos.push(item);
        }
    });

    yearPhotos.sort((a, b) => b.likes.count - a.likes.count);

    return yearPhotos;
}

const getMorePhotos = (offset, count, year, dispatch) => {
    //eslint-disable-next-line no-undef
    VK.Api.call(
        'photos.getAll',
        {
            extended: 1,
            count: count,
            offset: offset,
            v: '5.131',
        },
        (request) => {
            try {
                photosArr = photosArr.concat(request.response.items);
                if (offset >= request.response.count) {
                    offset += 5;
                } else {
                    let photos = makeYearPhotos(photosArr, year);
                    cached = true;
                    dispatch({
                        type: GET_PHOTOS_SUCCESS,
                        payload: photos,
                    });
                }
            } catch (e) {
                dispatch({
                    type: GET_PHOTOS_FAIL,
                    error: true,
                    payload: new Error(e),
                });
            }
        }
    );
}

const getPhotos = (year) => {
    return (dispatch) => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year,
        });

        if (cached) {
            let photos = makeYearPhotos(photosArr, year);
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: photos,
            });
        } else {
            getMorePhotos(0, 200, year, dispatch);
        }
    };
}

export default getPhotos;
