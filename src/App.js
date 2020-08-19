import React from 'react'
import ToDoList from './ToDoList'
import Settings from './Settings'
class App extends React.Component{

  
    render(){
        return (
            <div>
            <Settings/>
                <ToDoList/>
            </div>
        )
    }
}

export default App 