import React, {useState} from 'react';

const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType ] = useState('all');

    const handleKey = (event) => {
        if (search === '') {
            return
        }
        if (event.key === 'Enter') {
            searchMovies(search, type)
        }
    }

    const handleButton = () => {
        if (search === '') {
            return
        } else (
            searchMovies(search, type)
        )
    };

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        if (search === '') {
            searchMovies('matrix', event.target.dataset.type);
        } else {
            searchMovies(search, event.target.dataset.type)
        }
            
    };

    


    return (
        <div className="row">
            <input
                placeholder="Search any movies or series"
                type="email"
                className="validate"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
            />
            <button className="btn search-btn" onClick={handleButton}>Search</button>
            <div>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="all" onChange={handleFilter} checked={type === 'all'} />
                    <span>All</span>
                </label>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="movie" onChange={handleFilter} checked={type === 'movie'} />
                    <span>Movies only</span>
                </label>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="series" onChange={handleFilter} checked={type === 'series'} />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    )
}

export {Search}