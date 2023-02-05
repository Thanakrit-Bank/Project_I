import React, {useEffect, useState} from 'react';
import {  AppstoreOutlined, 
  GlobalOutlined, 
  SettingFilled,
  DatabaseOutlined,
  BarsOutlined,
  LogoutOutlined 
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import dataSetting from '../../data/dataSelection'
import { Link } from 'react-router-dom';
import Setting from './Setting';
import './sideMenu.css'
import { deleteToken } from '../authentication/Auth';
import SelectDate from './SelectDate';


const SideMenu = (props) => {

    const [collapsed, setCollapsed] = useState(true);
    const { Sider } = Layout;
    const [picker, setPicker]  = useState('year')

    function getItem(label, key, icon, children) {
      return {
        key,
        icon,
        children,
        label,
      };
    }
    const settingSelection = dataSetting
    const {province, country, data_provider, type_index, type_value, index_name, SPI_name} = settingSelection
    
    const countryList = country.map((cName) => {
        return getItem(cName, cName)
    })

    const provinceList = province.map((cName) => {
        return getItem(cName, cName.replace(' ', '_'))
    })

    const selectDataMenu = data_provider.map((providerName => {
        return getItem(providerName, providerName, null, type_value.map(valueName => {
            return getItem(valueName, providerName.concat("@",valueName,"@"), null, type_index.map(indexName => {
                if(indexName === "SPI"){
                    return getItem(indexName, providerName.concat("@",valueName,"@",indexName,"@"), null, SPI_name.map(spiname => {
                        return getItem(spiname, providerName.concat("@",valueName,"@",indexName,"@",spiname.trim()))
                    }))
                }else {
                    return getItem(indexName, providerName.concat("@",valueName,"@",indexName,"@"), null, index_name.map(spiname => {
                        return getItem(spiname, providerName.concat("@",valueName,"@",indexName,"@",spiname.trim()))
                    }))
                }
            }))
        }))
    }))

    const items_1 = [
        getItem('Select Area', 'area', <GlobalOutlined />, [
            getItem('Country', 'subCountry', null, countryList),
            getItem('Thailand', 'subThai', null, provinceList),
        ]),
        { type: 'divider' },
        getItem('Select Data Type', 'dataType', <DatabaseOutlined />, selectDataMenu),
        { type: 'divider' },
        getItem(
            <SelectDate date={props.date} picker={picker} dateChange={props.dateChange}/> 
        , 'dateRange'),
    ];

    const items_2 = [
        getItem(<Link to="/ComparePage">Compare Mode</Link>, 'comparePage', <AppstoreOutlined />),
        { type: 'divider' },
        getItem(<Setting graphType={props.graphType} setGraphType={props.setGraphType} />, null, <SettingFilled />),
        { type: 'divider' },
        getItem(<Link to="/">Logout</Link>, 'logout', <LogoutOutlined />)
    ];

    const onClick = (e) => {
        const dataNameArray = props.data.split('@')
        let typeIdex = dataNameArray[2]
        console.log('click', e.keyPath);
        if (e.keyPath[0] === 'logout'){
            deleteToken()
        }
        else if (e.keyPath[e.keyPath.length - 1] === 'area'){
            props.areaChange(e.keyPath[0])
        }
        else if (e.keyPath[e.keyPath.length - 1] === 'dataType'){
            props.dataChange(e.keyPath[0])
            if (typeIdex === "SPI"){
                setPicker('year')
            }else {
                setPicker('month')
            }
        }
        
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

export default SideMenu