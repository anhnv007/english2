import React from "react";
import { Modal, Button } from "antd";
import { Wrapper, FooterWrapper } from "./styled";
const ModalCustom = props => {
  const {
    children,
    width = 520,
    title,
    open,
    onSubmit,
    onCancel,
    isDefaultFooter = true
  } = props;
  return (
    <Modal
      title={title}
      centered
      visible={open}
      onOk={onSubmit}
      onCancel={onCancel}
      width={width}
      footer={
        isDefaultFooter ? (
          <FooterWrapper>
            <Button key="back" onClick={onCancel}>
              Hủy bỏ
            </Button>
            <Button key="submit" type="primary" onClick={onSubmit}>
              Xác Nhận
            </Button>
          </FooterWrapper>
        ) : null
      }
    >
      <Wrapper>{children}</Wrapper>
    </Modal>
  );
};
export default ModalCustom;
