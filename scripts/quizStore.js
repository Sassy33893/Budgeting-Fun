document.addEventListener('DOMContentLoaded', () => {
    let incomeS = document.querySelector('#start-questions');
    let submit2 = document.querySelector('.submitQ2');

    incomeS.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            let income = incomeS.value;
            if (income === "" || isNaN(income)) {
                alert("Please fill in the fields correctly.");}
            console.log(income);
        }
        
        
    });

    // submit2.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     let income = document.getElementById("income").value;
    //     console.log(income);
    // });
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
