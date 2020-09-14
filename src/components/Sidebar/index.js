import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Logo, SiderWrapper } from "./styled";
import Config from "app/config";

const Sidebar = props => {
  const { history } = props;

  const [select, setSelect] = useState(null);

  const handeClickMenuItem = async item => {
    if (item.onClick) await item.onClick();

    if (item.url) history.push(item.url);
  };

  const onSelected = () => {
    if (history.location.pathname) {
      const selected = Config.findIndex(
        item => item.url === history.location.pathname
      );
      setSelect(`${selected}`);
    }
  };

  useEffect(onSelected, [history.location.pathname]);

  const renderMenuItem = () => {
    return Config.map((item, key) => {
      return (
        <Menu.Item
          key={key}
          onClick={() => handeClickMenuItem(item)}
          icon={item.icon}
        >
          {item.name}
        </Menu.Item>
      );
    });
  };
  return (
    <SiderWrapper
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Logo />
      <Menu theme="dark" mode="inline" selectedKeys={[`${select}`]}>
        {renderMenuItem()}
      </Menu>
    </SiderWrapper>
  );
};
export default Sidebar;
