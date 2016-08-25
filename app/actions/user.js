/**
 * Created by yhon on 16/8/13.
 */
import {PAYLOAD} from '../middleware/api';
import {createTypes} from './utils';

export const GET_USER = createTypes("get_user");

export function get(uid) {
    return dispatch => dispatch({
        [PAYLOAD]:{
            types:GET_USER,
            endpoint: 'v1/getUser',
            params:{uid}
        }
    });
}
