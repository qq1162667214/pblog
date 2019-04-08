const axios = require('axios')
export const testDjango = function (cb) {
    // axios.get('http://127.0.0.1:8000/api/testServer').then(function (response) {       //本地调试可以使用此链接
   axios.get('/api/testServer').then(function (response) {
        window.console.log(response.data)
        cb(response.data.msg)

    }).catch(function (error) {
        cb(error)
    })
}