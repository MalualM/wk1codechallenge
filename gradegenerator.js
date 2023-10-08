// declaring the variable to a score(number)
let studentMarks=60;
// assigning the function a variable
let grade=gradeGenerator(studentMarks);
// creating a function for grading scores
function gradeGenerator(studentMarks){
// argument that input should only be numbers and if letters an output statement should be printed
if (typeof studentMarks !== 'number' || isNaN(studentMarks)){
    return 'Enter a valid number.';
}
// if the score ranges from 80-100 it should give an output of 'A'
if (studentMarks >=80){
  return 'A';
}
// if the score ranges from 60-79 it should give an output of 'B'
else if (studentMarks>=60){
  return 'B';
}
// if the score ranges from 49-59 it should give an output of 'C'
else if (studentMarks>=49){
    return 'C';
}
// if the score ranges from 40-48 it should give an output of 'D'
else if (studentMarks>=40){
    return 'D';
}
// if the score ranges from 0-39 it should give an output of 'E'
else {
    return 'E';
}
}
gradeGenerator()
let ans=gradeGenerator(studentMarks)
console.log(ans)
