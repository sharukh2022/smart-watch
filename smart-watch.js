var buttons=document.getElementsByClassName('select')
var topBand=document.getElementById('top-band')
var bottomBand=document.getElementById('bottom-band')
buttons[0].onclick=function(){
topBand.style.backgroundColor='black'
bottomBand.style.backgroundColor='black'
}
buttons[1].onclick=function(){
topBand.style.backgroundColor='rgb(230, 117, 24)'
bottomBand.style.backgroundColor='rgb(230, 117, 24)'
}
buttons[2].onclick=function(){
topBand.style.backgroundColor='rgb(81, 81, 206)'
bottomBand.style.backgroundColor='rgb(81, 81, 206)'
}
buttons[3].onclick=function(){
topBand.style.backgroundColor='purple'
bottomBand.style.backgroundColor='purple'
}
var heartRate=document.getElementById('heart-rate-div')
var heartRateBtn=document.getElementsByClassName('features')
var TimeDate=document.getElementById('inside-div')
heartRateBtn[1].onclick=function(){
    heartRate.style.display='flex'
    TimeDate.style.display='none'
}
heartRateBtn[0].onclick=function(){
    heartRate.style.display='none'
    TimeDate.style.display='flex'
}
var div=document.getElementById('inside-div')
function timing(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    div.innerText=time
}
setInterval(timing,1000)


