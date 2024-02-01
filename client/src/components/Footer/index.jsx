// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap"

const styles= {
    footer: {
      background: "#C49A6C"
    },
    button: {
        borderColor: "#FFEED3",
        borderWidth: "5px"
    }
};

const Footer = () => {
  return (
    <footer className="flex items-end justify-items-center py-4" style={styles.footer}>
        <div>
            <img
               src="images/logo.png"
               className="logo flex place-items-center justify-start mt-0 pt-2"
               alt="psychquiconsult-logo"
            ></img>
        </div>
        <div>
          
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
   <button className="bg-transparent border-solid text-black-700 font-semibold py-2 px-4 hover:border-transparent rounded contact-button" style={styles.button}>
Contact Us!
</button>

<span className="ml-3">&copy;2024 PsychQuiConsult LLC. </span>
    </footer>
  );
};

export default Footer;
