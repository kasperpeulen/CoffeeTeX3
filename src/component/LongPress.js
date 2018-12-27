import React, { cloneElement, Component } from 'react';

class LongPress extends Component {
  static defaultProps = {
    timeout: 500,
    onLongPress: (_) => null,
  };

  constructor(props) {
    super(props);
    this.timeoutId = null;
  }

  render() {
    return (
      <>
        {cloneElement(this.props.children, {
          onKeyDown: e => this.onKeyDown(e),
          onKeyUp: _ => this.onKeyUp()
        })}
      </>
    );
  }

  onKeyDown(e) {
    // this is needed because event is used async
    e.persist();
    if (this.timeoutId == null) {
      this.timeoutId = setTimeout(() => {
        this.props.onLongPress(e);
      }, this.props.timeout);
    }
  }

  onKeyUp() {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  }
}

export default LongPress;
