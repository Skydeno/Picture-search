import React from "react";

class SearchBar extends React.Component {
    state = {term: "" };

    onInputChange = (event) => {
        this.setState({term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render () {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Wpisz czego szukasz</label>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;