import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='box'>
            <p>ID : {id}</p>
            <h5>Title : {title}</h5>
            <h6>Body : {body}</h6>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleClick}>Click me </button>
        </div>
    );
};

export default Post;