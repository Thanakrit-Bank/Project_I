import React, {useState} from 'react';
import {  AppstoreOutlined, 
  GlobalOutlined, 
  SettingFilled,
  DatabaseOutlined,
  BarsOutlined,
  CalendarOutlined 
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import dataSetting from '../../data/dataSelection'
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const SideMenu = () => {

    const [collapsed, setCollapsed] = useState(false);
    const { Sider } = Layout;
  
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

    const datePicker = () => {
        return  console.log('test');
    }

    const items = [
      getItem('Select Area', null, <GlobalOutlined />, [
        getItem('Country', 'subCountry', null, countryList),
        getItem('Thailand', 'subThai', null, provinceList),
      ]),
      getItem('Select Data Type', null, <DatabaseOutlined />, selectDataMenu),
      getItem('select date range', null, <CalendarOutlined />),
      getItem('Compare Mode', <Link to="/ComparePage" />, <AppstoreOutlined />),
      getItem('Setting', null, <SettingFilled />),
      getItem('Logout', null, <SettingFilled />)
    ];
    
    return (
        <Sider trigger={<BarsOutlined />} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} collapsedWidth={0} className='sider'>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical" items={items}/>
        </Sider> 
    )
}

export default SideMenu