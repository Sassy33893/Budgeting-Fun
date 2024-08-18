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
            //ctx.drawImage(Button.buttonImg, Button.listOfButtons[i].y, Button.listOfButtons[i].w, Button.listOfButtons[i].h);
            ctx.fillStyle = "red";
            ctx.fillRect(Button.listOfButtons[i].x, Button.listOfButtons[i].y, Button.listOfButtons[i].w, Button.listOfButtons[i].h);
            ctx.fillStyle = "black";
            ctx.font = "20px ariel";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(Button.listOfButtons[i].text, Button.listOfButtons[i].x + Button.listOfButtons[i].w/2, Button.listOfButtons[i].y + Button.listOfButtons[i].h/4, Button.listOfButtons[i].w);
            ctx.fillText(Button.listOfButtons[i].text, Button.listOfButtons[i].x + Button.listOfButtons[i].w/2, Button.listOfButtons[i].y + 3*Button.listOfButtons[i].h/4, Button.listOfButtons[i].w);
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

class Character {
    static listOfCharacters = [];
    image;
    questions;

    constructor(name, image, question1, question2){
        this.image = new Image();
        this.image.src = image;
        listOfCharacters.push(this);
        this.questions = [];
    }
}

class Question{
    text;
    happiness;
    money;

    constructor(text, happiness, money){
        this.text = text;
        this.happiness = happiness;
        this.moeny = money;
    }

    questionButton(x, y, w, h){
        new Button(x, y, w, h, func, text, text2);
    }
}

class Player{
    static money;
    static happiness;

}

/*class Character {
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
}*/

class Button{
    static listOfButtons = [];
    static buttonImg = new Image().src = "https://i.pinimg.com/originals/46/74/64/4674648aeb254ed1cf5dfef687efea79.png";
    x;
    y;
    w;
    h;
    func;
    text;
    text2;
    active;
    interval;

    constructor(x, y, w, h, func, text, text2){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.func = func;
        this.text = text;
        this.text2 = text2;
        this.active = true;
        this.interval = null;
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

    setMoveInterval(x, y){
        //random placement, then make a move interval
    }

    moveInterval(x, y){
        this.interval = setInterval(() => {
            //make sure that THIS works
            if (x < this.x){
                this.x += Math.floor((x - this.x)/10);
                this.y += Math.floor((y - this.y)/10);
            }
            else{
                this.x += Math.ceil((x - this.x)/10);
                this.y += Math.ceil((y - this.y)/10);
            }

            console.log(this.x + ", " + this.y);

            if (this.x == x && this.y == y){
                clearInterval(this.interval);
            }
        }, 50, x, y);
    }

    setActive(bool){
        this.active = bool;
    }

    onClickButton(){
        this.func();
        this.active = false;
    }
}

//game starting code

//innitiating animation loop
let button1 = new Button(100, 100, 100, 50, Button.func1, "asdsddddd", "waasfdfsdf");
button1.setActive = true;

button1.moveInterval(500, 500);

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
