let incomeTable = document.getElementById("incomes");
let expenseTable = document.getElementById("expenses")
let debtTable = document.getElementById("debts");

function initializeIncomes(){
    let numOfIncomes = (JSON.parse(localStorage.getItem('incomeAmounts')) || []).length;
    for(let i = 0; i<numOfIncomes;i++){
        let newRow = document.createElement('tr');
        let income = retrieveIncome(i);
        let name = (document.createElement('td'));
        name.textContent = income.name; 
        let amount = document.createElement('td');
        amount.textContent = income.amount; 
        
        

        newRow.appendChild(name);
        newRow.appendChild(amount);
        incomeTable.appendChild(newRow);
        console.log("initializing incomes");
        console.log(JSON.parse(localStorage.getItem('incomeNames')) || []);
        console.log((JSON.parse(localStorage.getItem('incomeNames')) || []).length);
    }
}
function initializeExpenses(){
    let numOfExpenses = (JSON.parse(localStorage.getItem('expenseAmounts')) || []).length;
    for(let i = 0; i<numOfExpenses;i++){
        let newRow = document.createElement('tr');
        let expense = retrieveExpense(i);
        let name = (document.createElement('td'));
        name.textContent = expense.name; 
        let amount = document.createElement('td');
        amount.textContent = expense.amount; 

        newRow.appendChild(name);
        newRow.appendChild(amount);
        expenseTable.appendChild(newRow);
        console.log("initializing expenses");
        console.log(JSON.parse(localStorage.getItem('incomeNames')) || []);
        console.log((JSON.parse(localStorage.getItem('incomeNames')) || []).length);
    }
}

function initializeDebt(){
    let numOfDebt = ((JSON.parse(localStorage.getItem('debtName')) || []).length);
    console.log("num of debt");
    console.log(numOfDebt);
    for(let i =0; i<numOfDebt;i++ ){
        let newRow = document.createElement('tr');
        let debt = retrieveDebt(i);

        let name = (document.createElement('td'));
        name.textContent = debt.name; 
        let amount = document.createElement('td');
        amount.textContent = debt.amount; 
        let rate = document.createElement('td');
        rate.textContent = debt.rate; 
        let type = document.createElement('td');
        type.textContent = debt.type;

        newRow.append(name);
        newRow.append(amount);
        newRow.append(rate);
        newRow.append(type);
        debtTable.append(newRow);
        console.log("initializing debt");
        console.log(debt);
        console.log(JSON.parse(localStorage.getItem('incomeNames')) || []);
        console.log((JSON.parse(localStorage.getItem('incomeNames')) || []).length);
    }
}
document.addEventListener('DOMContentLoaded', initializeIncomes);
document.addEventListener('DOMContentLoaded', initializeExpenses);
document.addEventListener('DOMContentLoaded',initializeDebt);
let goal = document.getElementById("goals");
let goalsNum = 0;

console.log("h");



function addGoal(){
    let inp = document.getElementById("amt-need").value;
    let inp2 = document.getElementById("desc").value;
    
    if (isNaN(inp)){
        alert("Please input a number.");
    }
    else{
        goalsNum++;

        if (goalsNum == 1){
            goal.innerHTML = "";
        }

        goal.innerHTML += '<div class="goal row"><div class="col-4">' + inp2 +'</div><div class="col-4"></div><div class="col-4">' + inp + '</div></div>'
    }
}

function removeGoal(){
    if(goalsNum == 0){
        alert("Not Possible.");
    }
    else{
        goal.innerHTML = goal.innerHTML.slice(goal.innerHTML.indexOf("</div></div>") + 12);
        goalsNum--;
    }
}

function randomColorGenerator(){
    let colors = [];

    for(let i = 0; i < JSON.parse(localStorage.getItem('incomeNames')).length; i++){
        colors.push('rgba(' + Math.floor(Math.random()*256) + ', '+ Math.floor(Math.random()*256) +', '+ Math.floor(Math.random()*256) +', 0.2)');
    }
    return colors;
}




//Expense graph code
incomeColors = randomColorGenerator((localStorage.getItem('incomeNames')).length);
expenseColors = randomColorGenerator((localStorage.getItem('expenseAmounts')).length);
debtColors = randomColorGenerator((localStorage.getItem('debtName')).length);
debtColors2 = randomColorGenerator((localStorage.getItem('debtName')).length);
let incomeChart = new Chart(document.getElementById("incomeChart"),

    {
        type:"pie",
        data:{
            labels: JSON.parse(localStorage.getItem('incomeNames')) || [],
            datasets:[{
                backgroundColor: incomeColors,
                data:JSON.parse(localStorage.getItem('incomeAmounts')) || []
            }]
           
            ,
            borderColor: incomeColors,
            borderwidth: 1
        },
        options: {
            maintainAspectRatio: false,
        }

    }

);
let expenseChart = new Chart(document.getElementById("expenseChart").getContext("2d"),
{
    type:"pie",
    data:{
        labels: JSON.parse(localStorage.getItem('expenseNames')) || [],
        datasets:[{
            
            backgroundColor:expenseColors,
            data:JSON.parse(localStorage.getItem('expenseAmounts')) || [],
        }]

        ,
        borderColor: expenseColors
    },
    options: {
        maintainAspectRatio: false,
    }

}
);

let debtChart = new Chart(document.getElementById("debtChart").getContext("2d"),
{
    type:"pie",
    data:{
        labels: JSON.parse(localStorage.getItem('debtName')) || [],
        datasets:[{
            backgroundColor:debtColors,
            data:JSON.parse(localStorage.getItem('debtAmount')) || [],
        }]
        

        ,
        borderColor: debtColors
    },
    options: {
        maintainAspectRatio: false,
    }

}

);

let debtChart2 = new Chart(document.getElementById("debtChart2").getContext("2d"),
{
    type:"bar",
    data:{
        labels: JSON.parse(localStorage.getItem('debtName')) || [],
        datasets:[{
            backgroundColor:debtColors2,
            data:JSON.parse(localStorage.getItem('debtRate')) || [],
        }],
       

        
        borderColor: debtColors2
    },
    options: {
        maintainAspectRatio: false,
    }

}

);

