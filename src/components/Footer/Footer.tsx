import { Link } from "react-router-dom";
import "./footer.css"
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const Footer = () => {
  const { mobileMode } = useContext(DataContext);

  return (
    <div className="footer" data-mobileMode={mobileMode ? "true" : "false"}>
        <p>Send me a message. Let's connect on <Link to='https://www.linkedin.com/in/david-ekunno-794619a3/' target="_blank" className="text-link-green">LinkedIn!</Link></p>
        <div className="github-link">
            <Link to='https://github.com/davidekunno93/my-portfolio-2.git' target="_blank"><button className="btn-secondary small">View Portfolio Code</button></Link>
            <p className="gray-text">Built with TypeScript</p>
        </div>
    </div>
  )
}
export default Footer;