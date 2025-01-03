import React from 'react'
import { useContext } from 'react'
import { ThemeProvider } from '../UseContext'
const StudentResult = () => {
    var result = useContext(ThemeProvider)
    return (
    <div>StudentResult is {result.cgpa} <br/>
    gpa is {result.gpa}
    </div>
  )
}

export default StudentResult