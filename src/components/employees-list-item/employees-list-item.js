import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const {name, cost, onDelete, onToggleProp, increase, like} = props;

    let classList = "list-group-item d-flex justify-content-between";

    if (increase) {
        classList += ' increase'
    }

    if (like) classList += ' like';

    return (
        <li className={classList}>
            <span
                className="list-group-item-label"
                data-toggle="like"
                onClick={onToggleProp}>
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={cost + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;