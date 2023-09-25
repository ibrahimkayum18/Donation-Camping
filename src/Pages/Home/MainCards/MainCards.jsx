import { useLoaderData } from "react-router-dom";
import MainCard from "../MainCard/MainCard";


const MainCards = () => {
    const donations = useLoaderData();
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {
                donations.map(donation => <MainCard 
                key={donation.id}
                donation={donation}
                ></MainCard>)
            }
        </div>
    );
};

export default MainCards;