import React, { Component } from 'react';

class Filter extends Component {
    handleInputFilter = e => {
        const filterValue = e.currentTarget.value;
        this.props.onFilter(filterValue)
    }

    render () {
        return (
            <label>
                Find contacts by name
                <input onChange={this.handleInputFilter}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>
            </label>
        )
        }
    }


export default Filter;