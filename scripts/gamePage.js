//.js file to operate the game on the gamepage
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let abc = new Tester(0, 0);

renderGame();

function renderGame(){
    ctx.clearRect(0, 0, 500, 500);

    ctx.fillStyle = "red";
    ctx.fillRect(abc.x, abc.y, 150, 75);
    //render all components

    requestAnimationFrame(renderGame);
}

class Event {
    image; 
    option1; 
    option2; 
    
    
}

class Character {
    static listOfCharacters = [];
    name;
    money;
    happiness;
    debt; 
    income;
    image;

    constructor(name, image){
        this.name = name; 
        this.money = 10000;
        this.happiness = 75; 
        this.income = 4000; 
        this.debt  = 40000;
        this.image = new Image();
        this.image.src = image;
        listOfCharacters.push(this);
    }

    //Getters 
    getName(){
        return(this.name);
    }
    getMoney(){
        return(this.money);
    }
    getHappiness(){
        return(this.happiness);
    }

    //Money functions
    spendMoney(moneySpent){
        this.money-=moneySpend;
    }
    earnMoney(moneyEarned){
        this.money+=moneyEarned;
    }
    increaseIncome(increase){
        this.income+=increase;
    }
    decreaseIncome(decrease){
        this.income-=decrease; 
    }

    //Happiness functions 
    increaseHappiness(increase){
        this.happiness+=increase;
    }
    decreaseHappiness(decrease){
        this.happiness-=decrease; 
    }
}


//game starting code
