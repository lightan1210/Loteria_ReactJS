import React from "react";

import './Bolillero2.css';

class Bolillero extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: null,
        }
    }

    render() {

        return (
            <>
                <div className="ball">
                    <div className="texto">
                        {this.props.numero}
                    </div>
                </div>
            </>
        )
    }
}

export default Bolillero;