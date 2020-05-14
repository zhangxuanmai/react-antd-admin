import React, { Component } from 'react'
import {
  Form,
  Checkbox,
  Cascader,
  InputNumber,
  Input,
  Radio,
  Switch,
  Select,
  DatePicker,
  Button,
  Upload,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import WrapperSection from './WrapperSection'
import SelectedTags from './SelectedTags'

const { Option } = Select

export class FormBasic extends Component {
  form = React.createRef()

  state = {
    initialValues: {
      upload: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ]
    }
  }

  onFinish = values => {
    console.log('getFieldValue:', this.form.current.getFieldValue());
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];
    const optionsCascader = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ];
    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false },
    ];
    const layout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 6 },
    };
    const tailLayout = {
      wrapperCol: { offset: 3, span: 6 },
    };
    const normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };

    return (
      <div>
        <WrapperSection style={{ marginBottom: 0 }}>
          <h2>Form Example:</h2>
          <Form
            name="basic"
            ref={this.form}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            initialValues={this.state.initialValues}
            {...layout}
          >
            <Form.Item
              label="input"
              name="input"
            >
              <Input placeholder="Basic usage" />
            </Form.Item>
            <Form.Item
              label="inputnumber"
              name="inputnumber"
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="radio"
              name="radio"
            >
              <Radio.Group options={optionsWithDisabled} />
            </Form.Item>
            <Form.Item
              label="checkbox"
              name="checkbox"
            >
              <Checkbox.Group options={options} />
            </Form.Item>
            <Form.Item
              label="cascader"
              name="cascader"
            >
              <Cascader options={optionsCascader} />
            </Form.Item>
            <Form.Item
              label="switch"
              name="switch"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label="selectTags"
              name="selectTags"
            >
              <SelectedTags onChange={(value) => console.log(value)} />
            </Form.Item>
            <Form.Item
              label="select"
              name="select"
            >
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Select a person"
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="datetime"
              name="datetime"
            >
              <DatePicker showTime />
            </Form.Item>
            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: 'Please upload your image!' }]}
            >
              <Upload
                name="logo"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
              >
                <Button>
                  <UploadOutlined /> upload
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </WrapperSection>
      </div >
    )
  }
}

export default FormBasic

