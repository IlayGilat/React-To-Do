import React from 'react'


class ToDo extends React.Component{
state = {
    text : ' ',
    header:'',
    id: '',
    DueTime : "",
    Late:"",
    Labels:[]
}
componentDidMount(){
    let FormatedTime =this.props.DueTime;
    FormatedTime = (String)(FormatedTime).replace("T"," [ ") + " ]"

    this.setState({
        id:this.props.place,
        text:this.props.inputBody,
        header:this.props.inputHead,
        DueTime:FormatedTime,
        Labels:this.props.Labels,
        Late:"success"
    })
this.timerID = setInterval(
    ()=>{
      let CurTime = `${new Date().getFullYear()}-${`${new Date().getMonth() +
            1}`.padStart(2, 0)}-${`${new Date().getDate() + 1}`.padStart(
            2,
            0
          )}T${`${new Date().getHours()}`.padStart(
            2,
            0
          )}:${`${new Date().getMinutes()}`.padStart(2, 0)}`
        CurTime = (String)(CurTime).replace("T"," [ ") + " ]"
    
    if(CurTime > this.state.DueTime){
        this.setState({
            Late:"danger"
        })
    }

    },60000
)


}




Clicked = (event)=>{
    this.props.Clicked(this.state.id)

}


//grid-item
//card text-center w-50 text-white bg-dark mb-3
render(){
    return(
        <div class=" card text-center w-50 text-white bg-dark mb-3 grid-item" >
            <div class="card-header">
    <h1>{this.state.header}</h1>
    <div style={{pointerEvents: "none",height: "50%",width: "1rm"}}>
    {this.props.Labels}
</div>
            </div>
            <div class="card-body">
            <h5>{this.state.text}</h5>
            <div class="d-flex justify-content-between text-wrap">
            <p class={`badge badge-${this.state.Late} text-justify`}>{this.state.DueTime}</p>
            <button class="btn btn-danger" onClick={this.Clicked} style={{marginBottom:"10px"}}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
</div>

      
       </div>
        </div>
    )
}
}

export default ToDo;