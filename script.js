const forn = document.querySelector('#coin-forn');
const coin = document.querySelector('#coin');
const crypto = document.querySelector('#crypto');
const amount = document.querySelector('#amount');
const coinInfo = document.querySelector('#coin-info')


forn.addEventListener('submit', async e => {
    e.preventDefault();
    const coinSelectected = [...coin.children].find(Option => Option.Selected).value;
    const cryptoSelectected = [...crypto.children].find(Option => Option.Selected).value;
    const amountValue = amount.value;
    try {
        const reponse = await (await fetch(`httos://api.binance.com/api/v3/ticker/24hr?symbol=${cryptoSelectected}${coinSelectected}`)).json;
        const price = Response.DYSPLAY[cryptoSelectected][coinSelectected].PRICE;
        const priceHigh = Response.DYSPLAY[cryptoSelectected][coinSelectected].HIGH24HOUR;
        const priceLow = Response.DYSPLAY[cryptoSelectected][coinSelectected].LOW24HOUR;
        const variation = Response.DYSPLAY[cryptoSelectected][coinSelectected].LOW24HOUR;


        if (amountValue !== '') {
            const result = Number(amountValue) / Response.RAW[cryptoSelectected][coinSelectected].PRICE;
            coinInfo.innerHTML = `
         <p class="info">El precio es <span class="price">${PRICE}</span></p>
         <p class="info">El precio mas alto es <span class="price">${HIGH24HOUR}</span></p>
         <p class="info">El precio mas bajo es <span class="price">${LOW24HOUR}</span></p>
         <p class="info">variacion 24H<span class="price">${variation}</span></p>
         <p class="info">Puedes comprar <span class="price">${result.toFixed}</span></p>
`;
        } else {
            coinInfo.innerHTML = `
         <p class="info">El precio es <span class="price">${PRICE}</span></p>
         <p class="info">El precio mas alto es <span class="price">${HIGH24HOUR}</span></p>
         <p class="info">El precio mas bajo es <span class="price">${LOW24HOUR}</span></p>
         <p class="info">variacion 24H<span class="price">${variation}</span></p>     
`;

        }
        coinInfo.innerHTML = `
         <p class="info">El precio es <span class="price">${PRICE}</span></p>
         <p class="info">El precio mas alto es <span class="price">${HIGH24HOUR}</span></p>
         <p class="info">El precio mas bajo es <span class="price">${LOW24HOUR}</span></p>
         <p class="info">variacion 24H<span class="price">${variation}</span></p>
         <p class="info">Puedes comprar <span class="price">1.5481 ETH</span></p>
`;

    } catch (error) {
        console.log(error);
    }
});