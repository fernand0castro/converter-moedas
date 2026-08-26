const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {

    const inputCurrencyValue = Number(document.querySelector(".input-currency").value.replace(",", "."))

    const currencyValueConvert = document.querySelector(".currency-value-convert")

    const currencyValue = document.querySelector(".currency-value")

    if (Number.isNaN(inputCurrencyValue)) {
        currencyValue.textContent = "Digite um valor válido"
        return
    }

    currencyValue.textContent = "Consultando..."

    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL")
        .then(response => response.json())
        .then(quotation => {
            const quotations = {
                dolar: { value: Number(quotation.USDBRL.bid), locale: "en-US", currency: "USD" },
                euro: { value: Number(quotation.EURBRL.bid), locale: "de-DE", currency: "EUR" },
                libra: { value: Number(quotation.GBPBRL.bid), locale: "en-GB", currency: "GBP" },
                bitcoin: { value: Number(quotation.BTCBRL.bid), locale: "en-US", currency: "BTC" }
            }

            const selectedQuotation = quotations[currencySelect.value]

            currencyValue.textContent = new Intl.NumberFormat(selectedQuotation.locale, {
                style: "currency",
                currency: selectedQuotation.currency
            }).format(inputCurrencyValue / selectedQuotation.value)
        })
        .catch(() => {
            currencyValue.textContent = "Não foi possível consultar a cotação"
        })

    currencyValueConvert.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assents/dollar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assents/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./assents/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assents/bitcoin.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)