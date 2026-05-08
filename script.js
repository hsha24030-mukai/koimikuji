const fortunes =[
    "超大吉⭐私から伝えることは何もない",
    "大吉💖素敵な出会いがあるかも！",
    "中吉😁少し勇気を出すといいことが起きる",
    "小吉😐今日はゆっくり過ごそう",
    "凶😵無理せず慎重に行動しよう",
];

const button = document.getElementById("omikuji-bt");
const omikujiImg = document.getElementById("omikuji-img");
const result = document.getElementById("result");
const advice = document.getElementById("advice");

omikujiImg.innerHTML ="<img src='happy.png'>";

button.addEventListener("click",function(){
    const randomNember=Math.floor(Math.random()*fortunes.length);
    const resultText = fortunes[(randomNember)];

    result.textContent=fortunes[(randomNember)];

    if (resultText.includes("大吉")) {
        result.style.color = "red";
        advice.textContent = "今日は積極的に行動しよう";
        result.innerHTML = "<img src='happy1.png'>";
    }else if (resultText.includes("中吉")){
        result.style.color = "green";
        advice.textContent = "";
        result.innerHTML = "<img src='happy2.png'>";
    }else if (resultText.includes("小吉")){
        result.style.color = "black";
        advice.textContent = "";
　　　　 result.innerHTML = "<img src='happy3.png'>";
    }else{ (resultText.includes("凶"))
        result.style.color = "black";
        advice.textContent = "";
　　　　 result.innerHTML = "<img src='happy5.png'>";
    }
});