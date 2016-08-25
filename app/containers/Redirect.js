/**
 * Created by xuemingli on 16/5/25.
 */
import React from 'react';
import { connect } from 'react-redux';
import WindowRedirect from 'react-redirect';


@connect(state => {
  return {router: state.router};
})
export default class Redirect extends React.Component {
  constructor(props) {
    super(props);
    const { message, delay } = this.props.router.location.query;
    this.location = this.props.router.location.query.location;
    this.state = { message, delay };
  }

  componentWillMount() {
    window.setTimeout(() => {
      this.setState({location: this.location});
    }, this.state.delay || 0);
  }


  render() {
    return <WindowRedirect location={this.state.location || ''}>
      <div>
        {this.state.message}
      </div>
    </WindowRedirect>
  }
}
