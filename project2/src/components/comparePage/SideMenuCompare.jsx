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
    
    const countryList1 = country.map((cName) => {
        return getItem(cName, cName)
    })

    const provinceList1 = province.map((cName) => {
        return getItem(cName, cName.replace(' ', '_'))
    })

    const countryList2 = country.map((cName) => {
        return getItem(cName, cName)
    })

    const provinceList2 = province.map((cName) => {
        return getItem(cName, cName.replace(' ', '_'))
    })

    const countryList3 = country.map((cName) => {
        return getItem(cName, cName)
    })

    const provinceList3 = province.map((cName) => {
        return getItem(cName, cName.replace(' ', '_'))
    })

    const selectDataMenuLeft = data_provider.map((providerName => {
        return getItem(providerName, providerName.concat('@', 'left'), null, type_value.map(valueName => {
            return getItem(valueName, providerName.concat("@",valueName,"@", 'left'), null, type_index.map(indexName => {
                if(indexName === "SPI"){
                    return getItem(indexName, providerName.concat("@",valueName,"@",indexName,"@", 'left'), null, SPI_name.map(spiname => {
                        return getItem(spiname, providerName.concat("@",valueName,"@",indexName,"@",spiname.trim()))
                    }))
                }else {
                    return getItem(indexName, providerName.concat("@",valueName,"@",indexName,"@", 'left'), null, index_name.map(spiname => {
                        return getItem(spiname, providerName.concat("@",valueName,"@",indexName,"@",spiname.trim()))
                    }))
                }
            }))
        }))
    }))

    const selectDataMenuCenter = data_provider.map((providerName => {
        return getItem(providerName, providerName.concat('@', 'center'), null, type_value.map(valueName => {
            return getItem(valueName, providerName.concat("@",valueName,"@", 'center'), null, type_index.map(indexName => {
                if(indexName === "SPI"){
                    return getItem(indexName, providerName.concat("@",valueName,"@",indexName,"@", 'center'), null, SPI_name.map(spiname => {
                        return getItem(spiname, providerName.concat("@",valueName,"@",indexName,"@",spiname.trim()))
                    }))
                }else {
                    return getItem(indexName, providerName.concat("@",valueName,"@",indexName,"@", 'center'), null, index_name.map(spiname => {
                        return getItem(spiname, providerName.concat("@",valueName,"@",indexName,"@",spiname.trim()))
                    }))
                }
            }))
        }))
    }))

    const selectDataMenuRight = data_provider.map((providerName => {
        return getItem(providerName, providerName.concat('@', 'right'), null, type_value.map(valueName => {
            return getItem(valueName, providerName.concat("@",valueName,"@", 'right'), null, type_index.map(indexName => {
                if(indexName === "SPI"){
                    return getItem(indexName, providerName.concat("@",valueName,"@",indexName,"@", 'right'), null, SPI_name.map(spiname => {
                        return getItem(spiname, providerName.concat("@",valueName,"@",indexName,"@",spiname.trim()))
                    }))
                }else {
                    return getItem(indexName, providerName.concat("@",valueName,"@",indexName,"@", 'right'), null, index_name.map(spiname => {
                        return getItem(spiname, providerName.concat("@",valueName,"@",indexName,"@", spiname.trim()))
                    }))
                }
            }))
        }))
    }))

    const items_1 = [
        getItem('Left Map', 'left', null, [
            getItem('Select Area', 'area1', <GlobalOutlined />, [
                getItem('Country', 'subCountry1', null, countryList1),
                getItem('Thailand', 'subThai1', null, provinceList1),
            ]),
            { type: 'divider' },
            getItem('Select Data Type', 'dataType1', <DatabaseOutlined />, selectDataMenuLeft),
            { type: 'divider' },
            getItem(
                <SelectDate date={props.date[0]} picker={picker1} dateChange={props.dateChange[0]}/> 
                
            , 'dateRange1'),
        ], 'group'),
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },

        getItem('Center Map', 'center', null, [
            getItem('Select Area', 'area2', <GlobalOutlined />, [
                getItem('Country', 'subCountry2', null, countryList2),
                getItem('Thailand', 'subThai2', null, provinceList2),
            ]),
            { type: 'divider' },
            getItem('Select Data Type', 'dataType2', <DatabaseOutlined />, selectDataMenuCenter),
            { type: 'divider' },
            getItem(
                <SelectDate date={props.date[1]} picker={picker2} dateChange={props.dateChange[1]}/> 
            , 'dateRange2'),
        ], 'group'),
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },
        { type: 'divider' },

        getItem('Right Map', 'right', null, [
            getItem('Select Area', 'area3', <GlobalOutlined />, [
                getItem('Country', 'subCountry3', null, countryList3),
                getItem('Thailand', 'subThai3', null, provinceList3),
            ]),
            { type: 'divider' },
            getItem('Select Data Type', 'dataType3', <DatabaseOutlined />, selectDataMenuRight),
            { type: 'divider' },
            getItem(
                <SelectDate date={props.date[2]} picker={picker3} dateChange={props.dateChange[2]}/> 
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
        console.log(props.data);
        console.log('click', e.keyPath);
        if (e.keyPath[0] === 'logout'){
            deleteToken()
        }
        else if (e.keyPath[0] === 'left'){
            const dataNameArray = props.data[0].split('@')
            let typeIdex = dataNameArray[2]
            if (e.keyPath[e.keyPath.length - 1] === 'area'){
                props.areaChange[0](e.keyPath[0])
            }
            else if (e.keyPath[e.keyPath.length - 1] === 'dataType'){
                props.dataChange[0](e.keyPath[0])
                if (typeIdex === "SPI"){
                    setPicker1('year')
                }else {
                    setPicker1('month')
                }
            }
        }
        else if (e.keyPath[0] === 'center'){
            const dataNameArray = props.data[1].split('@')
            let typeIdex = dataNameArray[2]
            if (e.keyPath[e.keyPath.length - 1] === 'area'){
                props.areaChange[1](e.keyPath[0])
            }
            else if (e.keyPath[e.keyPath.length - 1] === 'dataType'){
                props.dataChange[1](e.keyPath[0])
                if (typeIdex === "SPI"){
                    setPicker1('year')
                }else {
                    setPicker1('month')
                }
            }
        }
        else if (e.keyPath[0] === 'right'){
            const dataNameArray = props.data[2].split('@')
            let typeIdex = dataNameArray[2]
            if (e.keyPath[e.keyPath.length - 1] === 'area'){
                props.areaChange[2](e.keyPath[0])
            }
            else if (e.keyPath[e.keyPath.length - 1] === 'dataType'){
                props.dataChange[2](e.keyPath[0])
                if (typeIdex === "SPI"){
                    setPicker1('year')
                }else {
                    setPicker1('month')
                }
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