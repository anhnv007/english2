import React from "react";
import { Card as AntCard } from "antd";
import { CardTitle, CardIcon } from "./styled";
const Card = ({ title, icon, children, onClick }) => {
  const renderTitle = () => {
    return <CardTitle>{title}</CardTitle>;
  };
  const renderExtra = () => {
    return <CardIcon>{icon}</CardIcon>;
  };
  return (
    <AntCard
      title={renderTitle()}
      hoverable={true}
      extra={renderExtra()}
      bordered={false}
    >
      {children}
    </AntCard>
  );
};

export default Card;
