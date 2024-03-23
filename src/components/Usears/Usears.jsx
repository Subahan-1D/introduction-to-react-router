
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Usears.css'

const Usears = () => {
    const usears = useLoaderData();
    console.log(usears)
    return (
        <div>
            <h2>Our Usears : {usears.length}</h2>
            <div className='usears'>
            {
                usears.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Usears;