var msec = 0;
var sec = 0;
var min = 0;
var button;
var interval;
 var mili_sec = document.getElementById("mseconds");
 var seconds = document.getElementById("seconds");
 var minutes = document.getElementById("minutes");

 
function timer(){
    msec++;
    mili_sec.innerHTML = msec;

    if(msec>=100)
    {
        sec++
        seconds.innerHTML = sec;
        msec = 0;
    }
    else if(sec>=60)
    {
        min++;
        minutes.innerHTML = min;
        sec = 0;
    }
}
function start(){
        interval = setInterval(timer,10);
        button  = document.getElementById("start").disabled = true;
}

function pause(){
    interval = clearInterval(interval);
    button = document.getElementById("start").disabled = false;
}
function reset(){
    record();
    msec = 0;
    sec = 0;
    min = 0;
     minutes.innerHTML = min + "0  ";
     seconds.innerHTML = sec + "0  ";
     mili_sec.innerHTML = msec + "0";
     pause();
}


function record(){
    
    var sw_history = document.getElementById("sw-history")
    var  mili_sec = document.getElementById("mseconds").innerText;
    var  seconds = document.getElementById("seconds").innerText;
    var  minutes = document.getElementById("minutes").innerText;
    var linebreak = document.createElement("br");
    var record = document.createElement("div");
    record.setAttribute('id','record');
    var history = document.createTextNode(minutes +" : "+ seconds +" : " + mili_sec );
    if (msec == ""){
        alert("Sorry We Can't Add Empty Values.");
    }
    else{
    record.appendChild(history);
    sw_history.appendChild(record);
    sw_history.appendChild(linebreak);
    }
    record.addEventListener('click',function(){this.remove(history);})

}