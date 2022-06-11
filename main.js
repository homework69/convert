// fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function (result) {
//     return result.json()
// }).then(function (data) { 
//     console.log(data);
//  })

const rates = {}
const elementUSD = document.querySelector('[data-value="USD"]')
const elementEUR = document.querySelector('[data-value="EUR"]')
const elementGBP = document.querySelector('[data-value="GBP"]')


const input = document.querySelector('#input')
const result = document.querySelector('#result')
const select = document.querySelector('#select')

getCurrentcies()
async function getCurrentcies() {
    const response = await fetch('https://nbu.uz/exchange-rates/json/')
    const data = await response.json()
    const result = await data
    console.log(result);

    rates.USD = result[23]
    rates.EUR = result[7]
    rates.GBP = result[18]


    elementUSD.textContent = rates.USD.nbu_cell_price
    elementEUR.textContent = rates.EUR.nbu_cell_price
    elementGBP.textContent = rates.GBP.nbu_cell_price
}

input.oninput = function () {
    result.value = parseFloat(input.value) / rates[select.value].nbu_cell_price
}
select.oninput = function () {
    result.value = parseFloat(input.value) / rates[select.value].nbu_cell_price
}

function convertValue() { 
    result.value = parseFloat(input.value) / rates[select.value].nbu_cell_price
 }