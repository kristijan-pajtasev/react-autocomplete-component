import React, { PureComponent } from 'react';

class Autocomplete extends  PureComponent {
    constructor(props) {
        super(props);
        this.state = { filter: "" };
    }

    onTextChange(ev) {
        const filter = ev.target.value;
        this.setState({ filter });
    }

    getOptions(data, filter) {
        return data
            .filter(o => o.label.indexOf(filter) >= 0)
            .map((o, i) => (
                <li key={`autocomplete-option-${i}`}>{o.label}</li>
            ))
    }

    render() {
        const { data } = this.props;
        const { filter } = this.state;

        return (
            <div>
                <input onChange={this.onTextChange.bind(this)} type="text" />
                <ul>
                    {this.getOptions(data, filter)}
                </ul>
            </div>
        )
    }
}

export default Autocomplete;