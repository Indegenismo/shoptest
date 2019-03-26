import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props, state){
		super(props,state);
    }



render() {
    return (
       <div> Hi</div>
    );
}
}
ReactDOM.render(<App/>, document.getElementById('root'));