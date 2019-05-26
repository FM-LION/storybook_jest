import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from './components/Button';

ReactDOM.render (
    <h1>
        Hello!
        <Button text={"props button"}/>
    </h1>,
    document.getElementById("root")
);
