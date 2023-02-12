function average(marks1, marks2, marks3){
    const total = marks1 + marks2 + marks3;
    const average = total / 3;
    return average;
}
const firstAssignmentMarks= 60;
const secondAssignmentMarks= 58;
const thirdAssignmentMarks= 58;

const averageMarks = average(firstAssignmentMarks, secondAssignmentMarks, thirdAssignmentMarks);
console.log(parseFloat(averageMarks.toFixed(2)))