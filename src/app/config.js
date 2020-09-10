import React from "react";
import { Storage } from "utils";
import {
  HomeOutlined,
  BuildOutlined,
  LogoutOutlined,
  WechatOutlined
} from "@ant-design/icons";

const config = [
  {
    name: "Trang Chủ",
    icon: <HomeOutlined />,
    url: "/",
    nested: false
  },
  {
    name: "Từ Vựng",
    icon: <BuildOutlined />,
    url: "/vocabulary",
    nested: false
  },
  {
    name: "Nhóm Chat",
    icon: <WechatOutlined />,
    url: "/chat",
    nested: false
  },
  {
    name: "Đăng Xuất",
    nested: false,
    onClick: async function() {
      await Storage.reset();

      await localStorage.clear();
    },
    url: "/",
    icon: <LogoutOutlined />
  }
];

export default config;
