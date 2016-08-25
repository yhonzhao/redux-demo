/**
 * Created by yhon on 16/8/13.
 */
import React from "react";
import {connect} from "react-redux";
import * as UserAction from "../actions/user";
import {Button} from "antd"


@connect(state=>({
  userInfo: state.userinfo
}),{getUser:UserAction.get})
export default class Demo extends React.Component{
    constructor(props){
    super(props);
      this.props.getUser("yonghong.zhao@ele.me");
    }

    render()
    {
        const user = this.props.userInfo.status.success? this.props.userInfo.res : '';
        return(
          <div>
            <div> fdfdsfsd {user.name}</div>
          <div>

          <Button type="primary" >heheh</Button>
    </div></div>

    );
    }
}
