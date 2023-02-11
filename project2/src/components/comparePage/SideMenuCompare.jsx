import React, {useState} from 'react';
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
import SettingCompare from './SettingCompare';
import './sideMenuCompare.css'
import SelectDate from './SelectDate';
import { deleteToken } from '../authentication/Auth';




const SideMenuCompare = (props) => {

    const [collapsed, setCollapsed] = useState(false);
    const { Sider } = Layout;
    const [picker1, setPicker1]  = useState('year')
    const [picker2, setPicker2]  = useState('year')
    const [picker3, setPicker3]  = useState('year')
  
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
        getItem('Left Map', 'left', null, [
            getItem('Select Area', 'area1', <GlobalOutlined />, [
                getItem('Country', 'subCountry', null, countryList),
                getItem('Thailand', 'subThai', null, provinceList),
            ]),
            { type: 'divider' },
            getItem('Select Data Type', 'dataType1', <DatabaseOutlined />, selectDataMenu),
            { type: 'divider' },
            getItem(
                <SelectDate date={props.date} picker={picker1} dateChange={props.dateChange}/> 
                
            , 'dateRange1'),
        ], 'group'),
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },

        getItem('Center Map', 'center', null, [
            getItem('Select Area', 'area2', <GlobalOutlined />, [
                getItem('Country', 'subCountry', null, countryList),
                getItem('Thailand', 'subThai', null, provinceList),
            ]),
            { type: 'divider' },
            getItem('Select Data Type', 'dataType2', <DatabaseOutlined />, selectDataMenu),
            { type: 'divider' },
            getItem(
                <SelectDate date={props.date} picker={picker2} dateChange={props.dateChange}/> 
            , 'dateRange2'),
        ], 'group'),
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },

        getItem('Right Map', 'right', null, [
            getItem('Select Area', 'area3', <GlobalOutlined />, [
                getItem('Country', 'subCountry', null, countryList),
                getItem('Thailand', 'subThai', null, provinceList),
            ]),
            { type: 'divider' },
            getItem('Select Data Type', 'dataType3', <DatabaseOutlined />, selectDataMenu),
            { type: 'divider' },
            getItem(
                <SelectDate date={props.date} picker={picker3} dateChange={props.dateChange}/> 
            , 'dateRange3'),
        ], 'group'),
    ];

    const items_2 = [
        getItem(<Link to="/SinglePage">Single Mode</Link>, 'comparePage', <AppstoreOutlined />),
        { type: 'divider' },
        getItem(<SettingCompare graphType={props.graphType} setGraphType={props.setGraphType} />, null, <SettingFilled />),
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
                setPicker1('year')
            }else {
                setPicker1('month')
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

export default SideMenuCompare