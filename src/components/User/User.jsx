
import { Link } from 'react-router-dom';
import './user.css'
const User = ({user}) => {
    const {id,name,email,phone} = user ;
    return (
        <div className="box">
            <h5>Name : {name}</h5>
            <h6>Email : {email}</h6>
            <h3>Phone : {phone}</h3>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;