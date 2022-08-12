import React from 'react';
import './style.scss';

const CalcButton = (props) => {
    return (
        <button id="calcBtn" style={props.style} onClick={props.onClick}>
            {props.btnText}
        </button>
    );
};
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="container">
                <div id="display">
                    <h3 id="log">456123</h3>
                    <h3 id="initial">123</h3>
                </div>
                <CalcButton
                    style={{
                        width: 150,
                        backgroundColor: 'rgb(173, 0, 0)',
                    }}
                    btnText="AC"
                />
                <CalcButton
                    btnText="/"
                    style={{
                        backgroundColor: 'gray',
                    }}
                />
                <CalcButton
                    btnText="X"
                    style={{
                        backgroundColor: 'gray',
                    }}
                />
                <CalcButton btnText="7" />
                <CalcButton btnText="8" />
                <CalcButton btnText="9" />
                <CalcButton
                    btnText="-"
                    style={{
                        backgroundColor: 'gray',
                    }}
                />
                <CalcButton btnText="4" />
                <CalcButton btnText="5" />
                <CalcButton btnText="6" />
                <CalcButton
                    btnText="+"
                    style={{
                        backgroundColor: 'gray',
                    }}
                />
                <CalcButton btnText="1" />
                <CalcButton btnText="2" />
                <CalcButton btnText="3" />
                <CalcButton
                    btnText="="
                    style={{
                        float: 'right',
                        height: 150,
                        backgroundColor: 'rgb(34, 86, 134)',
                    }}
                />
                <CalcButton
                    btnText="0"
                    style={{
                        width: 150,
                    }}
                />
                <CalcButton btnText="." />
            </div>
        );
    }
}

export default App;
