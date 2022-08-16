import React,{Component} from 'react'
import {Modal, Button, Input} from 'antd'
import '../css/input.css'

class ProvinceInput extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      province: "Phichit",
    };
  }

  showModal = () => {
    if (this.state.visibleModal) {
      this.setState({
        visibleModal: false,
      });
    }else{
      this.setState({
        visibleModal: true,
      });
    }
    
  };

  handleOk = (e) => {
    this.props.onProvinceChange(this.state.province);
    this.setState({
      visibleModal: false,
    });
  };

  handleCancel = e => {
    // console.log(e);
    this.setState({
      visibleModal: false,
    });
  };

  onLatChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      province: e.target.value,
    })
  }

  render() { 
    return (
      <div className="button-widget">
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input type="text" addonBefore="Province : " defaultValue={this.state.province}
            onChange = {this.onLatChange} />
          <br /><br />
        </Modal>
      </div>
    );
  }
}
 
export default ProvinceInput