import React from 'react';
    import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Ecearth', null, <AppstoreOutlined />, [
    getItem('Indices', 'sub2', null, [
        getItem('rcp4.5', 'sub3', null, [
            getItem('test', '1'), 
            getItem('test', '2')
        ]),
        getItem('rcp8.5', 'sub4', null, [
            getItem('test', '3'), 
            getItem('test', '4')
        ])
    ]),
    getItem('SPI', 'sub5', null, [
        getItem('rcp4.5', 'sub6', null, [
            getItem('test', '5'), 
            getItem('test', '6')
        ]),
        getItem('rcp8.5', 'sub7', null, [
            getItem('test', '7'), 
            getItem('test', '8')
        ])
    ]),
  ]),
];

const Demo = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Demo;