import { Modal } from 'antd';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import { Checkbox } from "antd";
import './setting.css'

const Setting = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  const draggleRef = useRef(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <>
      <Link onClick={showModal}>Setting</Link>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            <h3>Setting</h3>
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <br/>
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
        <br/>
        <p className="topic">Opacity</p>
        <Slider min={0} max={10} />
      </Modal>
    </>
  );
};

export default Setting;