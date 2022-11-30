import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const StudentChart = () => {
  const data = [
    {
      type: 'text1',
      value: 27,
    },
    {
      type: 'text2',
      value: 42,
    }
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '65%\nNew total',
      },
    },
  };
  return(
      <div className='students-chart'>
        <span>Yillik Statistika</span>
        <p>Yangi qo`shilgan o`quvchilar</p>
        <Pie {...config} />;
      </div>
  )
};

export default StudentChart;