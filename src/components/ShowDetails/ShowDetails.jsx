import { useLoaderData } from "react-router-dom";


const ShowDetails = () => {
    const post = useLoaderData();
    const {id,title} = post;
    return (
        <div>
            <h2>Post Details About :{id}</h2>
            <p>Title : {title}</p>
        </div>
    );
};

export default ShowDetails;