import React from "react";
import { Modal } from "components";
import { Form, Input, Button, Card, notification, Checkbox } from "antd";
import { orEmpty, orBoolean } from "utils/Selector";
const FormComponent = props => {
  const [form] = Form.useForm();
  const { title, open, onSubmit, onCancel, item } = props;

  const onFinish = values => {
    onSubmit(values);
    form.resetFields();
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      width={700}
      title={title}
      open={open}
      onCancel={onCancel}
      // onSubmit={onSubmit}
      isDefaultFooter={false}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={"vertical"}
        form={form}
        initialValues={{
          ["word"]: orEmpty("eng_word", item),
          ["mean"]: orEmpty("vn_mean", item),
          ["isImportant"]: orBoolean("isImportant", item)
        }}
      >
        <Form.Item
          label="Từ Tiếng Anh"
          name="word"
          rules={[
            { required: true, message: "Rất tiếc, không được để trống!" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nghĩa Tiếng Việt"
          name="mean"
          rules={[
            { required: true, message: "Rất tiếc, không được để trống!" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="isImportant" valuePropName="checked">
          <Checkbox>Từ quan trọng</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm từ mới vào danh sách
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FormComponent;
