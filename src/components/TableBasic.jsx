import React, { Component } from 'react';
import Wrapper from '../components/WrapperSection';
import {
  Form,
  Input,
  Button,
  DatePicker,
  Table,
  Divider,
  Popconfirm,
  Row,
  Col,
  Modal,
  Tag,
  Drawer,
  List,
  message
} from 'antd';
import {
  SearchOutlined,
  PlusOutlined
} from '@ant-design/icons';
import axios from 'axios';

const { RangePicker } = DatePicker;
const { Column } = Table;

export default class TableBasic extends Component {
  form = React.createRef();
  modalForm = React.createRef();

  state = {
    loading: false,
    data: [],
    current: 1,
    defaultPageSize: 15,
    total: 0,

    visible: false,
    confirmLoading: false,
    modalTitle: '新增账户',

    visibleDrawer: false,
  }

  onSearch = (values) => {
    console.log('form:', values);
    console.log('state:', this.state);
    this.doFetch()
  };

  onTableChange = async (pagination) => {
    const { current } = pagination;
    await this.setState({ current });
    await this.doFetch();
  };

  onInsert = (params) => {
    this.setState({
      modalTitle: '新增账户',
      visible: true
    });
  };

  onEdit = async (record) => {
    const { name, password, phone } = record;
    await this.setState({
      modalTitle: '编辑账户',
      visible: true
    });
    this.modalForm.current.setFieldsValue({
      name,
      password,
      phone,
    });
  };

  onDetail = ({ id }) => {
    this.props.history.push({
      pathname: '/admin/examples/table-details',
      state: {
        id
      }
    })
  };

  onDelete = (params) => {
    console.log(params);
  };

  onLogs = (params) => {
    this.setState({ visibleDrawer: true })
  }

  onModalCancel = (params) => {
    this.setState({ visible: false });
  };

  onModalComfirm = async (params) => {
    const result = await this.modalForm.current.validateFields()

    if (result) {
      // const values = this.modalForm.current.getFieldsValue()
      this.setState({
        confirmLoading: true,
      });

      setTimeout(() => {
        message.success('操作成功')
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);
    }
  };

  onCloseDrawer = () => {
    this.setState({ visibleDrawer: false });
  };

  doFetch() {
    this.setState({ loading: true })
    axios.get('/table').then(res => {
      this.setState({
        data: res.data.data,
        total: res.data.total,
        loading: false,
      })
    })
  };

  componentDidMount() {
    this.doFetch()
  };

  render() {
    const data = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
    ];

    return (
      <div>
        <Wrapper style={{ paddingBottom: 0 }}>
          <Form
            name="advanced_search"
            ref={this.form}
            onFinish={this.onSearch}
          >
            <Row gutter={24}>
              <Col span={6}>
                <Form.Item
                  name="keywords"
                  label="关键词"
                >
                  <Input placeholder="请输入关键词" allowClear />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="date"
                  label="日期时间"
                >
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>查询</Button>
                </Form.Item>
              </Col>
            </Row>

          </Form>
        </Wrapper>
        <Wrapper style={{ margin: 0 }}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={this.onInsert}
          >
            新增
            </Button>
        </Wrapper>
        <Wrapper style={{ padding: 0 }}>
          <Table
            rowKey="id"
            size="middle"
            loading={this.state.loading}
            dataSource={this.state.data}
            onChange={this.onTableChange}
            pagination={{
              position: ['bottomCenter'],
              current: this.state.current,
              defaultPageSize: this.state.defaultPageSize,
              total: this.state.total
            }}
          >
            <Column
              title="序号"
              dataIndex="index"
              render={(text, record, index) => `${((this.state.current - 1) * this.state.defaultPageSize) + (index + 1)}`}
            />
            <Column title="用户名" dataIndex="name" />
            <Column title="手机号码" dataIndex="phone" />
            <Column title="最后登录时间" dataIndex="date" />
            <Column title="最后登录IP" dataIndex="ip" />
            <Column title="状态" dataIndex="status" render={(text, record) => {
              const { status } = record
              return status
                ? <Tag color="success">启用</Tag>
                : <Tag color="default">禁用</Tag>
            }} />
            <Column title="创建时间" dataIndex="date" />
            <Column
              title="操作"
              key="action"
              render={(text, record) => {
                return (
                  <span>
                    <span onClick={() => this.onEdit(record)}>编辑</span>
                    <Divider type="vertical" />
                    <span onClick={() => this.onDetail(record)}>详情</span>
                    <Divider type="vertical" />
                    <Popconfirm
                      title="确定删除吗?"
                      onConfirm={() => this.onDelete(record)}
                    >
                      <span>删除</span>
                    </Popconfirm>
                    <Divider type="vertical" />
                    <span onClick={this.onLogs}>操作日志</span>
                  </span>
                )
              }}
            />
          </Table>
        </Wrapper>

        <Modal
          title={this.state.modalTitle}
          visible={this.state.visible}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.onModalCancel}
          onOk={this.onModalComfirm}
          destroyOnClose={true}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
            ref={this.modalForm}
            name="modal-form"
          >
            <Form.Item
              name="name"
              label="用户名"
              validateTrigger="onBlur"
              rules={
                [{
                  required: true,
                  message: '请输入用户名',
                }]
              }
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="手机号"
              validateTrigger="onBlur"
              rules={
                [{
                  required: true,
                  message: '请输入手机号',
                }, {
                  pattern: /^1\d{10}( 1\d{10})*$/,
                  message: '手机号格式不正确',
                }]
              }
            >
              <Input placeholder="请输入手机号码" />
            </Form.Item>
            <Form.Item
              name="password"
              label="密码"
              validateTrigger="onBlur"
              rules={
                [{
                  required: true,
                  message: '请输入密码',
                }, {
                  min: 6,
                  max: 24,
                  message: '密码长度不符合要求',
                }]
              }
            >
              <Input placeholder="请输入密码(长度6-24位)" />
            </Form.Item>
          </Form>
        </Modal>

        <Drawer
          width={320}
          placement="right"
          closable={false}
          destroyOnClose={true}
          onClose={this.onCloseDrawer}
          visible={this.state.visibleDrawer}
        >
          <h4>操作记录</h4>
          <List
            dataSource={data}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </Drawer>
      </div >
    )
  }
}
