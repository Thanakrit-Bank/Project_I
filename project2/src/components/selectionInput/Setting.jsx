import { Modal, Radio } from 'antd';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import { Col, InputNumber, Row, Slider } from 'antd';
import './setting.css'

const Setting = (props) => {
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
    setOpen(false);
  };

  const handleCancel = (e) => {
    setOpen(false);
  };

  const dataChange = ({ target: { value } }) => {
    props.setDataType(value);
  };

  // const onChange4 = ({ target: { value } }) => {
  //   console.log('radio4 checked', value);
  //   setValue4(value);
  // };

  const graphChange = (e) => {
    props.setGraphType(e.target.value);
  };

  const [inputValue, setInputValue] = useState(1);
  const opecityChange = (newValue) => {
    setInputValue(newValue);
    props.opacityChange(newValue)
    console.log(props.gridOpacity);
  };

  const legendMinChange =(e) => {
    props.legendMinChange(e)
  }

  const legendMaxChange =(e) => {
    props.legendMaxChange(e)
  }

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
        <br />
        <p className="topic">Graph</p>
        <p className="sub-topic">
          Type: <Radio.Group onChange={graphChange} value={props.graphType} optionType='button'>
                  <Radio value="Linechart">Linechart</Radio>
                  <Radio value="Histrogram">Histrogram</Radio>
                </Radio.Group>
        </p>
        <p className="sub-topic">
          Data: <Radio.Group onChange={dataChange} value={props.dataType} optionType='button'>
                  <Radio value="Overall">Overall</Radio>
                  <Radio value="Seasonal">Seasonal</Radio>
                </Radio.Group>
        </p>
        <br />
        <p className="topic">Grid opacity</p>
        <Row>
          <Col span={12}>
            <Slider
              min={1}
              max={10}
              onChange={opecityChange}
              value={typeof inputValue === 'number' ? inputValue : 7}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={10}
              style={{
                margin: '0 16px',
              }}
              value={inputValue}
              onChange={opecityChange}
            />
          </Col>
        </Row>
        <br />
        <p className="topic">Legend</p>
        <br />
        <InputNumber
          prefix="Min:"
          style={{width: '49%'}}
          onChange={legendMinChange}
          defaultValue={props.legendMin}
        />
        <> </>
        <InputNumber
          prefix="Max:"
          style={{width: '49%'}}
          onChange={legendMaxChange}
          defaultValue={props.legendMax}
        />
      </Modal>
    </>
  );
};

export default Setting;