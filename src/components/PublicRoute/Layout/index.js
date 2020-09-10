import React from "react";
import { Layout as AntLayout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Sidebar, Header } from "components";
const { Content, Footer, Sider } = AntLayout;
import { Logo } from "./styled";

const Layout = props => {
  const { children } = props;
  return (
    <AntLayout style={{ maxHeight: "100vh" }}>
      <Sidebar {...props} />
      <AntLayout>
        <Header {...props} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
      </AntLayout>
    </AntLayout>
  );
};
export default Layout;
