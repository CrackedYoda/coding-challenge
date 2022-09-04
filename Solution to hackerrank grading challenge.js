// challenge


// https://www.hackerrank.com/contests/microverse-fast-track/challenges/grading

// solution below

function gradingStudents(grades){

    var graded = grades.map((grade) => { // using map method to make new array of the answer

        if(grade < 38){ return grade; }  // checking if value less than 38
    
          else if (grade % 5 == 3 || grade % 5 == 4 ){  // checking if the value is roundable using modulus
                var grader = 5 - grade % 5;       // rounding the value
                return  grade + grader;     // returning the value
            }
            else{ return grade;}     // incase value is not roundable returning original value > 38

    })
       
    return graded;   // returning the newly mapped array
      
    }