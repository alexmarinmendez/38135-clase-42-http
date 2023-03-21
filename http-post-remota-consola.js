import https from 'https'

const data = JSON.stringify({
    name: 'Shakira',
    gender: 'female',
    email: 'shaki@coder.com',
    status: 'active'
})

const req = https.request({
    hostname: 'gorest.co.in',
    port: 443,
    path: '/public/v2/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Authorization': 'Bearer 59f0ecb87cf3b3cf56169d895593a8a9fa5c89c5185c4efad62e28d569d320aa'
    },
    responseType: 'json'
}, res => {
    console.log(`Status => ${res.statusCode}`)
    res.on('data', data => {
        process.stdout.write(data)
    })
})

req.write(data)
req.end()