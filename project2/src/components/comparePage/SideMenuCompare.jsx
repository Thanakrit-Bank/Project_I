import React, {useState} from 'react';
import {  AppstoreOutlined, 
  QuestionCircleOutlined,
  BarsOutlined,
  LogoutOutlined,
  RedoOutlined 
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { deleteToken } from '../authentication/Auth';
import './sideMenuCompare.css'

const SideMenuCompare = (props) => {

    const [collapsed, setCollapsed] = useState(false);
    const { Sider } = Layout;
  
    function getItem(label, key, icon, children, type) {
      return {
        key,
        icon,
        children,
        label,
        type
      };
    }
    
    const items_2 = [
        getItem(<Link to="/ComparePage-Three">View 3 map</Link>, 'comparePage', <RedoOutlined />),
        { type: 'divider' },
        getItem(<Link to="/ComparePage">View 2 map</Link>, 'comparePage', <RedoOutlined />),
        { type: 'divider' },
        getItem(<Link to="/SinglePage">Single Mode</Link>, 'comparePage', <AppstoreOutlined />),
        { type: 'divider' },
        // getItem(<About />, null, <QuestionCircleOutlined />),
        // { type: 'divider' },
        getItem(<Link to="/">Logout</Link>, 'logout', <LogoutOutlined />)
    ];

    const onClick = (e) => {
        console.log(e.keyPath);
        if (e.keyPath[0] === 'logout'){
            deleteToken()
        }
    }

    
    return (
        <Sider trigger={<BarsOutlined />} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} collapsedWidth={0} className="sider">
                <div className="menu-container">
                    <div className="header">Compare Mode</div>
                    
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical" items={items_2} onClick={onClick}/>
                </div>
        </Sider> 
    )
}

export default SideMenuCompare