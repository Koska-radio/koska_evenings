import "./App.css";
import Footer from "./Footer";
import ArtistInfo from "./ArtistInfo";
import MainLayout from "./MainLayout";

function Home() {
  return(
    <div>
      <MainLayout />
      <ArtistInfo />
      <Footer />
    </div>
  );
}

export default Home;