import * as React from "react";
import { Slider } from 'antd';
import { Checkbox } from "antd";
import { IoClose } from 'react-icons/io5';

interface IModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ closeModal }: IModalProps) => {
  
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  
  return (
    <div className="modal">
      <div className="modal-header">
        <h2 onClick={() => { closeModal(false); }}>
          <IoClose />
        </h2>
      </div>
      <div className="modal-body">
        <p className="topic">Graph</p>
        <p className="sub-topic">
          Type: <Checkbox className="checkbox" onChange={onChange}>
            <h5>Line Chart</h5>
          </Checkbox>
          <Checkbox className="checkbox" onChange={onChange}>
            <h5>Histogram</h5>
          </Checkbox>
        </p>
        <p className="sub-topic">
          Data: <Checkbox className="checkbox" onChange={onChange}>
            <h5>Year</h5>
          </Checkbox>
          <Checkbox className="checkbox" onChange={onChange}>
            <h5>Month</h5>
          </Checkbox>
        </p>
        <p className="topic">Opacity</p>
        <Slider min={0} max={10} />
      </div>
    </div>
  );
};
