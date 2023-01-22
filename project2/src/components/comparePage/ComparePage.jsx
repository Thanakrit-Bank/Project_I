import { useState, React } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './comparePage.css'
import { BarsOutlined, 
  AppstoreOutlined, 
  GlobalOutlined, 
  DesktopOutlined, 
  SettingFilled,
  DatabaseOutlined 
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import TimeSeries from '../showData/TimeSeries';
import { Link } from 'react-router-dom';

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
  // getItem(<SelectDate />),
  getItem('Select Area', null, <GlobalOutlined />, [
    getItem('Country', 'subCountry', null, [
      getItem('test', 'test'),
      getItem('test', 'test')

    ]),
    getItem('Thailand', 'subThai', null, [
      getItem('City', 'subCity', null, [
        getItem('test', 'test'),
        getItem('test', 'test')
      ]),
    ]),
  ]),
  getItem('Select Data Type', null, <DatabaseOutlined />, [
    getItem('Ecearth', 'subEc', null, [
        getItem('Indices', 'subEc_indices', null, [
            getItem('RCP 4.5', 'subEc_indices_RCP4.5', null, [
              getItem('test', 'test'),
              getItem('test', 'test')
            ]),
            getItem('RCP 8.5', 'subEc_indices_RCP8.5', null, [
              getItem('test', 'test'),
              getItem('test', 'test')
            ]), 
        ]),
        getItem('SPI', 'subEc_spi', null, [
          getItem('Hist', 'subEc_spi_hist', null, [
            getItem('test', 'test'),
            getItem('test', 'test')
          ]),
          getItem('RCP 4.5', 'subEc_spi_RCP4.5', null, [
            getItem('test', 'test'),
            getItem('test', 'test')
          ]),
          getItem('RCP 8.5', 'subEc_spi_RCP8.5', null, [
            getItem('test', 'test'),
            getItem('test', 'test')
          ]), 
        ])
    ]),
  ]),
  getItem('Compare Mode', <Link to="/ComparePage" />, <AppstoreOutlined />),
  getItem('Setting', null, <SettingFilled />)
];

const ComparePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} zoomControl={false} className="map-container">
          
          <TileLayer
              url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
          />
          
          <Layout style={{ minHeight: '100vh'}}>
              <Sider trigger={<BarsOutlined />} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} collapsedWidth={0} className='sider'>
                  <Menu 
                  theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
              </Sider>
              <TimeSeries />
          </Layout>
                    
      </MapContainer>    
  )
}

export default ComparePage