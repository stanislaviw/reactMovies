import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',

    }

    handleKey = (event) => {
        if (this.state.search === '') {
            return
        }

        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleButton = () => {
        if (this.state.search === '') {
            return
        } else (
            this.props.searchMovies(this.state.search, this.state.type)
        )
    };

    handleFilter = (event) => {
        this.setState( () => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        });
    };


    render() {
        return (
            <div className="row">

                <input
                    placeholder="Search any movies or series"
                    type="email"
                    className="validate"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button className="btn search-btn" onClick={this.handleButton}>Search</button>
                <div>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'} />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'} />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'} />
                        <span>Series only</span>
                    </label>
                </div>
          </div>
        )
    }
}

export {Search}