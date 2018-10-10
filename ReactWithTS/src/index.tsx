import * as React from "react";
import * as ReactDOM from "react-dom";
import Donut from './components/Donut';

ReactDOM.render(
    <Donut matched="98" unmatched="62"/>,
    document.getElementById("example")
);