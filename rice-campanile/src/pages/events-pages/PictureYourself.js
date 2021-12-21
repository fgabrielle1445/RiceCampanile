import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../pages.css';

function PictureYourself() {
    return(
        <div>
            <Header />
            <div class="parallax">
                <div>
                    <h1>Picture Yourself</h1>
                    <h4>Image Carousel</h4>
                    <p>Do you want to capture a fun moment with all your friends? Do you want to be featured in the yearbook? Then you might be interested in participating in Picture Yourself! Every year, we reserve a section of the book for pictures from Picture Yourself so that all undergraduates can be featured and have some fun taking pictures.</p>
                    <p>Upcoming Picture Yourself Dates:</p>
                    <p>     Check back next semester!</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PictureYourself;