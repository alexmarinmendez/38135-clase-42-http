import http from 'http'
import fs from 'fs'

const req = http.request({
    hostname: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/posts',
    method: 'GET'
}, res => {
    res.setEncoding('binary')
    let data = []
    res.on('data', stream => {
        data.push(Buffer.from(stream, 'binary'))
    })
    res.on('end', () => {
        let binary = Buffer.concat(data)
        fs.writeFileSync('./httpreq.json', binary.toString('binary'))
    })
})

req.end()