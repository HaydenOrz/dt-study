class Http {
    request (url: string, options: any) {
        options.type = options.type || 'json'
        options.headers = options.headers || {}
        if (options.type === 'json') {
            options.headers['Content-Type'] = 'application/json;charset=UTF-8'
        } else if (options.type === 'urlencoded') {
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        // TODO add more header message
        return fetch(url, options)
            .then(this.handleStatus)
            .catch(err => err)
    }

    handleStatus (response: any) {
        switch (response.status) {
            case 200:
                return response.json()
            // TODO: add more status handler
            default:
                return Promise.reject(response)
        }
    }

    get (url: string, params: any) {
        const newUrl = params ? this.params2url(url, params) : url
        return this.request(newUrl, {
            method: 'GET'
        })
    }

    post (url: string, params: any) {
        const options: any = { method: 'POST' }
        if (params) options.body = JSON.stringify(params)
        return this.request(url, options)
    }

    params2url (url: string, params: any) {
        const query: any = []
        if (params) {
            for (const p in params) {
                if (p) {
                    query.push(p + '=' + params[p])
                }
            }
        }
        return url + '?' + query.join('&')
    }
}

export default new Http()
