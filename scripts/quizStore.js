// Not Being Used!!


document.addEventListener('DOMContentLoaded', () => {
    let incomeS = document.querySelector('#start-questions');
    let q1 = document.querySelector('.q1');
    let q2 = document.querySelector('.q2');
    pg=0;
    function updateQuestionsDisplay() {
        if (pg === 0) {
            q1.style.display = "block";
            q2.style.display = "none";
        } else if (pg === 1) {
            q1.style.display = "none";
            q2.style.display = "block";
        }
    }
    
    

    incomeS.addEventListener("keydown", (e) => {
        let pg=0;
        if (e.key === 'Enter') {
            let income = incomeS.value;
           
            if (income === "" || isNaN(income)) {
                alert("Please fill in the fields correctly.");
            } else {
                //Local Storage 
                setInt('Income',income);
                pg = 1;
                updateQuestionsDisplay();
            }
        }
        
    });
});




class Budget {
    constructor(amount) {
        this.amount = amount;
    }

    getAmount() {
        return this.amount;
    }

    setAmount(newAmount) {
        this.amount = newAmount;
    }
}

class Expenses {
    constructor(amount, name) {
        this.amount = amount;
        this.name = name;
    }

    getAmount() {
        return this.amount;
    }

    getName() {
        return this.name;
    }

    setAmount(newAmount) {
        this.amount = newAmount;
    }

    setName(newName) {
        this.name = newName;
    }
}

class Income {
    constructor(amount, name) {
        this.amount = amount;
        this.name = name;
    }

    getAmount() {
        return this.amount;
    }

    getName() {
        return this.name;
    }

    setAmount(newAmount) {
        this.amount = newAmount;
    }

    setName(newName) {
        this.name = newName;
    }
}

class Debt {
    constructor(amount, interest, name, paymentDate) {
        this.amount = amount;
        this.interest = interest / 100;
        this.name = name;
        this.paymentDate = paymentDate;
    }

    calcSimpleInt(time) {
        return this.amount * this.interest * time;
    }

    calcCompoundInt(compoundPeriod) {
        return this.amount * (((1 + this.interest) ** compoundPeriod) - 1);
    }
}

//Storage 
function setInt(key, value){
    localStorage.setItem(key, value.toString())
}
function setFloat(key, value){
    localStorage.setItem(key, value.toString())
}
function setString(key, value){
    localStorage.setItem(key,value);
}
function retrieveInt(retrieving){
    return parseInt(local.storage.getItem(retrieving,10));
}
function retrieveFloat(retrieving){
    return parseFloat(localStorage.getItem(retrieving));
}
function retrieveString(retrieving){
    return localStorage.getItem(retrieving); 
}
