import React, { Component } from "react";
import Toolbar from "../../../Components/Toolbar/Toolbar";
import Aux from "../Auxilary";
import SideDrawer from "../../../Components/Sidedrawer/Sidedrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  SidedrawercloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  SidedrawertoggleopenHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <div>
        <Aux>
          <Toolbar clicked={this.SidedrawertoggleopenHandler} />
          <SideDrawer
            show={this.state.showSideDrawer}
            clicked={this.SidedrawercloseHandler}
          />
          <main>{this.props.children}</main>
        </Aux>
      </div>
    );
  }
}

export default Layout;
