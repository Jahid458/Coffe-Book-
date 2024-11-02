import Banner from "../components/Banner";
import Hedaing from "../components/Hedaing";

const Home = () => {
  return <div>
    {/* Banner */}
    <Banner />
    {/* Heading */}
    <Hedaing  title='Browse Coffees by Category'
        subtitle='Choose your desired coffee category to browse through specific coffees that fit in your taste.'  />
    {/* Category tab section */}
    {/* Dynamic nested section */}

  </div>;
};

export default Home;
