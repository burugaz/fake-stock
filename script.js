/*
App requirements:
 - The triangle compares the current stock price to
 its previous price. If the price has increased, it
 should be a green triangle pointing up, if the price
 has decreased it should be a red triangle pointing
 down, and if there has been no change it should be a
 grey triangle pointing to the right.
 - The price should update every 1.5 seconds.
*/

/*
Challenge:
 1. Find a way to get fresh stock data every 1.5 seconds.
 2. Call the renderStockTicker function with the fresh data.
 3. Add logic to renderStockTicker to display the correct
    information.
*/

/*-----------------------------------------------------------*/
import { getStockData } from "./fakeStockAPI.js"

let previous = {
        price: null,
        icons : {
            stonks: {char: '▲', color: 'green' },
            not_stonks: { char: '▼', color: 'red' },
            equal: { char: '▶', color: 'grey' }
        }
    }

function setIcon(el, type) {
    el.textContent = previous.icons[type].char
    el.style.color = previous.icons[type].color
}

function renderStockTicker(stockData){
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayPriceValue = document.getElementById('price-value')
    const stockDisplayTime = document.getElementById('time')
    let priceStamp = parseFloat(stockData.price)

    stockDisplayName.textContent = `Name: ${stockData.name}`
    stockDisplaySymbol.textContent = `Symbol: ${stockData.sym}`
    stockDisplayPriceValue.textContent = priceStamp
    stockDisplayTime.textContent = `Time: ${stockData.time}`

    let type = 'equal'
    if (previous.price !== null){
        if (priceStamp > previous.price) type = 'stonks'
        else if (priceStamp < previous.price) type = 'not_stonks'
    }

    setIcon(stockDisplayPriceIcon, type)
    previous.price = priceStamp
}

setInterval(() => {
    renderStockTicker(getStockData())
}, 1500)