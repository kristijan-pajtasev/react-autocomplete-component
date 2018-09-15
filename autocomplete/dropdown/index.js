import React, { PureComponent } from 'react';

class Dropdown extends PureComponent {
    getOptions(data, selectedIndex) {
        const total = data.length;
        return data
            .map((o, i) => (
                <li key={`autocomplete-option-${i}`} onClick={this.setSelected.bind(this, o)}>
                    {o.label} {selectedIndex % total === i ? 'selected' : ''}
                </li>
            ))
    }

    setSelected(option) {
        this.props.setSelected(option);
    }

    render() {
        const { isOpen, options, selectedItemIndex } = this.props;
        if(!isOpen) return null;

        return (
            <ul className="kp-autocomplete-dropdown">
                {this.getOptions(options, selectedItemIndex)}
            </ul>
        );
    }
}

export default Dropdown;