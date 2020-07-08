const { VUE_APP_CLIENT_ID, VUE_APP_CLIENT_SECRET } = process.env;

class API {
    constructor( baseUrl, headers = { }, body = {}, contentType = 'application/x-www-form-urlencoded' ) {
        this.headers = headers
        this.contentType = contentType
        this.baseUrl = new URL(baseUrl)
        this.body = body
    }

    request (url, method, params) {
        if( window.localStorage.getItem('token') ) {
            this.headers = { ...this.headers, "Authorization": `Bearer ${window.localStorage.getItem('token')}` }
        }

        const data = { ...this.body,  ...params}
        
        var formBody = this.getFormBody(data)

        let proxyUrl = 'https://afternoon-beyond-74473.herokuapp.com/'
        let options = method == 'POST' ? { method, headers: this.headers, body : formBody } : { method, headers: this.headers }

        return new Promise( (resolve, reject) => {
            fetch(proxyUrl + this.baseUrl+url, options)
                .then( response => { 
                    return resolve( response.json().then( data => data ) )
                })
                .catch( response => reject( response ) )
        }) 
    }

    get (url, params = {} ) {
        return this.request(url, 'GET', params)
    }

    post ( url, params ) {
        return this.request(url, 'POST', params)    
    }

    getFormBody ( data ) {
        if( this.contentType == 'application/x-www-form-urlencoded' ) {
            let formBody = []

            for (var property in data) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(data[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }

            return formBody.join("&");
        } else {
            let form = new FormData();

            for( let key of Object.keys(data) ) {
                form.append(key, data[key])
            }

            return form
        }
    }
}


const oauth_headers = {
    "Content-Type" : 'application/x-www-form-urlencoded',
    "Accept" : 'application/json'
};

const oauth_body = {
    "grant_type" : "password",
    "client_id" : VUE_APP_CLIENT_ID,
    "client_secret" : VUE_APP_CLIENT_SECRET,
    "scope" : "*"
}

const api  = new API(`http://mockaltcoin.altcoinlab.io/api/`, oauth_headers)
export const oauth = new API(`http://mockaltcoin.altcoinlab.io/oauth`, oauth_headers, oauth_body)
export const openAPI = new API(`http://mockaltcoin.altcoinlab.io/api/`, {}, {}, 'multipart/form-data')
export default api