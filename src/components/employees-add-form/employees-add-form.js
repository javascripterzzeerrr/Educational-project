import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cost: 0,
        }
    }

    OnValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.name, this.state.cost);
        this.setState({
            name: '',
            cost: 0,
        })
    }

    render() {
        const {name, cost} = this.state;
        const { addItem } = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           onChange={this.OnValueChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           name="cost"
                           value={cost}
                           onChange={this.OnValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">
                            Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;