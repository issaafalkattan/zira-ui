import { Modal, Form, Input, notification } from 'antd';
import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TICKET } from '../../graphql/mutations';
import { LOAD_TICKETS } from '../../graphql/queries';

type TicketFormProps = {
  isVisible: boolean;
  onClose: () => void;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const TicketForm = ({ isVisible, onClose }: TicketFormProps): JSX.Element => {

  const [form] = Form.useForm();
  const [createTicket, { error }] = useMutation(CREATE_TICKET, {
    refetchQueries: [
      { query: LOAD_TICKETS, }
    ]
  });

  const onFinish = async (values: { title: string, description?: string }) => {
    await createTicket({ variables: { title: values.title, description: values.description } });
    if (error) {
      notification.error({
        message: `Failed to create ticket ${values.title} :(`,
        description: JSON.stringify(error),
      });
    }
  }

  const onClickOk = async () => {
    const values = await form.validateFields();
    onFinish(values);
    onClose();
  }

  return (
    <Modal visible={isVisible} onCancel={onClose} onOk={onClickOk} okText="Create ticket" destroyOnClose>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default TicketForm;
