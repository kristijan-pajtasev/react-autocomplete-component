import React, { PureComponent } from 'react';
import Dropdown from './dropdown';

class Autocomplete extends  PureComponent {
    constructor(props) {
        super(props);
        this.state = { filter: "", selectedLabel: "", isOpen: false };
    }

    onTextChange(ev) {
        const filter = ev.target.value;
        this.setState({ filter });
    }

    setSelected(option) {
        this.setState({ filter: option.label });
        this.props.onSelect( option.key );
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
        // console.log(ev.keyCode)
        // 38 up
        // 40 down
    }

    render() {
        const { data, placeholder } = this.props;
        const { filter, isOpen } = this.state;
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
                <Dropdown isOpen={isOpen} options={options} setSelected={this.setSelected.bind(this)} />
            </div>
        )
    }
}

export default Autocomplete;