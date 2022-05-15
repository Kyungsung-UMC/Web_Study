//const body = document.gerElementsByTagname('body')
// console.log('확인')
// const calculator = document.querySelector('');
// const buttons = calculator.querySelector('')
// 곱셈
// function multiply (num, num2) {
    // const result = num * num2
    // return result; 
  // }
  // 나눗셈
// function division (num, num2) {
    // const result = num / num2
    // return result; 
  // }
  // 덧셈
// function addition (num, num2) {
    // const result = num + num2
    // return result; 
  // }
  // 뺄셈
// function subtraction (num, num2) {
    // const result = num - num2
    // return result; 
  // }
  //const body = document.gerElementsByTagname('body')
  function symbol(s){
    if(document.getElementById("r").value ==="0")
    {
      document.getElementById("r").value = "";
    }
    document.getElementById("r").value += s;
  }
  function number(n){
    if(document.getElementById("r").value ==="0")
    {
      document.getElementById("r").value = "";
    }
    document.getElementById("r").value += n;
  }
  function res(){
    document.getElementById("r").value = eval(document.getElementById("r").value);
  }
  function AC(){
    document.getElementById("r").value ="0";
  }
  function po(){
    document.getElementById("r").value += ".";
  }

  
    