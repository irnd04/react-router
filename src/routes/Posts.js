import React from 'react';
import { Route, Link} from 'react-router-dom';

// this.props.match
const Post = ({match}) => {
    return (
        <h2>{match.params.title}</h2>
    );
};

const Posts = () => {
    return (
        <div>
            <h1>포스트</h1>
            <div><Link to="/posts/react">React</Link></div>
            <div><Link to="/posts/redux">Redux</Link></div>
            <div><Link to="/posts/relay">Relay</Link></div>
            <Route path="/posts/:title"
                component={Post}
            />
        </div>
    );
};

export default Posts;