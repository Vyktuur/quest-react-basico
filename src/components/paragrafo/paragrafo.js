import React from "react";
import './paragrafo.css';

class Paragrafo extends React.Component {
    render() {
        const { color, uppercase } = this.props;
        const estilo = { color: color, textTransform: uppercase ? 'uppercase' : 'none' };

        return (
            <p className='paragrafo' style={estilo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, mollis sed odio in, placerat sodales sapien. Proin nec egestas massa, sit amet malesuada tortor. Vestibulum vitae aliquet velit. Proin vitae nunc sem. 
            </p>
        );
    }
}

Paragrafo.defaultProps = {
    color: 'white',
    uppercase: false
};

export default Paragrafo;


