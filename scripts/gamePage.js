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
    ctx.fillStyle = "black"
    ctx.fillRect(800, 500, 100, 100);
    ctx.fillStyle = "white"
    ctx.fillRect(810, 510, 80, 80);

    ctx.fillText("Happiness: " + Player.happiness, 830, 520);
    ctx.fillText("Money: " + Player.Money, 860, 520);

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
        this.money = money;
    }

    questionButton(x, y, w, h){
        let text = this.text.slice(0, this.text.length/2);
        let text2 = this.text.slice(this.text.length/2, this.text.length);

        let funcParam = this.happiness + "," + this.money;
        
        //add function txt
        new Button(x, y, w, h, Button.addAmount, text, text2, funcParam);
    }
}

class Player{
    static money = 0;
    static happiness = 0;
    static inventory = [];
}

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
    funcParam;

    constructor(x, y, w, h, func, text, text2, funcParam){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.func = func;
        this.text = text;
        this.text2 = text2;
        this.active = true;
        this.interval = null;
        this.funcParam = funcParam;
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

    static addAmount(amount){
        let amountArray = amount.split(",");

        Player.happiness += amountArray[0];
        Player.money += amountArray[1];
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
        if (funcParam == null){
            this.func();
        }
        else{
            this.func(funcParam);
        }

        this.active = false;
    }
}

//game starting code

//innitiating animation loop
let button1 = new Button(100, 100, 100, 50, Button.func1, "asdsddddd", "waasfdfsdf", null);
button1.setActive = true;

button1.moveInterval(500, 500);

let question = new Question("Hello :D", 15, 15);
let buttonq1 = question.questionButton(100, 100, 100, 50);
buttonq1.moveInterval(200, 700);

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
