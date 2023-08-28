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


async function getCurrentcies() {
    const response = await fetch('https://cbu.uz/ru/arkhiv-kursov-valyut/json/')
    const data = await response.json()
    const result = await data

    rates.USD = result[0]
    rates.EUR = result[1]
    rates.GBP = result[3]


    elementUSD.textContent = rates.USD.Rate
    elementEUR.textContent = rates.EUR.Rate
    elementGBP.textContent = rates.GBP.Rate
}
getCurrentcies()

input.oninput = function () {
    result.value = parseFloat(input.value) / rates[select.value].Rate
}
select.oninput = function () {
    result.value = parseFloat(input.value) / rates[select.value].Rate
}

function convertValue() { 
    result.value = parseFloat(input.value) / rates[select.value].Rate
 }
