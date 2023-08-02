import React from 'react'
import Part from './Part'

function Course({course}) {

    const totalExercises = ()=>{
        const arrayExercises = course.parts.map(part=>{
            return part.exercises
        })
        return arrayExercises.reduce((acc,value)=>acc+value)
    }

  return (
    <>
        <h2>{course.name}</h2>
        {course.parts.map((part)=>{
            return (
            <Part key={part.id} part={part}/>
            )
        })}
        <h3>Total de exercises: {totalExercises()}</h3>
    </>
  )
}

export default Course