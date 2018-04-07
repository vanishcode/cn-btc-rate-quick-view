const Table = require('cli-table')

module.exports = (tableArray) => {
    const table = new Table({
        head: ['Trader', 'Price', 'Limits'],
        chars: {
            'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
            , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
            , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
            , 'right': '║', 'right-mid': '╢', 'middle': '│'
        }
    })

    tableArray.forEach(e => {
        table.push(e)
    })
    return table.toString()
}

