document.addEventListener('DOMContentLoaded', () => {
    let submit1 = document.querySelector('.submitQ1');
    submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let submit1 = document.querySelector('.submitQ1');
    income = document.getElementById("income").value;
    console.log(income)
    });

    let submit2 = document.querySelector('.submitQ2');
    submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let submit1 = document.querySelector('.submitQ1');
    income = document.getElementById("income").value;
    console.log(income)
    });

}

class Budget{
    amount;
    constructor(amount){
        this.amount = amount;
    }
    getAmount(){
        return this.amount;
    }
    setAmount(newAmount){
        this.amount = newAmount;
    }

}

class Expenses{
    amount;
    name;
    constructor(amount,name){
        this.amount = amount;
        this.name = name;
    }
    getAmount(){
        return this.amount;
    }
    getName(){
        return this.name;
    }
    setAmount(newAmount){
        this.amount = newAmount;
    }
    setName(newName){
        this.name = newName;
    }
}
class Income{
    amount;
    name;
    constructor(amount,name){
        this.amount = amount;
        this.name = name;
    }
    getAmount(){
        return this.amount;
    }
    getName(){
        return this.name;
    }
    setAmount(newAmount){
        this.amount = newAmount;
    }
    setName(newName){
        this.name = newName;
    }
}
class Debt {
    amount;
    interest;
    interestType;
    name; 
    paymentDate;
    //int, float, string, string for constructor 
    constructor(amount, interest, name, paymentDate){
        this.amount = amount;
        this.interest = interest/100; 
        this.name = name; 
        this.paymentDate = paymentDate; 
    }

    calcSimpleInt(time){
        return this.amount*this.interest*time;
    }
    calcCompoundInt(compoundPeriod){
        return this.amount*(((1+this.interest)**compoundPeriod)-1);
    }
    //calculate payment needed for this debt
    


}
