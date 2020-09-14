import React, { useState, useEffect } from "react";
import { Row, Col, notification } from "antd";
import { firebaseApp } from "app/firebaseConfig";
import { Form, Input, Button } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { UploadWrapper } from "./styled";
import { withUser, withCompose, withReducer } from "hocs";
import { orPath, orEmpty, orNull } from "utils/Selector";
import profileReducer from "./reducer";
const UpdateProfile = ({ user, state, dispatch, action }) => {
  const provider_user = orPath(null, ["providerData", 0], user);

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const onSetupImageUrl = () => {
    if (provider_user) {
      setImageUrl(orNull("photoURL", provider_user));
    }
  };

  const onUploadFile = event => {
    setLoading(true);
    setImageUrl(null);
    const file = event.fileList[0];
    var reader = new FileReader();
    reader.onloadend = function(evt) {
      var blob = new Blob([evt.target.result], { type: file.type });
      var storageUrl = "images/";
      var storageRef = firebaseApp.storage().ref(storageUrl + file.name);
      var uploadTask = storageRef.put(blob);
      uploadTask.then(function(snapshot) {
        console.log("snapshot", snapshot);
        snapshot.ref.getDownloadURL().then(downloadURL => {
          setImageUrl(downloadURL);
          return setLoading(false);
        });
      });
    };

    reader.onerror = function(e) {
      console.log("Failed file read: " + e.toString());
    };

    reader.readAsArrayBuffer(file.originFileObj);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const onFinish = values => {
    action.profileR.onUpdateProfile(
      {
        avatar_url: imageUrl,
        username: values.username,
        email: values.email
      },
      dispatch.profileR
    );
  };

  const onUpdateSuccess = () => {
    if (state.profileR.response && !state.profileR.loading) {
      const key = `open${Date.now()}`;
      notification.open({
        message: "Cập nhật thành công",
        type: "success",
        key
      });
    }
  };

  useEffect(onUpdateSuccess, [state.profileR]);
  useEffect(onSetupImageUrl, [provider_user]);

  return (
    <Row gutter={[16, 24]} justify="center">
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <UploadWrapper
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          onChange={onUploadFile}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </UploadWrapper>
      </Col>
      <Col xs={18} sm={18} md={18} lg={18} xl={18}>
        {provider_user ? (
          <Form
            name="basic"
            layout={"vertical"}
            onFinish={onFinish}
            initialValues={{
              ["email"]: orEmpty("email", provider_user),
              ["username"]: orEmpty("displayName", provider_user)
            }}
          >
            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập Nhật
              </Button>
            </Form.Item>
          </Form>
        ) : null}
      </Col>
    </Row>
  );
};
export default withCompose(
  withReducer({
    key: "profileR",
    ...profileReducer
  }),
  withUser
)(UpdateProfile);
