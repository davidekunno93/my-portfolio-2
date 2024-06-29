import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <p>Send me a message. Let's connect on <Link to='https://www.linkedin.com/in/david-ekunno-794619a3/' target="_blank" className="text-link-green">LinkedIn!</Link></p>
        <div className="github-link">
            <button className="btn-secondary small">View Portfolio Code</button>
            <p className="gray-text">Built with TypeScript</p>
        </div>
    </div>
  )
}
export default Footer;