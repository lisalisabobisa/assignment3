
 
    let investment = 0;
    do {
        investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    } 
    while ( isNaN(investment) || investment <= 0 );
    
    let rate = 0;
    do {
        rate = parseFloat(prompt('Enter interest rate as xx.xx'));
    } 
    while ( isNaN(rate) || rate < 0 || rate > 6 );
    
    let years = 0;
    do {
        years = parseInt(prompt('Enter the number of years'));
    } 
    while ( isNaN(years) || years < 1 || years > 30 );
    
    let futureValue = investment;
    for (let i = 0; i < years; i++) {  
        futureValue = futureValue + (futureValue * rate / 100);
    }
    


document.write(`Investment amount: $${investment}<br>`);
document.write(`Interest rate: ${rate}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future Value: $${futureValue.toFixed(2)}<br>`);