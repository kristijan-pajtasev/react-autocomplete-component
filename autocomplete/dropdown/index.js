import React, { PureComponent } from 'react';

class Dropdown extends PureComponent {
    getOptions(data) {
        return data
            .map((o, i) => (
                <li key={`autocomplete-option-${i}`} onClick={this.setSelected.bind(this, o)}>{o.label}</li>
            ))
    }

    setSelected(option) {
        this.props.setSelected(option);
    }

    render() {
        const { isOpen, options } = this.props;
        if(!isOpen) return null;

        return (
            <ul className="kp-autocomplete-dropdown">
                {this.getOptions(options)}
            </ul>
        );
    }
}

export default Dropdown;