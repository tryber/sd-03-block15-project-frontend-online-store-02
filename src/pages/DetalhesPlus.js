import React from 'react';

class DetalhesPlus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId,
            products: null,
            error: false,
            quant: 1,
        };

        this.onClickButtonPlus = this.onClickButtonPlus.bind(this);
        this.onClickButtonMinus = this.onClickButtonMinus.bind(this);
    }

    onClickButtonPlus() {
        this.setState((state) => ({ quant: state.quant + 1 }));
    }

    onClickButtonMinus() {
        if (this.quant > 1) this.setState((state) => ({ quant: state.quant - 1 }));
        else this.setState({ quant: quant })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButtonPlus}>+</button>
                <button onClick={this.onClickButtonMinus}>-</button>
            </div>
        );
    }
}

export default DetalhesPlus;
