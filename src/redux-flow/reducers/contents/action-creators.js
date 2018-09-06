import axios from 'axios'
import { APIURL, config } from './../../../utils'
import { FETCHING_SECTION_DATA, FETCHING_SECTION_DATA_SUCCESS, FETCHING_SECTION_DATA_FAIL } from './actions'

const FetchContentData = (dispatch, id) => {

    dispatch({ type: FETCHING_SECTION_DATA })
        let axiosPromise = axios.get(`${APIURL}v2/sections/${id}/contents`, config)
        .then(res => { return dispatch({ type: FETCHING_SECTION_DATA_SUCCESS, payload: res.data })})
        .catch(err => { return dispatch({ type: FETCHING_SECTION_DATA_FAIL, payload: err.msg })})
        return(axiosPromise)
}

export default FetchContentData
