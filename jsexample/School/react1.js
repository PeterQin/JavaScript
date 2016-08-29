
var input = React.DOM.input;

var TodoText = React.createClass({
	render:function(){
		return (input());
	}
});

ReactDOM.render(React.createElement(TodoText), document.querySelector('#container'));