//Challenge: https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2){
  // moment of truth
  if ((flower1 % 2 ===0 && flower2 % 2 !==0)||(flower2 %  2 ===0 && flower1 % 2 !==0))
    {
      return true;
     }
   else
   {
   return false;
   }

}
