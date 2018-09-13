import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from './autocomplete';

const data = [
    { key: 1, label: "Option 1" },
    { key: 2, label: "Option 2" },
    { key: 3, label: "Option 3" },
    { key: 4, label: "Option 4" }
];

ReactDOM.render(<Autocomplete data={data}/>, document.getElementById("react-container"));