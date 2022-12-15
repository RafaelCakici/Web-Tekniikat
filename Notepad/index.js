const txt1 = document.getElementById('Name');
const btn = document.getElementById('btn');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');
const areaone = document.getElementById('areaone');

function fun1(){
out1.innerHTML = txt1.value;
out2.innerHTML = areaone.value;
}

btn.addEventListener('click',fun1);