let incomeTable = document.getElementById("incomes");


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
        let expense = retrieveIncome(i);
        let name = (document.createElement('td'));
        name.textContent = expense.name; 
        let amount = document.createElement('td');
        amount.textContent = expense.amount; 

        newRow.appendChild(name);
        newRow.appendChild(amount);
        incomeTable.appendChild(newRow);
        console.log("initializing incomes");
        console.log(JSON.parse(localStorage.getItem('incomeNames')) || []);
        console.log((JSON.parse(localStorage.getItem('incomeNames')) || []).length);
    }
}
document.addEventListener('DOMContentLoaded', initializeIncomes);

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
        goal.innerHTML = goal.innerHTML.slice()
    }
}

//Expense graph code
new Chart(document.getElementById("incomeChart"),

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

//this stuff is declaration (can maybe go at the top of this page)
const expenseCanvas = document.getElementById("ExpenseChart");
const expenseCtx = canvas.getContext("2d");

function renderChart(){
    ctx.clearRect(0, 0, 900, 600);

    //render all components
    requestAnimationFrame(renderChart);
}

renderChart();