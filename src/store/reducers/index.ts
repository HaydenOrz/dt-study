import { appTypes } from '@/store/actions/actionTypes'

const defaultState = {
    user: {
        username: 'zhangsan',
        password: 'lisi'
    }
}

// 全局数据
export const updateUser = (state, action) => {
    switch (action.type) {
        case appTypes.USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return defaultState
    }
}
