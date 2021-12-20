import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
import Sidebar from "./sidebar/Sidebar";

import {
  changeThemeToDark,
  changeThemeToLight,
} from "../../redux/actions/themeActions";
import {
  changeMobileSidebarVisibility,
  changeSidebarVisibility,
} from "../../redux/actions/sidebarActions";
import { SidebarProps } from "../../shared/prop-types/ReducerProps";
import DialogBox from "./sidebar/DialogBox";

class Layout extends Component {
  state = {
    showDialog: false,
  };
  setShowDialog = (showDialog) => {
    this.setState({ showDialog: showDialog });
  };
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebar: SidebarProps.isRequired,
  };

  changeSidebarVisibility = () => {
    const { dispatch } = this.props;
    dispatch(changeSidebarVisibility());
  };

  changeMobileSidebarVisibility = () => {
    const { dispatch } = this.props;
    dispatch(changeMobileSidebarVisibility());
  };

  changeToDark = () => {
    const { dispatch } = this.props;
    dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    const { dispatch } = this.props;
    dispatch(changeThemeToLight());
  };

  render() {
    const { sidebar } = this.props;
    const { showDialog } = this.state;

    const layoutClass = classNames({
      layout: true,
      "layout--collapse": sidebar.collapse,
    });

    return (
      <div className={layoutClass}>
        <Sidebar
          showDialog={showDialog}
          setShowDialog={this.setShowDialog}
          sidebar={sidebar}
          changeToDark={this.changeToDark}
          changeToLight={this.changeToLight}
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
        />
        <DialogBox showDialog={showDialog} setShowDialog={this.setShowDialog} />
      </div>
    );
  }
}

export default withRouter(
  connect((state) => ({
    sidebar: state.sidebar,
  }))(Layout)
);
