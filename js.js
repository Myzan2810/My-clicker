let count=0;
let timeLeft=10;
let timerId;

const clickBtn = document.getElementById("clickbtn");
const timeDisplay = document.getElementById("time")
const countDisplay = document.getElementById("count")

//Обработчик кликов

clickBtn.addEventListener("click", () =>{
    count=count+1
    countDisplay.textContent=count
})

function StartGame(){
    count=0;
    timeLeft=10;
    countDisplay.textContent=count
    timeDisplay.textContent=timeLeft
    clickBtn.disabled=false;

    timerId=setInterval(() =>{   
        timeLeft=timeLeft-1
        timeDisplay.textContent=timeLeft
        if (timeLeft <= 0){
            clearInterval(timerId);
            clickBtn.disabled=true;
            alert("Время вышло!Вы кликнули "+count+" раз " )

        }
    } ,1000);
}

function AgainGame(){
    
}

