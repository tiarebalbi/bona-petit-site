'use client';

import { UserFeedback } from '@prisma/client';
import { Rate } from 'antd';

import React from 'react';

export interface FeedbackProps {
  data: UserFeedback;
}

const Feedback: React.FC<FeedbackProps> = ({ data }) => {
  return (
    <div>
      <Rate disabled defaultValue={data.ranking} />
      <p className="italic my-2 prose text-primary-100">{data.message}</p>
      <div className="flex items-center justify-start space-x-4 mt-8">
        <div className="w-[36px] h-[36px] bg-white rounded-full" />
        <span className="font-medium">{data.name}</span>
      </div>
    </div>
  );
};

export default Feedback;
