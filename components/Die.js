import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#e7e7e7"
    }
    let pips = Number.isInteger(props.value)
		? Array(props.value)
				.fill(0)
				.map((_, i) => <span className="pip" key={i}/>)
		: null;
    return (
        <div className="die-container" onClick={props.holdDice}>
            <div style={styles} className="face">{pips}</div>
        </div>
    )
}
