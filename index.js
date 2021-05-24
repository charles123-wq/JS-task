function convertFahrToCelsius(temp) {
    if(typeof(temp) === "number" || typeof(temp) === "string"){
      return ((Number(temp) - 32) * 5/9).toFixed(4);
    } else {
      return `${JSON.stringify(temp)} is not a valid number but a/an ${typeof(temp)}`;
    }
  }
  
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));

function checkYuGiOh(n) {
  if (typeof n === "string" && isNaN(n)) {
      return `Invalid Parameter: ${n}`
    }
    //if its a number
    else {
      //convert it to a javascript number
      n = Number(n);
      //create an array of n numbers
      const array = Array.from({ length: n }, (_, i) => i + 1);
      // check the cases of n (the multiples) and return the desires result
      const result = array.map((element) => {
        //for multiples of 2,3,5
        if (element % 2 === 0 && element % 3 === 0 && element % 5 === 0) {
          return "yu-gi-oh";
        }
        //for multiples of 2,3
        else if (element % 2 === 0 && element % 3 === 0) {
          return "yu-gi";
        }
        //for multiples of 2
        else if (element % 2 === 0) {
          return "yu";
        }
        //for multiples of 3
        else if (element % 3 === 0) {
          return "gi";
        }
        //for multiples of ,5
        else if (element % 5 === 0) {
          return "oh";
        }
        //for multiples of neither 2,3,5
        else {
          return element;
        }
      });
      console.log(result);
    }
  };