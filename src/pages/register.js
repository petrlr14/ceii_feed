import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, CameraOutlined } from "@ant-design/icons";
import "./../styles/auth.css";
import { Link, useHistory } from "react-router-dom";
import { register } from "./../services/user";

const { Item } = Form;
const formName = "register";

const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})");
const emailRegex = new RegExp("^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$");

const inputs = [
  {
    id: "first_name",
    name: "first_name",
    label: "Firstname",
    type: "text",
    rules: [
      {
        required: true,
        message: "Please tell us who your first name!",
      },
    ],
    input: {
      Prefix: UserOutlined,
      placeholder: "e.g Pedro",
    },
  },
  {
    id: "last_name",
    name: "last_name",
    label: "Lastname",
    type: "text",
    rules: [
      {
        required: true,
        message: "Please tell us who your lastname!",
      },
    ],
    input: {
      Prefix: UserOutlined,
      placeholder: "e.g Gomez",
    },
  },
  {
    id: "username",
    name: "username",
    label: "Username",
    type: "text",
    rules: [
      {
        required: true,
        message: "Please tell us a username!",
      },
    ],
    input: {
      Prefix: UserOutlined,
      placeholder: "e.g elPedrogas",
    },
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    rules: [
      {
        required: true,
        message: "Please tell us your email!",
      },
      {
        pattern: emailRegex,
        message: "Please give us a valid email!",
      },
    ],
    input: {
      Prefix: MailOutlined,
      placeholder: "e.g pedrogas@gmail.com",
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
      {
        pattern: passwordRegex,
        message: "Your password is weak!",
      },
    ],
    input: {
      Prefix: LockOutlined,
      placeholder: "doggie123",
    },
  },
  {
    id: "photo",
    name: "photo",
    label: "Photo",
    type: "text",
    rules: [],
    input: {
      Prefix: CameraOutlined,
      placeholder: "e.g https://link",
    },
  },
];

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const onFinish = async ({ first_name, last_name, ...rest }) => {
    setLoading(true);
    try {
      const { data } = await register({
        ...rest,
        name: `${first_name} ${last_name}`,
      });
      history.push("/login");
      notification.success({ message: data.message });
    } catch (e) {
      notification.error({ message: e.data.error });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="auth-container">
      <Form className="form" onFinish={onFinish} name={formName}>
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
            Sign up
          </Button>
          or you can <Link to="/login">Sign in</Link>!
        </Item>
      </Form>
    </div>
  );
};
