import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = (term) => {
        axios.get("https://api.unsplash.com/search/photos", {
            headers:{
                Authorization: "Client-ID 4P7VhUUcDazXLmmgATybCVGyh9rUoAYZGUfhLPuf7vU"
            },
            params: {
                query: term,
            },
        }).then(result => {
            this.setState({images: result.data.results });
        });
    };

    render () {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
};

export default App;