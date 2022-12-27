import React , {Component} from 'react'
import './Student.css'

class Student extends Component {
    constructor(){
        super();
        this.state = {
            score : 0,
            success : 'default'
        }
    }

    componentDidMount(){
        this.setState({
            score: this.props.score
        })
    }

    addScore(){
        this.setState({
            score: this.state.score + 1
        }, () => {
            if (this.state.score >= 350){
                this.setState({
                    success: true
                }) 
            }
            else {
                this.setState({
                    success: false
                }) 
            }
        })
    }

    subScore(){
        this.setState({
            score: this.state.score - 1
        }, () => {
            if (this.state.score < 350){
                this.setState({
                    success: false
                }) 
            }
            else{
                this.setState({
                    success: true
                }) 
            }
        })
    }

    render(){
        const isSuccess= this.state.success;
        let text;
        if (isSuccess == true){
            text = <span>Success</span>
        }
        else if (isSuccess==false){
            text = <span>Fail</span>
        }

    return (
    <div className='student'>
      <div className='left'>
        <h2 className='studentName'>{this.props.name}
        <button className='scorebtn' onClick = {() => this.addScore()}>+</button>
        <button className='scorebtn' onClick = {() => this.subScore()}>-</button>
        </h2>
        <p className='universityName'>{this.props.university} {text} </p>
      </div>
      <div className='right'>
        <div className='score'>{this.state.score}</div>
      </div>
    </div>
  )
  }
}

export default Student
