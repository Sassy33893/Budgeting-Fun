document.addEventListener('DOMContentLoaded', () => {
    let incomeS = document.querySelector('#start-questions');
    let submit2 = document.querySelector('.submitQ2');

    incomeS.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            let income = incomeS.value;
            if (income === "" || isNaN(income)) {
                alert("Please fill in the fields correctly.");
            }
            
            else{
            

            let h1 = document.createElement('h1');
            h1.textContent = "Income: $" + income;
            h1.style.border = '2px solid #4CAF50';
            h1.style.borderRadius = '15px';
            h1.style.padding = '10px 20px';
            h1.style.width = '100%';
            h1.style.textAlign = 'center';
            h1.style.position = 'absolute';
            h1.style.top = '10%';
            h1.style.left = '50%';
            h1.style.transform = 'translate(-50%, -50%)';
            h1.style.boxSizing = 'border-box';
            h1.style.marginBottom = '20px';
            document.body.appendChild(h1);

            let q1 = document.querySelector('#question-start');
            q1.style.display = "none";
            incomeS.style.display = "none";}
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
