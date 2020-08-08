import React, { useRef } from "react";
import { Form, Input, Button, notification } from "antd";
import { FormOutlined, FileImageOutlined } from "@ant-design/icons";
import { createPost } from "../services/post";
import strings from "../utils/strings";

const { Item } = Form;

const inputs = [
  {
    id: "title",
    name: "title",
    label: "Title",
    type: "text",
    rules: [
      {
        required: true,
        message: "Please give a title",
      },
    ],
    input: {
      Prefix: FormOutlined,
    },
  },
  {
    id: "description",
    name: "description",
    label: "Descripion",
    type: "text",
    rules: [
      {
        required: true,
        message: "Please give a description",
      },
    ],
    input: {
      Prefix: FormOutlined,
    },
  },
  {
    id: "image",
    name: "image",
    label: "image",
    type: "text",
    rules: [],
    input: {
      Prefix: FileImageOutlined,
    },
  },
];

const formName = "post";

export const PostForm = ({ fetchPost }) => {
  const formRef = useRef(null);
  const onFinish = async (data) => {
    try {
      const response = await createPost(data);
      fetchPost();
      formRef.current.resetFields();
      notification.success({ message: strings.POST.CREATED });
    } catch (e) {
      notification.error({ message: strings.COMMON_ERRORS.INTERNAL });
    }
  };
  return (
    <>
      <Form ref={formRef} className="form" onFinish={onFinish}>
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
          <Button type="primary" htmlType="submit" loading={false}>
            Post!
          </Button>
        </Item>
      </Form>
    </>
  );
};
