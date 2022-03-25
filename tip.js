const tipcalcy = () =>{
  let amount = document.getElementById('Bill amount').Value;
  let perc = document.getElementById('Tip perc').Value;
  let tip = amount * (perc / 100);

  let total = tip + amount;
  document.getElementById('Tip amount')=tip;
  document.getElementById('Total bill')=total;

                  
}