import './App.css'
import Course from './course'
import { useState,useEffect } from 'react';
import useFetch from './useFetch';

    

function CourseList(){


    // const [courses,setCourses] =useState(null);

    const [courses,dummy, error ]=useFetch('http://localhost:3000/courses');
   


  function HandleDelete(id ){
    console.log(id);
    const newCourse=courses.filter((course)=>course.id!= id);
    setCourses(newCourse);
}



  //courses.sort((x,y)=>y.rating-x.rating) //descending

//   const  vfmCourses = courses.filter((course)=>
//     course.price<=200)


if (!courses && !error) {
    return <p>Loading.....</p>;
}

if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
} //loading is done show error undefined




const coursesList=courses.map(
    (course)=>
<Course  key={course.id} name={course.name}
 image ={course.image} 
 price={course.price} rating={course.rating}
 delete= {HandleDelete} id={course.id}/>
)




    return(
        <>
        {coursesList}
        <button onClick={()=> {SetDummy(false)}}>  Dummy button</button>

        
        </>

    );
}


export default CourseList;



//npx json-server --watch data/dummyData.json  --port 3000 --static ./data
