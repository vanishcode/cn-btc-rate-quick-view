const https = require('https')
module.exports = (srcURL) => new Promise((resolve, reject) => {
    let html = ''
    https.get(srcURL, (res) => {
        res.on('data', (data) => html += data)
        res.on('end', () => resolve(html))
    }).on('error', () => {
        console.log(`${__filename}: 获取数据出错！`);
    })
})
