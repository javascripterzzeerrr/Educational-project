import { Component } from 'react';
import "./Button.css";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            active: "btn btn-outline-light"
        }
    }

    checkActive = () => {
        if (this.props.active) {
            this.setState({
                active: "btn btn-light"
            });
        }
    }

    onChangeFilter = (event) => {
        let click = event.currentTarget.getAttribute('data-filter');

        this.setState({
            filter: click
        });

        this.props.onClick(this.state.filter);
        this.checkActive();
    }

    render() {
        return (
            <button
                type="button"
                className={this.state.active}
                data-filter={this.props.dataFilter}
                onClick={this.onChangeFilter}>
                {this.props.textContent}
            </button>
        )
    }
}

export default Button;