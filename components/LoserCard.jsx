import {useState} from "react"

export default function LoserCard () {
   const [isHidden, setIsHidden] = useState(false)
    
    function hideMe(){
        setIsHidden(prev => !prev)        
    }

    return(
        <div style={{display: isHidden ? 'none' : 'inline' }} className="modal">
			<div className="close-modal-btn-container">
				<button onClick={hideMe} className="modal-close-btn" >X</button>
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

