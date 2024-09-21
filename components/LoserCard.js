import React from "react"

export default function LoserCard (props) {
    const buttonRef = React.useRef(null);
    const [myDisplay, setMyDisplay] = React.useState("none")

  React.useEffect(() => {
    const handleClick = () => {
        setMyDisplay("none")
        props.setTimesup(false)
    }

    if (props.timesup & props.firstCardRender){
        setMyDisplay("inline")
        props.setFirstCardRender(false)
    }
    

    const buttonElement = buttonRef.current;
    buttonElement.addEventListener('click', handleClick)
  }, [props]);

    return(
        <div className="modal" style={{display: myDisplay}}>
			<div className="close-modal-btn-container">
				<button ref = { buttonRef } className="modal-close-btn" >X</button>
			</div>
            <div className="subModal">
                <div className="modal-inner">
                    <h3>Sorry, You Lose!!!</h3>	
                    <p>😢</p>	
                </div>
            </div>
			
		</div>
    )
}

