/**
 * Created by xuemingli on 16/5/25.
 */
import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import {autobind} from 'core-decorators'
import { encode } from 'querystring';
import Store from '@comynli/store';
import * as Notification from '../actions/notification';
import * as settings from './settings';

@connect(state => ({auth: state.auth, router: state.router}),
  {pushState, notify: Notification.add})
export default class Authenticated extends React.Component {
  static propTypes = {
    router: React.PropTypes.object.isRequired,
    auth: React.PropTypes.object.isRequired,
    pushState: React.PropTypes.func.isRequired,
    children: React.PropTypes.node.isRequired,
    notify: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.loginUrl = settings.LOGIN_URL;
    if (typeof this.loginUrl === 'function') {
      this.loginUrl = this.loginUrl();
    }
    this.forbiddenAction = settings.FORBIDDEN_ACTION;
    if (typeof this.forbiddenAction === 'function') {
      this.forbiddenAction = this.forbiddenAction(this.props.auth.account);
    }

    this.state = {checked: true, sendNotify: true}
  }

  @autobind
  checkAuth() {
    const token = Store.get(settings.TOKEN_KEY || 'token');
    if (!token || !this.props.auth.isAuthenticated) {
      if (this.state.sendNotify) {
        this.setState({sendNotify: false});
        this.props.notify(Notification.ERROR, settings.UNAUTHORIZED_MESSAGE, {
          onRemove: () => this.props.pushState(null, '/r', {location: this.loginUrl, delay: 0}),
          action: {
            label: '登录',
            callback: () => this.props.pushState(null, '/r', {location: this.loginUrl, delay: 0})
          }
        });
      }
      return false;
    }
    return true;
  }

  @autobind
  checkPermissions() {
    if (this.props.auth.forbidden) {
      if (this.state.sendNotify) {
        this.setState({sendNotify: false});
        this.props.notify(Notification.ERROR, settings.FORBIDDEN_MESSAGE, {
          onRemove: () => this.props.pushState(null, '/r', {location: this.forbiddenAction.redirect, delay: 0}),
          action: {
            label: forbiddenAction.label,
            callback: () => this.props.pushState(null, 'r', {location: this.forbiddenAction.redirect, delay: 0})
          }
        });
      }
      return false;
    }
    return true;
  }

  componentWillReceiveProps(props) {
    this.props = props;
    const router = this.props.router;
    if (router.location.query._token) {
      this.setState({sendNotify: true});
      Store.set(settings.TOKEN_KEY, router.location.query._token, 0);
      delete router.location.query._token;
      this.props.pushState(null, '/r', {location: `${router.location.pathname}?${encode(router.location.query)}`, delay: 0});
    }
    this.setState({checked: this.checkAuth() && this.checkPermissions()});

  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
