// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"

const styles= {
    button: {
        border: "black",
        borderWidth: "500px"
    }
};

const Footer = () => {
  return (
    <footer className="flex items-end justify-items-center">
        <div>
            <img
               src="images/logo.png"
               className="logo flex place-items-center justify-start mt-0 pt-2"
               alt="psychquiconsult-logo"
            ></img>
        </div>
       <span className="sources px-4">
        Sources
        <ul>
            <li>NIH</li>
        </ul>
       </span>
    
      <ul className="footer-list px-8">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>DASHBOARD</li>
      </ul>
    <Button styles={styles.button}>Contact Us!</Button>
    </footer>
  );
};

export default Footer;
