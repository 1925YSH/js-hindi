//object de structure

const course={

    course_name:"JS in hindi",
    price:1500,
    courseInstructor:"hitesh"
}
const {courseInstructor}=course
//console.log(courseInstructor);
const {courseInstructor:instructor}=course
console.log(instructor);