const forn = document.querySelector('#coin-forn');
const coin = document.querySelector('#coin');
const crypto = document.querySelector('#crypto');
const amount = document.querySelector('#amount');


forn.addEventListener('submit', async e =>{
e.preventDefault();
const coinSelectected =[...coin.children].find(Option => Option.Selected).value;
const cryptoSelectected =[...crypto.children].find(Option => Option.Selected).value;
const amountValue = amount.value;
try{
     const repose = fetch()
} catch(error){
    console.log(error);
}
});