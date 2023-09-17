// Objecct destructuring

const course ={
    courseName:"js in Hindi",
    price :"999",
    courseInstructor:"moon"
}
// course.courseInstructor


const {courseInstructor:instructor} = course
console.log(instructor);

// {
//     "name":"sagar@gmail.com",
//     "courseName":"js in hindi",
//     "price":"free",
// }