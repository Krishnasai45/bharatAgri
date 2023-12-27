import axios from "axios";
const CROP_DATA_REQ = 'CROP_DATA_REQ';
const CROP_DATA_SUCCESS = 'CROP_DATA_SUCCESS';
const CROP_DATA_FAILED = 'CROP_DATA_FAILED';




export const cropDataReq = (payload) => {
    return {
      type: CROP_DATA_REQ,
      payload,
    };
};

export const cropDataSuccess = (payload) => ({
    type: CROP_DATA_SUCCESS,
    payload: payload,
});

export const cropDataFailure = (payload) => ({
    type: CROP_DATA_FAILED,
    payload: payload,
});

export const cropData = () => (dispatch) => {
    dispatch(cropDataReq());

    axios.get("https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json")
    .then((res) => dispatch(cropDataSuccess(res.data.data)))
    .catch((err) => dispatch(cropDataFailure(err)));
};