export const checkUserName = username => /^[a-zA-Z0-9]\w{4,16}$/.test(username)

export const checkPassword = password => /^[a-zA-Z0-9]{6,21}$/.test(password)

export const checkLoginData = data => {
    const result = {
        allowLogin: true,
        errorMsg: ''
    }
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value = data[key]
            if (key === 'username') {
                if (!checkUserName(value)) {
                    result.allowLogin = false
                    result.errorMsg = '账号格式不正确！'
                    return result
                }
            } else if (key === 'password') {
                if (!checkPassword(value)) {
                    result.allowLogin = false
                    result.errorMsg = '密码格式不正确！'
                    return result
                }
            }
        }
    }
    return result
}
