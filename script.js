let a = 1;
let X= [];
let O = [];

function handleClick(element , no) {
    let l;
    if (element.innerHTML === "") {
   if ( a==0) 
    {
      element.innerHTML = "O";
     a = 1;
     l = "O";
    } 
   else 
   {
      element.innerHTML = "X";
      a = 0;
      l = "X";
   }
    if (l === "X") {
        X.push(no);
    } else {
        O.push(no);
    }
setTimeout(checkWinner, 200);
   
        
    
    
}


}

const win = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

function checkWinner() 
{
    
  for (const i of win) {
   
 
  for (const i of win) {
    if (X.includes(i[0]) && X.includes(i[1]) && X.includes(i[2])) {
      alert(" X is the winner!");
      location.reload();
      return;
    }

    if (O.includes(i[0]) && O.includes(i[1]) && O.includes(i[2])) {
      alert(" O is the winner!");
      location.reload();
      return; 
    }
  }


  if (X.length + O.length === 9) {
    alert("It's a draw!");
    location.reload();
    return;
  }
}

   
  }

