# react-autocomplete-component

## Installation
```
npm install @kpajtasev/react-autocomplete-component
```

## Usage
```
import Autocomplete from ""@kpajtasev/react-autocomplete-component"

<Autocomplete data={[]}/>
```

## Props format

### Data
```
const data = [
    { key: 1, label: "Option 1" },
    ...
];
<Autocomplete data={data}/>
```

### onSelect
Function that triggers on select. Receives key as prop.
```
const data = [
    { key: 1, label: "Option 1" },
    ...
];
const onSelect = key => console.log(key);

<Autocomplete onSelect={key} data={data}/>
```
```

### placeholder
Placeholder for input to display when no value is selected
```
const data = [
    { key: 1, label: "Option 1" },
    ...
];
const placeholder = "Some placeholder";

<Autocomplete placeholder={placeholder} data={data}/>
```