import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" style={{
            width: "120px",
            height: "31px",
            margin: "16px 24px 16px 0",
            background: "rgba(255, 255, 255, 0.2)",
            float: "left"
          }} />
          {/* <div className="logo">
            <img style={{ margin: "16px 24px 16px 0", float: "left" }} alt="" src="#" />
          </div> */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            {this.props.isAuthenticated ? (
              <Menu.Item key="1" onClick={this.props.logout}>
                Odjava
              </Menu.Item>
            ) : (
                <Menu.Item key="1">
                  <Link to="/login">Prijava</Link>
                </Menu.Item>
              )}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          {this.props.isAuthenticated ? (
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <Link to="/">Početna</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/profile/${this.props.userId}`}>Profil</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/assignments/">Zadatci</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          ) : (
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>
                  <Link to="/">Početna</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
            )}
          <div style={{ background: "#fff", padding: 24, minHeight: 480 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Izradu ove aplikacije sufinancirala je Europska unija iz Europskog socijalnog fonda
          <br></br>
          Sadržaj ove aplikacije isključiva je odgovornost Pomorske škole Split
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
