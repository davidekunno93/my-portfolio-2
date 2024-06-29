import { useContext } from "react"
import "./messagesentoverlay.css"
import { DataContext } from "../../context/DataProvider"
import { Fade, Slide } from "react-awesome-reveal"

type MSOProps = {
    open: boolean
    userName: string
    onClose: Function
}

const MessageSentOverlay = ({ open, userName, onClose }: MSOProps) => {
    if (!open) return null;
    const { textFunctions } = useContext(DataContext);

    return (
        <div className="overlay-placeholder">
            <Fade delay={200} triggerOnce>
                <div className="overlay">
                    <Slide direction="up" duration={500} className="flx w-100" triggerOnce>
                        <div className="message-sent-modal">
                            <p className="white-text">Hi <span className="lightgreen-text">{textFunctions.titalize(userName.split(" ")[0])}</span>, thanks for sending a message! <br />Click below to return back to the portfolio page 😄</p>
                            <button onClick={() => onClose()} className="btn-primary m-auto">Back to page</button>
                        </div>
                    </Slide>
                </div>
            </Fade>
        </div>
    )
}
export default MessageSentOverlay;