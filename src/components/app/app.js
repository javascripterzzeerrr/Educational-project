import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', cost: 800, increase: true, like: false, id: 1},
                {name: 'Alex M.', cost: 3000, increase: false, like: true, id: 2},
                {name: 'Carl W.', cost: 5000, increase: false, like: false, id: 3},
            ],
            term: '',
            filter: 'all',
        }
        this.countData = this.state.data.length;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => id !== item.id)
            }
        });
    }

    addItem = (name, cost) => {
        if (name.trim() !== '' && cost.trim() !== '') {
            const newItem = {name, cost, increase: false, like: false, id: ++this.countData};

            this.setState(({data}) => {
                let newData = [...data, newItem];

                return {
                    data: newData
                }
            });
        } else {
            alert('Заполните все поля');
        }
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //
        //     return {
        //         data: newArr
        //     }
        // })

        this.setState(({data}) => ({
           data: data.map(item => {
               if (item.id === id) {
                   return {...item, [prop]: !item[prop]}
               }
               return item;
           })
        }));
    }

    countIncrease = () => {
        let cnt = 0;
        this.state.data.forEach((item) => {
            if (item.increase) {
                cnt++;
            }
        });

        return cnt;
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'all': {
                return items;
            }
            case 'increase': {
                return items.filter(item => {
                    return item.increase;
                });
            }
            case 'thousand': {
                return items.filter(item => {
                    return item.cost > 1000;
                })
            }

            default:
                return items;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    // метод, который отвечает за установление состояния
    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'thousand':
                return items.filter(item => item.cost > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
      const {data, term, filter} = this.state;
      let count = this.countIncrease();
      const visibleData = this.filterPost(this.searchEmp(data, term), filter);

      return (
          <div className="app">
              <AppInfo count={this.countData} increase={count} />

              <div className="search-panel">
                  <SearchPanel onUpateSearch={this.onUpdateSearch}/>
                  <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
              </div>

              <EmployeesList
                  data={visibleData}
                  onDelete={this.deleteItem}
                  onToggleProp={this.onToggleProp}
              />
              <EmployeesAddForm addItem={this.addItem}/>
          </div>
      );
  }

}

export default App;
