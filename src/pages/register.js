import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./../styles/auth.css";
import { Link } from "react-router-dom";

const { Item } = Form;
const formName = "register";

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
];

export const RegisterPage = () => {
  const onFinish = async () => {};
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
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
          or you can <Link to="/login">Sign in</Link>!
        </Item>
      </Form>
    </div>
  );
};
