import { Link } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {id,title,body} = post;
    return (
        <div className='box'>
            <p>ID : {id}</p>
            <h5>Title : {title}</h5>
            <h6>Body : {body}</h6>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Post;