import Cover from "../components/cover";
import Footer from "../components/footer";
import Contact from "../components/form";
import Navbar from "../components/navbaar";

function Home() {
    return (
        <div>
            <Navbar />
            <Cover />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;