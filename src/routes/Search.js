import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            {location.search} <br />
            {new URLSearchParams(location.search).get('keyword')} <br />
            검색
        </div>
    );
};

export default Search;