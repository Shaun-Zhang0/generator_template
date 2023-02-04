import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    //或者使用async/await 写成
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component,
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};
export default asyncComponent;
