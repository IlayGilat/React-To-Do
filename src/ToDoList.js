import React from 'react'
import ToDo from './ToDo'
import AddBar from './AddBar'
class ToDoList extends React.Component{
  state = {
      ToDos : [],
      counter:0,
     
  }

  removeTodo=(id)=>{
    this.setState({
        ToDos:this.state.ToDos.filter(Tid=>{
            return Tid.props.place !== id
        })
    })
    }


  OnFormSubmit = (state) => {
    this.setState({
        ToDos:[...this.state.ToDos,
            <ToDo
             inputHead={state.HeadInput}
             inputBody={state.BodyInput} 
             place={this.state.counter}
             Clicked={this.removeTodo}
              key={this.state.counter}
              DueTime={state.DueTime}
              Labels={state.MyLabels}
              />
    ],

    counter:this.state.counter+1
    })


  }

//row row-cols-1 row-cols-md-2
    render(){
        return( 
        <div> 
             <AddBar OnFormSubmit={this.OnFormSubmit} />
            <div class="row row-cols-1 row-cols-md-2">
                {this.state.ToDos}
            </div>
        </div>
        )
    }
}

export default ToDoList;