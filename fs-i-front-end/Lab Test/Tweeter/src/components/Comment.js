import React from 'react';
import Timer from './Timer';
import LikeButton from './LikeButton';

class Comment extends React.Component {
    
    render() { 
        return (
            <div>
                <Timer/> 
                <strong> {this.props.status} </strong>
                <LikeButton/>
            </div>
        );
    }
}
 
export default Comment;