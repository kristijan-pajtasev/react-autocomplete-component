import React, { PureComponent } from 'react';
import Dropdown from './dropdown';

class Autocomplete extends  PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            selectedLabel: "",
            isOpen: false,
            selectedItemIndex: undefined
        };
    }

    onTextChange(ev) {
        const filter = ev.target.value;
        this.setState({ filter });
    }

    setSelected(option) {
        if(option.key === this.state.selected && option.label === this.state.filter) {
            this.setState({ filter: option.label, selectedItemIndex: undefined });
        } else {
            this.setState({ filter: option.label, selectedItemIndex: undefined, selected: option.key});
            this.props.onSelect( option.key );
        }
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

    keyUp(ev) {
        const { selectedItemIndex } = this.state;
        switch (ev.keyCode) {
            case 38: // up key
                if(selectedItemIndex === undefined || selectedItemIndex === 0) this.setState({ selectedItemIndex: 0 });
                else this.setState({ selectedItemIndex: selectedItemIndex - 1 });
                break;
            case 40: // down key
                if(selectedItemIndex === undefined) this.setState({ selectedItemIndex: 0 });
                else this.setState({ selectedItemIndex: selectedItemIndex + 1 });
                break;
            case 13: // enter key
                break;
        }
    }

    render() {
        const { data, placeholder } = this.props;
        const { filter, isOpen, selectedItemIndex } = this.state;
        const options = data.filter(o => o.label.toLowerCase().indexOf(filter.toLowerCase()) >= 0);

        return (
            <div className="kp-autocomplete">
                <input className="kp-autocomplete-input"
                       onFocus={this.openDropdown.bind(this)}
                       onBlur={this.closeDropdown.bind(this)}
                       value={filter}
                       onKeyUp={this.keyUp.bind(this)}
                       placeholder={placeholder || ""}
                       onChange={this.onTextChange.bind(this)}
                       type="text" />
                <Dropdown selectedItemIndex={selectedItemIndex}
                          isOpen={isOpen}
                          options={options}
                          setSelected={this.setSelected.bind(this)} />
            </div>
        )
    }
}

export default Autocomplete;