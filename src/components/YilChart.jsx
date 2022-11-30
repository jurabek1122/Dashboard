import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import { yillar } from "../assets/MenuData";

const YilChart = () => {
  const data = [
    {
      type: 'Yan',
      sales: 20,
    },
    {
      type: 'Fev',
      sales: 25,
    },
    {
      type: 'Mar',
      sales: 30,
    },
    {
      type: 'Apr',
      sales: 25,
    },
    {
      type: 'May',
      sales: 23,
    },
    {
      type: 'Iyn',
      sales: 30,
    },
    {
      type: 'Iyl',
      sales: 25,
    },
    {
      type: 'Avg',
      sales: 23,
    },
    {
      type: 'Sen',
      sales: 30,
    },
    {
      type: 'Okt',
      sales: 25,
    },
    {
      type: 'Noy',
      sales: 23,
    },
    {
      type: 'Dek',
      sales: 23,
    }
  ];
    const config = {
    data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: false,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: 'salom',
      },
    },
    minColumnWidth: 30,
    maxColumnWidth: 30,
  };

  const [yil, setYil] = useState("2022");

  return (
    <div  className="yillik-statistika">
      <div className="stats-header">
          <span>Yillik Statistika</span>
          <div className="yillar">
            <select onChange={(e) => setYil(e.target.value)}>
              {yillar?.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Column {...config} />
    </div>
  )
  
};

export default YilChart;