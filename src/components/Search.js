import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";


class Search extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container subheader">
                <form onSubmit={this.handleSubmit}>
                <FontAwesomeIcon icon={faSearch}/>
                
                <input type='text' placeholder="Search.." name="search"
                value={this.state.text} onChange={this.handleChange}/>
                <input type='submit'/>
                </form>
            </div>
         );
    }
}
 
export default Search;