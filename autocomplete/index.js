import React, { PureComponent } from 'react';

class Autocomplete extends  PureComponent {
    constructor(props) {
        super(props);
        this.state = { filter: "", selectedLabel: "", isOpen: false };
    }

    onTextChange(ev) {
        const filter = ev.target.value;
        this.setState({ filter });
    }

    setSelected(filter) {
        this.setState({ filter: filter.label });
        this.props.onSelect( filter.key );
    }

    getOptions(data, filter) {
        return data
            .filter(o => o.label.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
            .map((o, i) => (
                <li key={`autocomplete-option-${i}`} onClick={this.setSelected.bind(this, o)}>{o.label}</li>
            ))
    }

    openDropdown() {
        this.setState({ isOpen: true });
    }

    closeDropdown() {
        this.timeout =  setTimeout(() => { this.setState({ isOpen: false }) }, 200);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        const { data } = this.props;
        const { filter, isOpen } = this.state;

        return (
            <div>
                <input onFocus={this.openDropdown.bind(this)}
                       onBlur={this.closeDropdown.bind(this)}
                       value={filter}
                       onChange={this.onTextChange.bind(this)}
                       type="text" />
                {isOpen ? (
                    <ul>
                    {this.getOptions(data, filter)}
                    </ul>
                ) : ""}
            </div>
        )
    }
}

export default Autocomplete;