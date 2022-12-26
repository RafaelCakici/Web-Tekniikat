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

function addBorder() {
    // Get the text element
    let text = document.getElementById("output2");

    // Add a border to the text element
    text.style.border = "1px solid black";
  }