'use client';

import { Form, Input, notification } from 'antd';
import useSWRMutation from 'swr/mutation';

import React from 'react';

import FaleConoscoFetcher from '@/lib/fetcher/FaleConoscoFetcher';

import style from './fale-conosco.module.css';

const FaleConosco = () => {
  const [form] = Form.useForm<any>();
  const { trigger } = useSWRMutation(
    ['fale-conosco'],
    FaleConoscoFetcher.saveFaleConosco
  );

  const onSubmit = async (data: any) => {
    try {
      await form.validateFields();
      const response = await trigger(data);

      const result = response?.data();

      if (result?.error === true) {
        notification.error({
          message: 'Confirmação',
          description: result?.message,
        });
      } else {
        form.resetFields();
        notification.success({
          message: 'Confirmação',
          description: result?.message,
        });
      }
    } catch (er) {}
  };

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      rootClassName={style.form}
      layout="vertical"
    >
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
