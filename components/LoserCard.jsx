export default function LoserCard () {

    return(
        <div className="modal">
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

