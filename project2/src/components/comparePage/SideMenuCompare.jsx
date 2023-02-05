import React, {useState} from 'react';
import {  AppstoreOutlined, 
  GlobalOutlined, 
  SettingFilled,
  DatabaseOutlined,
  BarsOutlined,
  CalendarOutlined,
  LogoutOutlined 
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import dataSetting from '../../data/dataSelection'
import { Link } from 'react-router-dom';
import SettingCompare from './SettingCompare';
import './sideMenuCompare.css'


const SideMenuCompare = () => {

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
    const settingSelection = dataSetting
    const {province, country, data_provider, type_index, type_value, index_name, SPI_name} = settingSelection
    console.log(country);
    
    const countryList = country.map((cName) => {
        return getItem(cName, cName)
    })

    const provinceList = province.map((cName) => {
        return getItem(cName, cName)
    })

    const selectDataMenu = data_provider.map((providerName => {
        return getItem(providerName, providerName, null, type_value.map(valueName => {
            return getItem(valueName, valueName, null, type_index.map(indexName => {
                if(indexName === "SPI"){
                    return getItem(indexName, indexName, null, SPI_name.map(spiname => {
                        return getItem(spiname, spiname)
                    }))
                }else {
                    return getItem(indexName, indexName, null, index_name.map(spiname => {
                        return getItem(spiname, spiname)
                    }))
                }
            }))
        }))
    }))

    const items_1 = [
        getItem('Left Map', 'left', null, [
            getItem('Select Area', 'selectAreaLeft', <GlobalOutlined />, [
                getItem('Country', 'subCountryLeft', null, countryList),
                getItem('Thailand', 'subThaiLeft', null, provinceList)
            ]),
            { type: 'divider' }, 
            getItem('Select Data Type', 'selectDataLeft', <DatabaseOutlined />, selectDataMenu),
            { type: 'divider' },
            getItem('Select Date Range', 'selectDateLeft', <CalendarOutlined />),
        ], 'group'),

        getItem('Center Map', 'center', null, [
            getItem('Select Area', 'selectAreaCenter', <GlobalOutlined />, [
                getItem('Country', 'subCountryCenter', null, countryList),
                getItem('Thailand', 'subThaiCenter', null, provinceList)
            ]),
            { type: 'divider' }, 
            getItem('Select Data Type', 'selectDataCenter', <DatabaseOutlined />, selectDataMenu),
            { type: 'divider' },
            getItem('Select Date Range', 'selectDateCenter', <CalendarOutlined />),
        ], 'group'),

        getItem('Right Map', 'right', null, [
            getItem('Select Area', 'selectAreaRight', <GlobalOutlined />, [
                getItem('Country', 'subCountryRight', null, countryList),
                getItem('Thailand', 'subThaiRight', null, provinceList)
            ]),
            { type: 'divider' }, 
            getItem('Select Data Type', 'selectDataRight', <DatabaseOutlined />, selectDataMenu),
            { type: 'divider' },
            getItem('Select Date Range', 'selectDateRight', <CalendarOutlined />),
        ], 'group'),

        // { type: 'divider' },
        // getItem(<Link to="/SinglePage">Single Mode</Link>, 'comparePage', <AppstoreOutlined />),
        // { type: 'divider' },
        // getItem(<SettingCompare />, null, <SettingFilled />),
        // { type: 'divider' },
        // getItem('Logout', null, <LogoutOutlined />)
    ];

    const items_2 = [
        getItem(<Link to="/SinglePage">Single Mode</Link>, 'comparePage', <AppstoreOutlined />),
        { type: 'divider' },
        getItem(<SettingCompare />, null, <SettingFilled />),
        { type: 'divider' },
        getItem('Logout', null, <LogoutOutlined />)
    ];

    const onClick = (e) => {
        console.log('click', e.keyPath[0]);
    }
    
    return (
        <Sider trigger={<BarsOutlined />} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} collapsedWidth={0} className="sider">
                <div className="menu-container">
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical" items={items_1} onClick={onClick}/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical" items={items_2} onClick={onClick}/>
                </div>
        </Sider> 
    )
}

export default SideMenuCompare