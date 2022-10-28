
import React from "react"

class Counter  extends React.Component  {
    // initialize!
    constructor () {
        super()  // base() ===> parent()

        this.state = {
            count: 0
        }

        //this.bind.handleIncrement = this.handleIncrement
    }

    handleIncrement ()  {
        // modify not directly ====> this.setState()
        this.setState({
            count: this.state.count + 1
        })

        console.log(`clicked....`)
       
    }
  

    render() {
        return <>
            <button className="like-button" onClick={ () =>  this.handleIncrement()  } >Counter</button>
             counter: {this.state.count }
        </>
    }
}


export default Counter