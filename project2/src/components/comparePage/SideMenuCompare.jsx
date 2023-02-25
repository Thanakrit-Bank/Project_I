import React, {useState} from 'react';
import {  AppstoreOutlined, 
  GlobalOutlined, 
  QuestionCircleOutlined,
  DatabaseOutlined,
  BarsOutlined,
  LogoutOutlined 
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import dataSetting from '../../data/dataSelection'
import { Link } from 'react-router-dom';
import About from '../showData/About'
import SelectDate from './SelectDate';
import { deleteToken } from '../authentication/Auth';
import './sideMenuCompare.css'

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
                <SelectDate date={props.date1} picker={picker1} dateChange={props.dateChange1}/> 
                
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
                <SelectDate date={props.date2} picker={picker2} dateChange={props.dateChange2}/> 
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
                <SelectDate date={props.date3} picker={picker3} dateChange={props.dateChange3}/> 
            , 'dateRange3'),
        ], 'group'),
    ];

    const items_2 = [
        getItem(<Link to="/SinglePage">Single Mode</Link>, 'comparePage', <AppstoreOutlined />),
        { type: 'divider' },
        getItem(<About />, null, <QuestionCircleOutlined />),
        { type: 'divider' },
        getItem(<Link to="/">Logout</Link>, 'logout', <LogoutOutlined />)
    ];

    const onClick = (e) => {
        console.log(e.keyPath);
        if (e.keyPath[0] === 'logout'){
            deleteToken()
        }
        const dataNameArray1 = props.data1.split('@')
        let typeIdex1 = dataNameArray1[2]
        if (e.keyPath[e.keyPath.length - 1] === 'area1'){
            props.areaChange1(e.keyPath[0])
        }
        else if (e.keyPath[e.keyPath.length - 1] === 'dataType1'){
            props.dataChange1(e.keyPath[0])
            if (typeIdex1 === "SPI"){
                setPicker1('year')
            }else {
                setPicker1('month')
            }
        }
        const dataNameArray2 = props.data2.split('@')
        let typeIdex2 = dataNameArray2[2]
        if (e.keyPath[e.keyPath.length - 1] === 'area2'){
            props.areaChange2(e.keyPath[0])
        }
        else if (e.keyPath[e.keyPath.length - 1] === 'dataType2'){
            props.dataChange2(e.keyPath[0])
            if (typeIdex2 === "SPI"){
                setPicker1('year')
            }else {
                setPicker1('month')
            }
        }
        const dataNameArray3 = props.data3.split('@')
        let typeIdex3 = dataNameArray3[2]
        if (e.keyPath[e.keyPath.length - 1] === 'area3'){
            props.areaChange3(e.keyPath[0])
        }
        else if (e.keyPath[e.keyPath.length - 1] === 'dataType3'){
            props.dataChange3(e.keyPath[0])
            if (typeIdex3 === "SPI"){
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