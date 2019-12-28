let btn = document.getElementById('btn');

let result = document.getElementById('result');

let bg = document.getElementsByClassName('result')[0];

function luckycolor(){
    let res = ['赤', '青', '黑', '白', '紫', '緑'];
        let backgroundColor = ['red', 'blue', 'black', 'white', 'purple', 'green'];
        let randomNum = Math.random();
        let num = Math.floor(randomNum * res.length);

        result.textContent = res[num];
        
        bg.style.backgroundColor = backgroundColor[num];

        if (num == 3){
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