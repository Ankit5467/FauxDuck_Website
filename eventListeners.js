//Javascript Event Listeners
//Part 1: Size Buttons

document.getElementById("myBtn1").addEventListener("click", selectSize1);
function selectSize1() {
  let curColor = myBtn1.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtn1.style.backgroundColor="rgb(153, 10, 10)";
    myBtn2.style.backgroundColor = "#FFFFFF";
    myBtn3.style.backgroundColor = "#FFFFFF";
    myBtn4.style.backgroundColor = "#FFFFFF";
    myBtn5.style.backgroundColor = "#FFFFFF";
    myBtn6.style.backgroundColor = "#FFFFFF";
    myBtn7.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtn1.style.backgroundColor="#FFFFFF";
}

document.getElementById("myBtn2").addEventListener("click", selectSize2);
function selectSize2() {
  let curColor = myBtn2.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtn2.style.backgroundColor="rgb(153, 10, 10)";
    myBtn1.style.backgroundColor = "#FFFFFF";
    myBtn3.style.backgroundColor = "#FFFFFF";
    myBtn4.style.backgroundColor = "#FFFFFF";
    myBtn5.style.backgroundColor = "#FFFFFF";
    myBtn6.style.backgroundColor = "#FFFFFF";
    myBtn7.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtn2.style.backgroundColor="#FFFFFF";
}  

document.getElementById("myBtn3").addEventListener("click", selectSize3);
function selectSize3() {
  let curColor = myBtn3.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtn3.style.backgroundColor ="rgb(153, 10, 10)";
    myBtn1.style.backgroundColor = "#FFFFFF";
    myBtn2.style.backgroundColor = "#FFFFFF";
    myBtn4.style.backgroundColor = "#FFFFFF";
    myBtn5.style.backgroundColor = "#FFFFFF";
    myBtn6.style.backgroundColor = "#FFFFFF";
    myBtn7.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtn3.style.backgroundColor="#FFFFFF";
}  

document.getElementById("myBtn4").addEventListener("click", selectSize4);
function selectSize4() {
  let curColor = myBtn4.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtn4.style.backgroundColor = "rgb(153, 10, 10)";
    myBtn1.style.backgroundColor = "#FFFFFF";
    myBtn2.style.backgroundColor = "#FFFFFF";
    myBtn3.style.backgroundColor = "#FFFFFF";
    myBtn5.style.backgroundColor = "#FFFFFF";
    myBtn6.style.backgroundColor = "#FFFFFF";
    myBtn7.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtn4.style.backgroundColor="#FFFFFF";
}  

document.getElementById("myBtn5").addEventListener("click", selectSize5);
function selectSize5() {
  let curColor = myBtn5.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtn5.style.backgroundColor ="rgb(153, 10, 10)";
    myBtn1.style.backgroundColor = "#FFFFFF";
    myBtn2.style.backgroundColor = "#FFFFFF";
    myBtn3.style.backgroundColor = "#FFFFFF";
    myBtn4.style.backgroundColor = "#FFFFFF";
    myBtn6.style.backgroundColor = "#FFFFFF";
    myBtn7.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtn5.style.backgroundColor = "#FFFFFF";
}  

document.getElementById("myBtn6").addEventListener("click", selectSize6);
function selectSize6() {
  let curColor = myBtn6.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtn6.style.backgroundColor = "rgb(153, 10, 10)";
    myBtn1.style.backgroundColor = "#FFFFFF";
    myBtn2.style.backgroundColor = "#FFFFFF";
    myBtn3.style.backgroundColor = "#FFFFFF";
    myBtn4.style.backgroundColor = "#FFFFFF";
    myBtn5.style.backgroundColor = "#FFFFFF";
    myBtn7.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtn6.style.backgroundColor = "#FFFFFF";
}  

document.getElementById("myBtn7").addEventListener("click", selectSize7);
function selectSize7() {
  let curColor = myBtn7.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtn7.style.backgroundColor = "rgb(153, 10, 10)";
    myBtn1.style.backgroundColor = "#FFFFFF";
    myBtn2.style.backgroundColor = "#FFFFFF";
    myBtn3.style.backgroundColor = "#FFFFFF";
    myBtn4.style.backgroundColor = "#FFFFFF";
    myBtn5.style.backgroundColor = "#FFFFFF";
    myBtn6.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtn7.style.backgroundColor = "#FFFFFF";
}  

// Part 2: Color Buttons

document.getElementById("myBtnA").addEventListener("click", selectColorA);
function selectColorA() {
  let curColor = myBtnA.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtnA.style.backgroundColor = "rgb(153, 10, 10)";
    myBtnB.style.backgroundColor = "#FFFFFF";
    myBtnC.style.backgroundColor = "#FFFFFF";
    myBtnD.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtnA.style.backgroundColor = "#FFFFFF";
}  

document.getElementById("myBtnB").addEventListener("click", selectColorB);
function selectColorB() {
  let curColor = myBtnB.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtnB.style.backgroundColor = "rgb(153, 10, 10)";
    myBtnA.style.backgroundColor = "#FFFFFF";
    myBtnC.style.backgroundColor = "#FFFFFF";
    myBtnD.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtnB.style.backgroundColor = "#FFFFFF";
}  

document.getElementById("myBtnC").addEventListener("click", selectColorC);
function selectColorC() {
  let curColor = myBtnC.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtnC.style.backgroundColor = "rgb(153, 10, 10)";
    myBtnA.style.backgroundColor = "#FFFFFF";
    myBtnB.style.backgroundColor = "#FFFFFF";
    myBtnD.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtnC.style.backgroundColor = "#FFFFFF";
}  

document.getElementById("myBtnD").addEventListener("click", selectColorD);
function selectColorD() {
  let curColor = myBtnD.style.backgroundColor;
  if(curColor != "rgb(153, 10, 10)"){
    myBtnD.style.backgroundColor = "rgb(153, 10, 10)";
    myBtnA.style.backgroundColor = "#FFFFFF";
    myBtnB.style.backgroundColor = "#FFFFFF";
    myBtnC.style.backgroundColor = "#FFFFFF";
  }
  else
    myBtnD.style.backgroundColor = "#FFFFFF";
}  