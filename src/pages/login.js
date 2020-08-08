import React, { useState, useRef } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { StyleSheet, css } from "aphrodite";
import { Link, useHistory } from "react-router-dom";

import { login, saveToken } from "./../services/user";

import "./../styles/auth.css";

const { Item } = Form;

const formName = "login";

const inputs = [
  {
    id: "id",
    name: "identifier",
    label: "Username",
    type: "text",
    rules: [
      {
        required: true,
        message: "Please tell us who you are!",
      },
    ],
    input: {
      Prefix: UserOutlined,
      placeholder: "e.g jasonX23",
    },
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    rules: [
      {
        required: true,
        message: "Your password is required!",
      },
    ],
    input: {
      Prefix: LockOutlined,
      placeholder: "doggie123",
    },
  },
];

export const LoginPage = () => {
  const formRef = useRef(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const onFinish = async ({ identifier, password }) => {
    setLoading(true);
    try {
      const {
        data: { token },
      } = await login(identifier, password);
      saveToken(token);
      setLoading(false);
      setTimeout(() => {
        history.push("/home");
      }, 500);
    } catch (e) {
      formRef.current.resetFields(["password"]);
      notification.error({ message: e });
      setLoading(false);
    }
  };
  return (
    <div className="auth-container">
      <Form name={formName} ref={formRef} onFinish={onFinish} className="form">
        {inputs.map(({ id, name, input, label, rules, type }) => {
          const { Prefix, placeholder } = input;
          return (
            <dl key={id}>
              <dt>
                <label htmlFor={`${formName}_${id}`}>
                  <strong>{label}</strong>
                </label>
              </dt>
              <dd>
                <Item id={id} name={name} rules={rules}>
                  <Input type={type} prefix={<Prefix />} placeholder={placeholder} />
                </Item>
              </dd>
            </dl>
          );
        })}
        <Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign in
          </Button>
          or you can <Link to="/signup">Sign up</Link>!
        </Item>
      </Form>
      <div className={css(style.bigIllustration, style.big)}>
        <img
          width={600}
          src={"/img/woman.jpg"}
          alt="woman looking to her phone, recieving a tons of likes on social media"
        />
      </div>
      <div className={css(style.smallIllustration, style.small)}>
        <img
          width={400}
          src={"/img/group.jpg"}
          alt="four young people hogging and smilling to each other"
        />
      </div>
    </div>
  );
};

export const style = StyleSheet.create({
  bigIllustration: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  smallIllustration: {
    position: "absolute",
    bottom: 0,
    display: "none",
  },
  big: {
    "@media (max-width: 1200px)": {
      display: "none",
    },
  },
  small: {
    "@media (max-width: 1200px)": {
      display: "block",
    },
  },
});
