import { useLoaderData, useNavigate } from "react-router-dom";


const ShowDetails = () => {
    const post = useLoaderData();
    const {id,title} = post;
    const navigate = useNavigate();
    const handleGoBack = () =>{

        navigate(-1)
    }
    return (
        <div>
            <h2>Post Details About :{id}</h2>
            <p>Title : {title}</p>
            <button onClick={handleGoBack}>Go back </button>
        </div>
    );
};

export default ShowDetails;