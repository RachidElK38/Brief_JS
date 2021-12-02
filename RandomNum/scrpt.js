var n = Math.floor(Math.random()*100); /* Nombre aleatoire*/
var btn = document.getElementById("btn");
var remaining = document.getElementById("tmp");
var result = document.getElementById("result");

document.getElementById("rnd").value=n;

var attemp = 10;/* Les tentatives */
btn.addEventListener('click',function(){
    var txt = document.getElementById("txt").value;
    if(txt==null || txt=='')
    {
        alert("Donner un nombre svp");
    }
   
    if(n==txt){
        if(attemp==9||attemp==10)
        {
            result.innerHTML ="Well done, you are a Genius !!!";
        }
        if(attemp<=8)
        {
            result.innerHTML ="Congratulations, you won after"+ attemp +"attempts";
        }
    }
    else{ 
        if(n>txt){
        result.innerHTML ="Smaller";
    }
    else{
        result.innerHTML ="Greater";
    }
    attemp--;
    remaining.innerHTML = attemp;
}
    if(attemp==0){
        result.innerHTML ="It's missed !";
        attemp=10;
        remaining.innerHTML = attemp;
    }
}
)