// function factorial(n) {
//   let res = n;

//   if (n === 0) {
//     return 1;
//   }

//   for (let i = 1; i <= n; i++) {
//     if (n - i !== 0) {
//       res = res * (n - i);
//     }
//   }
//   return res;
// }


function factorial(n) {
  if (n === 0) {
    return 1;
  }

  let res = 1;

  for (let i = n; i > 1; i--) {
    res = res * i;
  }



  return res;
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5);