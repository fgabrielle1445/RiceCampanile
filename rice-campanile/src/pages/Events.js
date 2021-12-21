import Header from "../components/Header";
import Footer from "../components/Footer";
import './pages.css';


function Events() {
    return(
        <div>
            <Header />
            <div class="parallax">
            <div>
                <h1>Events</h1>
                <h4>Google calendar</h4>
                <h4>Instagram Feed</h4>
            </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default Events;