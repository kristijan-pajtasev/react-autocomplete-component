import React, { PureComponent } from 'react';

class Autocomplete extends  PureComponent {
    constructor(props) {
        super(props);
        this.state = { filter: "", selectedLabel: "" };
    }

    onTextChange(ev) {
        const filter = ev.target.value;
        this.setState({ filter });
    }

    setSelected(filter) {
        this.setState({ filter: filter.label })
    }

    getOptions(data, filter) {
        return data
            .filter(o => o.label.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
            .map((o, i) => (
                <li key={`autocomplete-option-${i}`} onClick={this.setSelected.bind(this, o)}>{o.label}</li>
            ))
    }

    render() {
        const { data } = this.props;
        const { filter } = this.state;

        return (
            <div>
                <input value={filter} onChange={this.onTextChange.bind(this)} type="text" />
                <ul>
                    {this.getOptions(data, filter)}
                </ul>
            </div>
        )
    }
}

export default Autocomplete;