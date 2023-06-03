'use client';

import { Form, Input, notification } from 'antd';
import useSWRMutation from 'swr/mutation';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

import NewsletterFetcher from '@/lib/fetcher/NewsletterFetcher';

type NewsletterForm = {
  email: string;
};

export default function Newsletter() {
  const { trigger } = useSWRMutation(
    ['newsletter'],
    NewsletterFetcher.insertEmail
  );

  const [form] = Form.useForm<NewsletterForm>();

  const registerEmail = async (data: NewsletterForm) => {
    try {
      await form.validateFields();
      const response = await trigger(data);
      const body = await response?.data();
      if (body?.error) {
        notification.warning({
          message: 'Verifique o e-mail informado.',
          description: body.message,
        });
      } else {
        form.resetFields();
        notification.success({
          message: 'Confirmação',
          description: 'Seu e-mail foi cadastrado com sucesso!',
        });
      }
    } catch (err) {
      notification.error({
        message: 'Ocorreu um error interno',
        description: 'Por favor tente novamente.',
      });
    }
  };

  return (
    <div className="mt-12">
      <Form form={form} onFinish={registerEmail}>
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-start justify-between">
          <Form.Item
            name="email"
            rootClassName="flex-grow"
            required
            rules={[{ required: true, message: 'Campo Obrigatório' }]}
            noStyle
          >
            <Input
              autoComplete="off"
              placeholder="Preencha o seu e-mail"
              className="px-6 caret-primary py-4 bg-primary-950 placeholder:text-primary-600 active:bg-primary-800 active:placeholder:text-primary-100 focus:border-primary hover:border-primary-400 text-primary-100 border-primary"
              type="email"
            />
          </Form.Item>
          <Form.Item noStyle>
            <div>
              <button
                type="submit"
                className="hidden lg:flex rounded-full w-[56px] h-[56px] bg-gradient-to-r from-primary to-primary-600 text-white drop-shadow hover:bg-gradient-to-l transition-all duration-300  lg:items-center lg:justify-center"
              >
                <PaperAirplaneIcon width={24} />
              </button>
            </div>
            <button className="block lg:hidden w-full bg-primary-600 hover:active:focus:bg-primary-700 text-white mt-8 rounded py-4 ring-offset-2 ring-[1px] ring-offset-primary-950 ring-primary uppercase">
              Cadastrar
            </button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
