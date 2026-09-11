const forn = document.querySelector('#coin-forn');
const coin = document.querySelector('#coin');
const crypto = document.querySelector('#crypto');
const amount = document.querySelector('#amount');
const coinInfo = document.querySelector('#coin-info');

forn.addEventListener('submit', async e => {
    e.preventDefault();
    
    const coinSelected = [...coin.children].find(option => option.selected).value;
    const cryptoSelected = [...crypto.children].find(option => option.selected).value;
    const amountValue = amount.value;
    
    try {
        // Petición a la API de Binance
        const res = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${cryptoSelected}${coinSelected}`);
        const data = await res.json();
        
        // Propiedades que devuelve Binance en este endpoint
        const price = Number(data.lastPrice);
        const priceHigh = data.highPrice;
        const priceLow = data.lowPrice;
        const variation = data.priceChangePercent;

        if (amountValue !== '' && !isNaN(amountValue)) {
            const result = Number(amountValue) / price;
            coinInfo.innerHTML = `
                <p class="info">El precio es <span class="price">${price}</span></p>
                <p class="info">El precio mas alto es <span class="price">${priceHigh}</span></p>
                <p class="info">El precio mas bajo es <span class="price">${priceLow}</span></p>
                <p class="info">variacion 24H <span class="price">${variation}%</span></p>
                <p class="info">Puedes comprar <span class="price">${result.toFixed(6)}</span></p>
            `;
        } else {
            coinInfo.innerHTML = `
                <p class="info">El precio es <span class="price">${price}</span></p>
                <p class="info">El precio mas alto es <span class="price">${priceHigh}</span></p>
                <p class="info">El precio mas bajo es <span class="price">${priceLow}</span></p>
                <p class="info">variacion 24H <span class="price">${variation}%</span></p>     
            `;
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        coinInfo.innerHTML = `<p class="info">Hubo un error al consultar la API.</p>`;
    }
});