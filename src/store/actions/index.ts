import { appTypes } from './actionTypes'

export const userAction = userMsg => {
    return {
        type: appTypes.USER,
        payload: userMsg
    }
}
