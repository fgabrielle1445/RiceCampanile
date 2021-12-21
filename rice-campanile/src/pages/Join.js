import Header from "../components/Header";
import Footer from "../components/Footer";
import './pages.css';


function Join() {

    return(
        <div>
            <Header />
            <div class="parallax">
            <div>
                <h1>Join Us!</h1>
            </div>
            <div>
                <p>Are you interested in writing, design, or photography? Then join the Campanile! As part of the team you’ll get the chance to:</p>

                <ul>
                    <li>Contribute your creativity to the book</li>  
                    <li>Be part of a welcoming community</li>  
                    <li>Get some free food and merch!</li>
                    <li>Develop your skills</li>
                    <li>Learn more about different people on campus</li>
                    <li>Make money! (staffers get paid for their work the following fall!)</li>
                    <li>Have fun,</li>
                    <li>and more!</li>
                </ul>
                
                <p>Sign up for our email list to get more information about how you can get involved, and you can contact us at jvp2@rice.edu with any questions.</p>
            </div>
            </div>
            <Footer />
        </div>
    );

}
export default Join;