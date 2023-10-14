import React from 'react';

class LikeButton extends React.Component {
    constructor (props){
        super(props);
        this.state = {countLikes: 0};
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick = event =>{
        event.preventDefault();
        this.setState({countLikes: ++this.state.countLikes});
    };

    render() { 
        return ( 
            <span>
                <button onClick={this.handleOnClick}>Like</button>
                <label> {this.state.countLikes} Likes </label>
            </span>
         );
    }
}
export default LikeButton;