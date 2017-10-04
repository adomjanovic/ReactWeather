var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

class ErrorModal extends React.Component {
    propTypes () {
        title: React.PropTypes.string;
        message: React.PropTypes.string.isRequired;
    };
    getDefaultProps () {
        return {
            title: 'Error',
            message: 'No city found'
        };
    };
    componentDidMount () {
        var {title, message} = this.props;
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Okay</button>
                </p>
            </div>
        );
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    };
    render () {
        return (
            <div>
            </div>
        )
    };
}

module.exports = ErrorModal;
