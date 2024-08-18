
function initializeLocalStorage() {
    if (!localStorage.getItem('incomeNames') || !localStorage.getItem('incomeAmounts') || !localStorage.getItem('expenseNames') ||!localStorage.getItem('expenseAmounts') ||!localStorage.getItem('debtName') ||!localStorage.getItem('debtAmount') ||!localStorage.getItem('debtRate') ||!localStorage.getItem('debtType')) {
        let incomeNames = [];
        let incomeAmounts = []; 
        let expenseNames = []; 
        let expenseAmounts = []; 
        let debtName = []; 
        let debtAmount = []; 
        let debtRate = [];
        let debtType = [];



        localStorage.setItem('incomeNames', JSON.stringify(incomeNames));
        localStorage.setItem('incomeAmounts', JSON.stringify(incomeAmounts));

        localStorage.setItem('expenseNames', JSON.stringify(expenseNames));
        localStorage.setItem('expenseAmounts', JSON.stringify(expenseAmounts));

        localStorage.setItem('debtName', JSON.stringify(debtName));
        localStorage.setItem('debtAmount', JSON.stringify(debtAmount));
        localStorage.setItem('debtRate', JSON.stringify(debtRate));
        localStorage.setItem('debtType', JSON.stringify(debtType));
    }
}
initializeLocalStorage();

//adds income to the list of incomes (in local storage)
function addIncome(name, num){
    let tempIncomeNames = JSON.parse(localStorage.getItem('incomeNames')) || [];
    let tempIncomeAmount = JSON.parse(localStorage.getItem('incomeAmounts')) || [];
    tempIncomeNames.push(name);
    tempIncomeAmount.push(num);
    localStorage.setItem('incomeNames', JSON.stringify(tempIncomeNames));
    localStorage.setItem('incomeAmounts', JSON.stringify(tempIncomeAmount));
}

//function to retrieve a specific income
function retrieveIncome(num){
    let tempIncomeNames = JSON.parse(localStorage.getItem('incomeNames')) || [];
    let tempIncomeAmount = JSON.parse(localStorage.getItem('incomeAmounts')) || [];
    return{
        name:tempIncomeNames[num],
        amount:tempIncomeAmount[num]  
    };
}

//adds expense to the list of expenses (in local storage)
function addExpense(name, num){
    let tempExpenseNames = JSON.parse(localStorage.getItem('expenseNames')) || [];
    let tempExpenseAmount = JSON.parse(localStorage.getItem('expenseAmounts')) || [];
    tempExpenseNames.push(name);
    tempExpenseAmount.push(num);
    localStorage.setItem('expenseNames', JSON.stringify(tempExpenseNames));
    localStorage.setItem('expenseAmounts', JSON.stringify(tempExpenseAmount));
}

//function to retrieve a specific expenses
function retrieveExpense(num){
    let tempExpenseNames = JSON.parse(localStorage.getItem('expenseNames')) || [];
    let tempExpenseAmount = JSON.parse(localStorage.getItem('expenseAmounts')) || [];
    return{
        name:tempExpenseNames[num],
        amount:tempExpenseAmount[num]  
    };
}

//adds a debt to the list of debts
function addDebt(name, amount, rate, type) {
    let tempDebtName = JSON.parse(localStorage.getItem('debtName')) || [];
    let tempDebtAmount = JSON.parse(localStorage.getItem('debtAmount')) || [];
    let tempDebtRate = JSON.parse(localStorage.getItem('debtRate')) || [];
    let tempDebtType = JSON.parse(localStorage.getItem('debtType')) || [];
    
    tempDebtName.push(name);
    tempDebtAmount.push(amount);
    tempDebtRate.push(rate);
    tempDebtType.push(type);
    
    localStorage.setItem('debtName', JSON.stringify(tempDebtName));
    localStorage.setItem('debtAmount', JSON.stringify(tempDebtAmount));
    localStorage.setItem('debtRate', JSON.stringify(tempDebtRate));
    localStorage.setItem('debtType', JSON.stringify(tempDebtType));
}

// retrieve a specific dbet
function retrieveDebt(num) {
    let tempDebtName = JSON.parse(localStorage.getItem('debtName')) || [];
    let tempDebtAmount = JSON.parse(localStorage.getItem('debtAmount')) || [];
    let tempDebtRate = JSON.parse(localStorage.getItem('debtRate')) || [];
    let tempDebtType = JSON.parse(localStorage.getItem('debtType')) || [];
    
    return {
        name: tempDebtName[num],
        amount: tempDebtAmount[num],
        rate: tempDebtRate[num],
        type: tempDebtType[num]
    };
}






