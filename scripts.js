const convertButton = document.querySelector(".convert-button")
const currencySelectFrom = document.querySelector(".currency-select-from")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConvert = document.querySelector(".currency-value-convert")
    const currencyValue = document.querySelector(".currency-value")

    const dolarToday = 5.16
    const euroToday = 6.01
    const libraToday = 7.04
    const bitcoinToday = 0.0000085
    let valueInReal

    if (currencySelectFrom.value == "real") {
        valueInReal = inputCurrencyValue
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "dolar") {
        valueInReal = inputCurrencyValue * dolarToday
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "euro") {
        valueInReal = inputCurrencyValue * euroToday
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "libra") {
        valueInReal = inputCurrencyValue * libraToday
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "bitcoin") {
        valueInReal = inputCurrencyValue / bitcoinToday
        currencyValueConvert.innerHTML = inputCurrencyValue.toFixed(8) + " BTC"
    }








    if (currencySelect.value == "real") {
        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInReal)
    }

    if (currencySelect.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInReal / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "eur"
        }).format(valueInReal / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "gbp"
        }).format(valueInReal / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(valueInReal / bitcoinToday)
    }


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}

function changerCurrencyFrom() {
    const currencyNameFrom = document.getElementById("currency-name-from")
    const currencyImageFrom = document.querySelector(".currency-img-from")

    if (currencySelectFrom.value == "real") {
        currencyNameFrom.innerHTML = "Real Brasileiro"
        currencyImageFrom.src = "./assets/real.png"
    }

    if (currencySelectFrom.value == "dolar") {
        currencyNameFrom.innerHTML = "Dolar Americano"
        currencyImageFrom.src = "./assets/dolar.png"
    }

    if (currencySelectFrom.value == "euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImageFrom.src = "./assets/euro.png"
    }

    if (currencySelectFrom.value == "libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImageFrom.src = "./assets/libra.png"
    }

    if (currencySelectFrom.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin"
        currencyImageFrom.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencySelectFrom.addEventListener("change", changerCurrencyFrom)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) 