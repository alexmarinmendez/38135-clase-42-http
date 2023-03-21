import http from 'http'

const req = http.request({
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'GET'
}, res => {
    res.on('data', data => {
        console.log(JSON.parse(data))
        process.stdout.write(data)
    })
})

req.end()