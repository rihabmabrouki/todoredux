import React, { Component } from 'react'
import { connect } from 'react-redux'


 class Inputs extends Component {
    //  
     addItems=()=>{
        this.props.add(this.props.input);
        // this.props.handlchange()

     }


    render() {
        return (
            <div className="todolist">
                <p>Daily Todo Lists</p>
            <input className="addtodo" type="Text" placeholder="Add your todo ..." onChange={(e)=>{this.props.handlchange(e.target)}}/>
            <button onClick={this.addItems}>+</button>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handlchange:(target)=>{
            dispatch({type:'SET_INPUT',value:target.value})
        },
        add:(input)=>{
            let obj={}
            let inputValue=input
            let id=Math.floor(Math.random()*1000)
            obj={inputValue,id}
            dispatch({type:'ADD_INPUT', value:obj})

        }
    }

}
const mapStateToProps=(state)=>{
    return{
        input:state.inputreduce
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Inputs)