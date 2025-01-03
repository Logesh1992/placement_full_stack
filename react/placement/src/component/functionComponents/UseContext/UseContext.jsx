import React from 'react'
import Component2 from './contextComponents/Component2'
export var ThemeProvider=React.createContext()

const UseContext = () => {
  return (
      <div>
        <ThemeProvider.Provider value={{cgpa:"10.00",gpa:"6.00"}} >
             UseContext
            <Component2/>
        </ThemeProvider.Provider>
    </div>
  )
}

export default UseContext