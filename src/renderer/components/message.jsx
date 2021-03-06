import React, { Component, PropTypes } from 'react';

export default class Message extends Component {
  static propTypes = {
    closeable: PropTypes.bool,
    type: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
  }

  onClose() {
    $(this.refs.message).transition('fade');
  }

  render() {
    const { closeable, title, message, type } = this.props;
    return (
      <div ref="message" className={`ui message ${type}`}>
        {
          closeable && <i className="close icon" onClick={::this.onClose}></i>
        }
        {
          title && <div className="header">{title}</div>
        }
        {
          message && <p>{message}</p>
        }
      </div>
    );
  }
}
