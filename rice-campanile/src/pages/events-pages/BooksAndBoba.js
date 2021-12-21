import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../pages.css';

function BooksAndBoba() {
    return(
        <div>
            <Header />
            <div class="parallax">
                <div>
                    <h4>Boba picture</h4>
                    <p>Starting last year, The Campanile also hosted distribution events where we give out the year’s book, have people fill out surveys to get featured in the book, and serve boba! Stay tuned for updates on our next Boba and Books event.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BooksAndBoba;