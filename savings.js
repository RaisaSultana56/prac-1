function calculateSavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalIncome = 0;

    for (let i = 0; i < payments.length; i++) {
        if (payments[i] >= 3000) {
            totalIncome += payments[i] - (payments[i] * 0.20); 
        } else {
            totalIncome += payments[i]; 
        }
    }

    
    let savings = totalIncome - livingCost;

    
    if (savings > 0) {
        return savings;
    } else if (savings === 0) {
        return 0;
    } else {
        return "earn more";
    }
}


console.log(calculateSavings([1000, 2000, 3000], 5400)); 
console.log(calculateSavings([1000, 2000, 2500], 5000)); 
console.log(calculateSavings([900, 2700, 3400], 10000)); 
console.log(calculateSavings(100,[900, 2700, 3400])); 
