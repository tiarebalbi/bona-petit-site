'use client';

import { Form, Input } from 'antd';
import useSWR from 'swr';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

type NewsletterForm = {
  email: string;
};

export default function Newsletter() {
  const { mutate } = useSWR('/api/newsletter');

  const [form] = Form.useForm<NewsletterForm>();

  const registerEmail = (data: NewsletterForm) => {
    console.log(data);
    form.validateFields().then(() => {
      mutate(data).then(() => {
        console.log('Added');
      });
    });
  };

  return (
    <div className="mt-12">
      <Form form={form} onFinish={registerEmail}>
        <div className="flex space-x-4 items-start justify-between">
          <Form.Item name="email" rootClassName="flex-grow">
            <Input
              autoComplete="off"
              placeholder="Preencha o seu e-mail"
              className="px-6 py-4 bg-primary-950 placeholder:text-primary-600 active:bg-primary-800 active:placeholder:text-primary-100 focus:border-primary hover:border-primary-400 text-primary-100 border-primary"
              type="email"
            />
          </Form.Item>
          <Form.Item
            noStyle
            required
            rules={[{ required: true, message: 'Campo Obrigatório' }]}
          >
            <button
              type="submit"
              className="rounded-full w-[56px] h-[56px] bg-gradient-to-r from-primary to-primary-600 text-white drop-shadow hover:bg-gradient-to-l transition-all duration-300 flex items-center justify-center"
            >
              <PaperAirplaneIcon width={24} />
            </button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
