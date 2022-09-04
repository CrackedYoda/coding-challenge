// the way we solved it is by sorting the array first and looping to the next value to check if it matches
// and if it did we would increase pairs by one

// and we would loop to the next value
        
    function socksMerchant(n, ar) {
        var pairs = 0; // intialize pairscounting variable


     let _ar = ar.sort();  

for(var i = 0;i<=_ar.length-1;i++) // for statement that loops throught the array
  {
      if(_ar[i] == ar[i+1]){   // loops through the next value
      pairs++;
    i++;  // making sure we loop to the value after the value we counted
 }
    
}    
        
       
      return pairs;
    }

        


       