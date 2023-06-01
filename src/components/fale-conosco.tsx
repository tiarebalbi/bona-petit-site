'use client';

import { Form, Input } from 'antd';

import style from './fale-conosco.module.css';

const FaleConosco = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} rootClassName={style.form} layout="vertical">
      <Form.Item
        name="name"
        required
        rules={[{ required: true, message: 'Campo Obrigatório' }]}
      >
        <Input placeholder="Nome Completo" className={style.input} />
      </Form.Item>
      <Form.Item name="phone">
        <Input
          type="tel"
          placeholder="(000) 00000-0000"
          className={style.input}
        />
      </Form.Item>
      <Form.Item name="email">
        <Input type="email" placeholder="E-mail" className={style.input} />
      </Form.Item>
      <Form.Item name="message">
        <Input.TextArea
          placeholder="Mensagem"
          autoSize={{ minRows: 3, maxRows: 3 }}
          className={style.textarea}
        />
      </Form.Item>
      <Form.Item noStyle>
        <button className={style.btn} type="submit">
          Enviar
        </button>
      </Form.Item>
    </Form>
  );
};

export default FaleConosco;
