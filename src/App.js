import React from 'react';
import './style.scss';

const CalcButton = (props) => {
    return (
        <button
            id="calcBtn"
            style={props.style}
            onClick={props.onClick}
            data-btntext={props.btnText}
        >
            {props.btnText}
        </button>
    );
};
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNum: '0',
            log: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log('a', e.target.dataset.btntext);
        this.setState((state) => ({
            currentNum:
                state.currentNum === '0'
                    ? e.target.dataset.btntext
                    : state.currentNum + e.target.dataset.btntext,
        }));
    }

    render() {
        return (
            <div id="container">
                <div id="display">
                    <h3 id="log">{this.state.log}</h3>
                    <h3 id="currentNum">{this.state.currentNum}</h3>
                </div>
                <CalcButton
                    style={{
                        width: 150,
                        backgroundColor: 'rgb(173, 0, 0)',
                    }}
                    btnText="AC"
                    onClick={() => {
                        return this.setState({
                            currentNum: '0',
                            log: '',
                        });
                    }}
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
                <CalcButton btnText="7" onClick={this.handleClick} />
                <CalcButton btnText="8" onClick={this.handleClick} />
                <CalcButton btnText="9" onClick={this.handleClick} />
                <CalcButton
                    btnText="-"
                    style={{
                        backgroundColor: 'gray',
                    }}
                />
                <CalcButton btnText="4" onClick={this.handleClick} />
                <CalcButton btnText="5" onClick={this.handleClick} />
                <CalcButton btnText="6" onClick={this.handleClick} />
                <CalcButton
                    btnText="+"
                    style={{
                        backgroundColor: 'gray',
                    }}
                />
                <CalcButton btnText="1" onClick={this.handleClick} />
                <CalcButton btnText="2" onClick={this.handleClick} />
                <CalcButton btnText="3" onClick={this.handleClick} />
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
                    onClick={this.handleClick}
                />
                <CalcButton btnText="." />
            </div>
        );
    }
}

export default App;
