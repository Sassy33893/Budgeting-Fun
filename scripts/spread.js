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

        goal.innerHTML += '<div id="1" class="goal row"><div class="col-4">' + inp2 +'</div><div class="col-4"></div><div class="col-4">' + inp + '</div></div>'
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

//Expense graph code
let incomeChart = new Chart(document.getElementById("incomeChart").getContext("2d"),

    {
        type:"pie",
        data:{
            labels: JSON.parse(localStorage.getItem('incomeNames')) || [],
            datasets:[{
                data:JSON.parse(localStorage.getItem('incomeAmounts')) || [],
            }
        ]}
    }

);

//myLineChart.resize(width, height);
/*
//this stuff is declaration (can maybe go at the top of this page)
const expenseCanvas = document.getElementById("ExpenseChart");
const expenseCtx = canvas.getContext("2d");
*/
/*function renderChart(){
    ctx.clearRect(0, 0, 900, 600);

    //render all components
    requestAnimationFrame(renderChart);
}*/

//renderChart();