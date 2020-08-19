import React from 'react'


const COLORS = ["primary","secondary","success","danger","warning","info","light","dark"]

class Lables extends React.Component{
    state = {MyLabels : [ ],counter:0,stat : []}

    addLabel =(name) =>{
    this.setState({
        
       MyLabels:[...this.state.MyLabels , 
       <button 
       key={this.state.counter} 
       class={`btn btn${this.state.stat[this.state.counter] === true ? "" :"-outline"}-${COLORS[this.state.counter % 8]}`}
       onClick={this.changeStatus}
       value={name}> {name}</button>    
    ],
    counter: this.state.counter+1,
    stat:[...this.state.stat,false],
   });
    }

    changeStatus = (event) =>{
       //console.log(event.target)
        let place = 0;
        for(let i  =  0  ;  i < this.state.MyLabels.length;i++){
            if(this.state.MyLabels[i].props.value===event.target.value){
                place = i;
            }
        }
        let newStat = this.state.stat;
        newStat[place]= !this.state.stat[place]
        let newLabels = this.state.MyLabels;
        newLabels[place] =  <button 
        key={place} 
        class={`btn btn${newStat[place] === true ? "" :"-outline"}-${COLORS[place % 8]}`}
        onClick={this.changeStatus}
        value={event.target.value}
        type="button"> {event.target.value}</button> 



       this.setState({
           stat:newStat,
           MyLabels:newLabels
   })

   this.props.onLabelChange(this.state.MyLabels)
   
    }
   
    async componentDidMount(){
     await   this.addLabel("work")
        this.addLabel("important")
        this.addLabel("school")
        this.props.onLabelChange(this.state.MyLabels)
    }
    render(){
        return(
        <div style={{marginTop:"10px", marginLeft:"20px"}}>
            {this.state.MyLabels}
        </div>
        )
    }
}

export default Lables;