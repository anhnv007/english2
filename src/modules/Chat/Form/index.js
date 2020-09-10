import React, { useRef, useEffect } from "react";
import { SendOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Wrapper, FormWrapper } from "./styled";
import moment from "moment";
import { withReducer } from "hocs";
import chatReducer from "../reducer";
import { orNull, orBoolean } from "utils/Selector";
const FormMessage = ({ user, state, dispatch, action }) => {
  const [form] = FormWrapper.useForm();
  const messageInput = useRef(null);

  const onFinish = values => {
    const date_chat = moment(new Date()).format("HH:mm DD/MM/YYYY");
    action.chatR.onAddMessage(
      {
        user: user,
        date_time: date_chat,
        message: values.message
      },
      dispatch.chatR
    );
    form.resetFields();
    onfocusInput();
  };

  const onfocusInput = () => {
    if (messageInput.current) {
      messageInput.current.focus();
    }
  };

  useEffect(onfocusInput, []);
  return (
    <Wrapper>
      <FormWrapper
        form={form}
        name="form_message"
        layout="inline"
        onFinish={onFinish}
      >
        <FormWrapper.Item name="message" style={{ width: "100%" }}>
          <Input
            ref={messageInput}
            suffix={<SendOutlined />}
            placeholder="Nhập tin nhắn ...."
          />
        </FormWrapper.Item>
      </FormWrapper>
    </Wrapper>
  );
};
export default withReducer({
  key: "chatR",
  ...chatReducer
})(FormMessage);
