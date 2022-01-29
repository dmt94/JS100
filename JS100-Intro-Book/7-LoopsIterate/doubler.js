//won't log an answer that is greater than 50
function doubler(number) {
  if (number <= 50) {
    console.log(number); 
    doubler(number * 2);
  }
}

doubler(5);

//will log an answer that is greater than 50
function doublerV2(number) {
  console.log(number); 

  if (number <= 50) {
    doublerV2(number * 2);
  }
}

doublerV2(5);