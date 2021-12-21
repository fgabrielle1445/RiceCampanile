import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from '@mui/material/Button';
import './pages.css';

function Home() {

    return(
        <div>
            <Header />
            <div class="parallax">
                <div class ="home">
                    <div><p1>It's not just an urban legend.</p1></div>
                    <div><p2>It's in the Campanile.</p2></div>                   
                    <div><Button variant="contained" href="/about">About us</Button></div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}
 export default Home;