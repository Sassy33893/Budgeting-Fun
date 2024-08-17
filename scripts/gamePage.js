//.js file to operate the game on the gamepage
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasRect = canvas.getBoundingClientRect();

function renderGame(){
    ctx.clearRect(0, 0, 900, 600);
    ctx.fillStyle = "red";

    ctx.fillRect(0, 0, 100, 100);

    for (let i = 0; i < Button.listOfButtons.length; i++){
        ctx.fillStyle = Button.listOfButtons[i].color;
        ctx.fillRect(Button.listOfButtons[i].x, Button.listOfButtons[i].y, Button.listOfButtons[i].w, Button.listOfButtons[i].h);
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
    static listOfButtons;
    x;
    y;
    w;
    h;
    func;
    text;
    color;
    active;

    constructor(x, y, w, h, func, text, color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.func = func;
        this.text = text;
        this.color = color;
        active = false;
        listOfButtons.push(this);
    }

    static canvasClicked(event){
        for (let i = 0; i < Button.listOfButtons.length; i++){
            if(Button.listOfButtons[i].detectClick(event.screenX, event.screenY)){
                console.log("yesyes")
                break;
            }
        }
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
        //do stuff with func
    }
}

//game starting code

//innitiating animation loop
renderGame();

let button1 = new Button(100, 100, 100, 50, "asd", "asd");
button1.setActive = true;

















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
