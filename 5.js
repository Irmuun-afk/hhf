var time=document.getElementsByTagName('h1')[0];
var sec=0, min=0,h=0, dol=0;
var ol = document.getElementsByTagName('ol')[0];
// start time
function watch(){
    dol++;
    if(dol>100){
        sec++;
        dol=0;
        if(sec>59){
            min++;
            sec=0;
            if(min>59){
              h++;
              min=0;
            }
        }
    }
   // ternary operator ? :
var d = dol<10 ? "0"+dol : dol;
 var s = sec<10 ? "0"+sec : sec;
 var m = min<10 ? "0"+min : min;
 var hh = h<10 ? "0"+h : h;
 time.innerText = hh+":"+m+":"+s+":"+d;
}
var a;
function starts(){
    a = setInterval(watch, 10);
    document.getElementsByTagName('button') [0].disabled=true;
    document.getElementsByTagName('button') [1].disabled=false;
}
function stops(){
    // clearInterval
    document.getElementsByTagName('button') [0].disabled=false;
    document.getElementsByTagName('button') [1].disabled=true;
    clearInterval(a);
}
function res(){
    document.getElementsByTagName('button') [0].disabled=false;
    document.getElementsByTagName('button') [1].disabled=true;
    dol=0;
    sec=0;
    min=0;
    h=0; 
    ol.innerText="";
    time.innerText =  "00:00:00:00"
    clearInterval(a)
}
function lab(){
    // document.createElement('tagName');-> shine tag uusgene
    var li = document.createElement('li');
    console.log(li);
    li.innerText=time.innerText;
    // tagName.append(tagName);
    ol.append(li);
}