let btn = document.getElementById('btn');

let result = document.getElementById('result');

let bg = document.getElementsByClassName('result')[0];

function luckycolor(){
    let res = ['赤', '青', '黑', '白', '紫', '緑', 'ピンク', '黄', '水色', '紺', 'オレンジ'];
        let backgroundColor = ['red', 'blue', 'black', 'white', 'purple', 'green', 'pink', 'yellow', 'skyblue', 'darkblue', 'orange'];
        let randomNum = Math.random();
        let num = Math.floor(randomNum * res.length);

        result.textContent = res[num];
        
        bg.style.backgroundColor = backgroundColor[num];

        if (num == 3 || num == 6 || num == 7 || num == 8){
            result.style.color = 'black';
        } else {
            result.style.color = 'white';
        }
}

btn.addEventListener('click', luckycolor);

//btn.addEventListener('click', function()
//    {
//        let res = ['赤', '青', '黑', '白', '紫', '緑'];
//        let backgroundColor = ['red', 'blue', 'black', 'white', 'purple', 'green'];
//        let randomNum = Math.random();
//        let num = Math.floor(randomNum * res.length);

        //console.log(num);
//        result.textContent = res[num];
        
        //result.style.background = backgroundColor[num];
//        bg.style.backgroundColor = backgroundColor[num];

//        if (num == 3){
//            result.style.color = 'black';
//        } else {
//            result.style.color = 'white';
//        }
//})