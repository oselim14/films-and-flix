import {Link} from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return(
        <main>
            <Link to="/" className="Title"><img src="https://i.imgur.com/X8Ywuz6.png" alt="logo" height="50px"/></Link>
            <h5>2021</h5>
        </main>
    )
}