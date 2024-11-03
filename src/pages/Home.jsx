import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Hedaing from "../components/Hedaing";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories)
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Hedaing
        title="Browse Coffees by Category"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      />
      {/* Category tab section */}
      <Categories categories={categories}></Categories>

  

      {/* Dynamic nested section */}
    </div>
  );
};

export default Home;
