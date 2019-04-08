const axios = require('axios')
export const testDjango = function (cb) {
    axios.get('http://127.0.0.1:8000/testServer').then(function (response) {
        console.log(response)
        if (response.status===200) {
            cb(response.data)
        } else {
            cb(response.status)
        }
    }).catch(function (error) {
        cb(error)
    })
}