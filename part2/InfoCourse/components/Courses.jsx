import React from 'react'
import Course from './Course'

function Courses({ courses }) {
    console.log(courses);
    return (
        <>
            <h1>Web development curriculum</h1>
            {courses.map((item, index) => {
                return <Course key={index} course={item} />
            })}
        </>
    )
}

export default Courses