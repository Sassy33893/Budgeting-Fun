//.js file to operate the game on the gamepage
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasRect = canvas.getBoundingClientRect();
const yOffset = 307;
const xOffset = canvasRect.left;

let pmn = 0;

function renderGame(){
    ctx.clearRect(0, 0, 900, 600);
    ctx.fillStyle = "red";

    ctx.fillRect(pmn, 0, 100, 100);

    pmn++;

    for (let i = 0; i < Button.listOfButtons.length; i++){
        if (Button.listOfButtons[i].active){
            ctx.fillRect(Button.listOfButtons[i].x, Button.listOfButtons[i].y, Button.listOfButtons[i].w, Button.listOfButtons[i].h);
        }
    }

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
    static listOfButtons = [];
    x;
    y;
    w;
    h;
    func;
    text;
    active;

    constructor(x, y, w, h, func, text){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.func = func;
        this.text = text;
        this.active = true;
        Button.listOfButtons.push(this);
    }

    static canvasClicked(event){
        console.log(event.screenX + ", " + (event.screenY-yOffset));
        for (let i = 0; i < Button.listOfButtons.length; i++){
            if(Button.listOfButtons[i].detectClick(event.screenX-xOffset, event.screenY-yOffset)){
                Button.listOfButtons[i].onClickButton();
                break;
            }
        }
    }

    static func1(){
        console.log("yes");
    }

    detectClick(xClick, yClick){
        if (this.x < xClick && xClick < this.x + this.w){
            if(this.y < yClick && yClick < this.y + this.h){
                if (this.active){
                    return true;
                }
            }
        }

        return false;
    }

    setActive(bool){
        this.active = bool;
    }

    onClickButton(){
        this.func();
        this.active = true;
    }
}

//game starting code

//innitiating animation loop
let button1 = new Button(700, 200, 100, 50, Button.func1, "asd");
button1.setActive = true;

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
