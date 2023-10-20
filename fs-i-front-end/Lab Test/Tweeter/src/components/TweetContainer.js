import React from 'react';
import Comment from './Comment';


class TweetContainer extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            value: '',
            statusList: [],
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = event =>{
        this.setState({value: event.target.value});
    };

    handleSubmit = event =>{
        event.preventDefault();
        this.setState(
            {
            statusList: [...this.state.statusList, this.state.value], 
            value:''
        });
    };

    handleClick = event => {
        event.preventDefault();
        console.log(`clicking...`)
        this.setState(
            {
                statusList: [],
                value: '',
                isLoading: true
            }
        )
    }
    render() { 
        return ( 
            <div className="tweet-container"> 
                <button onClick={this.handleClick}>Loaded</button>
                {
                   this.state.isLoading ? <center>
                        <h2>{this.props.status}</h2>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <button type="submit">Post</button>
                        </form>

                        {
                            this.state.statusList.map((status, index) => (
                                <Comment status={status} key={index} />
                            ))
                        }

                    </center>
                    :
                    <>Loading...</>
                }
            </div>
        );
    }
}
 
export default TweetContainer;