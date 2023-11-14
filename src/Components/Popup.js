import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div onClick={() => props.setTrigger(false)} className="overlay"></div>
            <div className='popup-content'>
                <button className='close-popup' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
