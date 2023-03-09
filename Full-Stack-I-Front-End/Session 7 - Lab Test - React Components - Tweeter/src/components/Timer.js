import React from 'react';
import Moment from 'react-moment';

function Timers () {
    
}
class Timer extends React.Component {
    constructor (props){
        super(props);
        this.date= new Date();
    }

    render() { 
        return (  
            <span>
                <Moment format="HH:mm:ss">
                    {this.date}
                </Moment>
            </span>
        );
    }
}
 
export default Timer;