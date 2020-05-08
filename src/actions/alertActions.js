
import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

// Show alert
export function showAlert(alert) {
    return (dispatch) => {
        dispatch( createAlert(alert) )
    }
}
const createAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})

// Hide alert
export function hideAlertAction() {
    return (dispatch) => {
        dispatch( hideAlerta() )
    }
}

const hideAlerta = () => ({
    type: HIDE_ALERT
})