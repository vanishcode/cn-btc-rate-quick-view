const cheerio = require('cheerio')
const color = require('chalk')

module.exports = (HTMLstring) => new Promise((resolve, reject) => {
    let $ = cheerio.load(HTMLstring)
    let user = []
    let price = []
    let limit = []
    let result = new Array()
    for (let i = 0; i < 10; i++) {
        result[i] = new Array()
        for (let j = 0; j < 3; j++) {
            result[i][j] = 0
        }
    }
    $('.column-user').find('a').each((i, e) => {
        user.push($(e).text().trim())
    })
    $('.column-price').each((i, e) => {
        price.push($(e).text().trim())
    })
    $('.column-limit').each((i, e) => {
        limit.push($(e).text().trim())
    })
    for (let i = 0; i < 10; i++) {
        result[i][0] = color.blue(user[i])
        result[i][1] = color.yellow(price[i])
        result[i][2] = color.green(limit[i])
    }
    resolve(result)
})