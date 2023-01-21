import { useState, React } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './singlePage.css'
import { FileOutlined, GlobalOutlined, UserOutlined, DesktopOutlined, TeamOutlined,SettingFilled } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';

const { Sider } = Layout;

function getItem(label, key, icon, children) {

  return {
    key,
    icon,
    children,
    label,
  };

}

const settingSelection = () => {
  fetch("D:\\Project\\Mix_Project\\Project_I\\project2\\src\\data\\dataSelection.json")
  .then(respone => respone.json())
  }

const {province, country, data_provider, type_index, type_value, index_name, SPI_name} = settingSelection

// const countryList = [country.map((cName, index) => getItem(cName, index))]
console.log(settingSelection);
const items = [
  getItem('Select Area', 'subArea', <GlobalOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const SinglePage = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} zoomControl={false} className="map-container">
            <TileLayer
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
            />
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={<SettingFilled/>} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} collapsedWidth={0} className='sider'>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
            </Layout>
            
        </MapContainer>
    
    
  )
}

export default SinglePage