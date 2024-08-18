let incomeTable = document.getElementById("incomeTable");
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
}


let goal = document.getElementById("goals");

console.log("h");

function addGoal(goal, amount){
    let inp = document.getElementById("amt-need").value;
    let inp2 = document.getElementById("desc").value;
    
    if (isNaN(inp)){
        alert("Please input a number.");
    }
}


