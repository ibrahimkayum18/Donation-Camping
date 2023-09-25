import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!</h2>
            <p>Page Not Found</p>
            <Link to={'/'}>
            <button className="btn">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;