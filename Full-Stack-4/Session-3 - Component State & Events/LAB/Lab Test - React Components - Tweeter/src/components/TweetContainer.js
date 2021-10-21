import React from 'react';
import Comment from './Comment';
import LikeButton from './LikeButton';


class TweetContainer extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            value: '',
            statusList: [],// ['at home due to covid', 'studying harly']
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event =>{
        this.setState({value: event.target.value});
    };

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({statusList:[...this.state.statusList, this.state.value], value:''});
    };

    render() { 
        return (  
            <center>
                <h2>{this.props.status}</h2>
                <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Post</button>
                </form>
                {this.state.statusList.map((status, key) => (
                    <>
                        <Comment status={status} key={key}/>
                    </>
                ))}
                
            </center>
        );
    }
}
 
export default TweetContainer;