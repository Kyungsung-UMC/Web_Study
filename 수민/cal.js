
function num(n){
    if(document.getElementById("output").value === "0")
    {
        document.getElementById("output").value =" ";
    }
    document.getElementById("output").value += n;
}
function AC(){
    document.getElementById("output").value ="0";
}
function symbol(s){
    if(document.getElementById("output").value === "0")
    {
        document.getElementById("output").value ="";
    }
    document.getElementById("output").value += s;
}
function com(){
    document.getElementById("output").value += ".";
}
function result(){
    document.getElementById("output").value =eval(document.getElementById("output").value)
}
function plusminus(){
    document.getElementById("output").value *= -1;
}