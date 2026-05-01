const fortunes =[
    "超大吉⭐積極的に動こう！",
    "大吉💖素敵な出会いがあるかも！",
    "中吉😁少し勇気を出すといいことが起きる",
    "小吉😐今日はゆっくり過ごそう",
    "凶😵無理せず慎重に行動しよう",
];

const button = document.getElementById("omikuji-bt");
const result = document.getElementById("result");

button.addEventListener("click",function(){
    const randomNember=Math.floor(Math.random()*fortunes.length);
    const resultText = fortunes[(randomNember)];

    result.textContent=fortunes[(randomNember)];

    if (resultText.includes("大吉")) {
        result.style.color = "red";
    }else if (resultText.includes("中吉")){
        result.style.color = "green";
    }
});