import { useEffect, useState } from "react";
import Hedaing from "../components/Hedaing";
import { getAllFavourites, removeFavourite } from "../utils";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  console.log(location)

  const [coffees,setCoffees] = useState([]);
  useEffect(()=>{
      const favourites = getAllFavourites();
      setCoffees(favourites)
  },[])

  const handleRemove=(id)=>{
    removeFavourite(id)
    const favourites = getAllFavourites();
    setCoffees(favourites)
  }

  return <div>
    
    <Hedaing
        title='Welcome to Dashboard'
        subtitle='Manage coffees that you have previously added as favorite. You can view or remove them from here.'
      />


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} handleRemove={handleRemove}></Card>
      ))}
    </div>
  </div>;
};

export default Dashboard;
