module.exports = (path) => {
    let action = '/sell'
    let mount = '1000'
    if (path.length < 6) {
        if (path.substr(0, 4) === '/buy') {
            action = 'buy'
        }
        else{
            action = 'sell'
        }
    }
    else{
        if (path.substr(0, 4) === '/buy') {
            action = 'buy'
            mount = path.substr(5,path.length)
        }
        else{
            action = 'sell'
            mount = path.substr(6,path.length)
        }
    }
    return [action, mount]
}