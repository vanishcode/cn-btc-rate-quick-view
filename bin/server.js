const Koa = require('koa')
const app = new Koa()
const color = require('chalk')

const local = require('../api/localbitcoins')

const requestURL = require('../lib/requestURL')
const parseHTML = require('../lib/parseHTML')
const display = require('../lib/display')
const router = require('../lib/router')
const appInfo = require('../lib/appInfo')

app.use(async ctx => {
    try {
        let [action, mount] = router(ctx.request.path)

        let html = await requestURL(local(action, mount))
        let data = await parseHTML(html)
        ctx.body = 'Request of '+ color.yellow(action) + ' info in '+ color.blue('https://localbitcoins.com/:\n') + display(data) + appInfo[0] +appInfo[1] + '\n'
    } catch (error) {
        console.log(error.stack)
    }
})

app.listen(80)