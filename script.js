// Угадай число с 3-х раз

let random =Math.floor(Math.random()*20)+1;
console.log(random);
let count = 3;

document.getElementById("ok").onclick = function () {

    if (count>0) {
        let num=document.getElementById('num').value;
        num=parseInt(num);
        if (random=== num) {
            result="Урааа!";
            document.getElementById('out').innerHTML = result;
        }
        else if (random>num) {
            result="Недолет";
            document.getElementById('out').innerHTML = result;
        }
        else if (random<num){
            result="Перелет";
            document.getElementById('out').innerHTML = result;
        }
        count=count-1;
        document.getElementById('count').innerHTML='Осталось попыток: ' + count;
    }
    else {
        let msg ="Вы проиграли. Страница будет перезагружена";
        // document.getElementById('out').innerHTML = msg;
        alert(msg);
        setTimeout(location.reload(), timeout(2000));
    }

    }

