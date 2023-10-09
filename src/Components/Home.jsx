import Banner from "./Banner";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Services from "./Services";
import Stats from "./Stats";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
           <Services></Services>
           <hr />
           <FAQ></FAQ>
           <Footer></Footer>
        </div>
    );
};

export default Home;