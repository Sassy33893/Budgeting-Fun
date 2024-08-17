//.js file to operate the game on the gamepage
const canvas = document.getElementById("canvas");
canvas.addEventListener("click", Button.canvasClicked(event));

const ctx = canvas.getContext("2d");

function renderGame(){
    ctx.clearRect(0, 0, 500, 500);
    console.log("running");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 100, 100);
    //ctx.fillRect(Math.min(250, Button.x), Math.min(250, Button.y), Math.abs(250 - Button.x), Math.abs(250 - Button.y));
    //render all components

    requestAnimationFrame(renderGame);
}

class Event {
    image; 
    option1; 
    option2; 
    constructor(image, option1,option2){
        this.image = image; 
        this.option1 =option1; 
        this.option2 = option2; 
    }
    
}
console.log("running");
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

class Button{
    static listOfButtons;
    static x;
    static y;
    x;
    y;
    w;
    h;
    func;
    text;

    constructor(x, y, w, h, func, text){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.func = func;
        this.text = text;
        listOfButtons.push(this);
    }

    static canvasClicked(event){
        Button.x = event.screenX;
        Button.y = event.screenY;
        console.log(Button.x + ", " + Button.y);
    }

    detectClick(xClick, yClick){
        if (this.x < xClick && xClick < this.x + this.w){
            if(this.y < yClick && yClick < this.y + this.h){
                this.onClickButton();
            }
        }
    }

    onClickButton(){
        //do stuff with func
    }
}

//game starting code

//innitiating animation loop
renderGame();




//Local Storage functions
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
