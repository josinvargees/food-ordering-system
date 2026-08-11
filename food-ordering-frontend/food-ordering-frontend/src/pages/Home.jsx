import Navbar from "../components/Navbar";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

    

      <div className="container mt-5" id="menu">
        <h2 className="text-center mb-4">Popular Foods</h2>
        <FoodList />
      </div>

      <Footer />
    </>
  );
}

export default Home;