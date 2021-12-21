import Header from "../components/Header";
import Footer from "../components/Footer";
import './pages.css';


function Team() {
    return(
        <div>
            <Header />
            <div class="parallax">
                <h1>Meet the Team</h1>
                <div>
                    <h2>Get to know us!</h2>
                    <p>We are all Rice undergraduate students from across the residential colleges. Feel free to email any of us with any questions or just to talk! We’re excited to get to know all of you.</p>
                    <button>Join Us!</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Team;