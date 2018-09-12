import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from './autocomplete';

const data = [
    { key: 1, label: "Option 1" },
    { key: 1, label: "Option 1" },
    { key: 1, label: "Option 1" },
    { key: 1, label: "Option 1" }
];

ReactDOM.render(<Autocomplete data={data}/>, document.getElementById("react-container"));