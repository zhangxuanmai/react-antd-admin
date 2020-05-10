import React from 'react'
import { Form, Input, Button, Table, Avatar, Modal, Descriptions, Divider } from 'antd'
import WrapperSection from './WrapperSection'
import { getData } from '../api/index'

const { Column } = Table

class TableBasic extends React.Component {
  form = React.createRef()
  formRef = React.createRef()
  state = {
    keywords: "",
    loading: false,
    visible: false,
    visible2: false,
    defaultCurrent: 1,
    defaultPageSize: 10,
    total: 1,
    current: 1,
    modalData: {},
    dataSource: [],
    record: {},
  }

  componentDidMount() {
    this.doFetch()
  }

  doFetch = async () => {
    this.setState(() => ({ loading: true }))
    const result = await getData()
    this.setState(() => ({
      dataSource: result.data.data,
      total: result.total,
      loading: false
    }))
  }



  onFinish = () => {
    const { keywords } = this.form.current.getFieldValue()
    this.setState(() => ({ keywords, current: 1 }))
    this.doFetch()
  }

  onReset = () => {
    this.form.current.resetFields()
    this.setState(() => ({ keywords: "" }))
    this.onFinish()
  }

  onModal = (record) => {
    this.setState(() => ({
      visible: true,
      modalData: record,
    }))
  }

  onDetail = (record) => {
    this.props.history.push({
      pathname: '/admin/examples/table-details',
      state: {
        id: record.id,
      }
    })
  }

  onChange = (pagination) => {
    const { current } = pagination
    this.setState(() => ({ current }))
    this.doFetch()
  }

  onModalComfirm = () => {
    this.onModalCancel()
  }

  onModalCancel = () => {
    this.setState(() => ({ visible: false }))
  }

  onInsert = (record) => {
    this.setState(() => ({
      visible2: true,
      record: record,
    }))
  }

  onModalComfirm2 = () => {
    console.log(1);
    this.setState(() => ({ visible2: false }))
    this.onModalCancel2()
  }

  onModalCancel2 = () => {
    this.setState(() => ({ visible2: false }))
  }


  render() {

    return (
      <React.Fragment>
        <WrapperSection>
          <Form
            layout="inline"
            name="advanced_search"
            className="ant-advanced-search-form"
            ref={this.form}
            onFinish={this.onFinish}
          >
            <Form.Item name="keywords" label="Keywords">
              <Input style={{ width: 240 }} placeholder="Please enter key words" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Search</Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={this.onReset} >Reset</Button>
            </Form.Item>
          </Form>
        </WrapperSection>
        <WrapperSection style={{ marginBottom: 0, padding: 0 }}>
          <Table
            rowKey="id"
            size="middle"
            loading={this.state.loading}
            dataSource={this.state.dataSource}
            onChange={this.onChange}
            pagination={{
              position: ['bottomCenter'],
              current: this.state.current,
              defaultCurrent: this.state.defaultCurrent,
              defaultPageSize: this.state.defaultPageSize,
              total: this.state.total
            }}
          >
            <Column
              title="Index"
              dataIndex="index"
              key="index"
              render={(text, record, index) => `${((this.state.current - 1) * 10) + (index + 1)}`}
            />
            <Column title="Username" dataIndex="username" key="username" />
            <Column title="Nickname" dataIndex="nickname" key="nickname" />
            <Column title="Phone Number" dataIndex="phone" key="phone" />
            <Column title="Date Time" dataIndex="createtime" key="createtime" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <span
                    style={{ cursor: 'pointer', color: '#1890ff' }}
                    onClick={() => this.onModal(record)}
                  >Modal</span>
                  <Divider type="vertical" />
                  <span
                    style={{ cursor: 'pointer', color: '#1890ff' }}
                    onClick={() => this.onInsert(record)}
                  >Action</span>
                  <Divider type="vertical" />
                  <span
                    style={{ cursor: 'pointer', color: '#1890ff' }}
                    onClick={() => this.onDetail(record)}
                  >Details</span>
                </span>
              )}
            />
          </Table>
        </WrapperSection>
        <Modal
          title="User Info"
          visible={this.state.visible}
          onCancel={this.onModalCancel}
          footer={[
            <Button key="submit" type="primary" onClick={this.onModalComfirm}>
              Close
            </Button>,
          ]}
        >
          <Descriptions column={2}>
            <Descriptions.Item label="Avatar">
              <Avatar src={this.state.modalData.avatar} />
            </Descriptions.Item>
            <Descriptions.Item label="Username">
              {this.state.modalData.username}
            </Descriptions.Item>
            <Descriptions.Item label="Nickname">
              {this.state.modalData.nickname}
            </Descriptions.Item>
            <Descriptions.Item label="Phone Number">
              {this.state.modalData.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Date Time">
              {this.state.modalData.createtime}
            </Descriptions.Item>
          </Descriptions>
        </Modal>
        <Modal
          title="User Edit Info"
          visible={this.state.visible2}
          onCancel={this.onModalCancel2}
          onOk={this.onModalComfirm2}
          destroyOnClose={true}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            ref={this.formRef}
            initialValues={this.state.record}
            name="advanced_modal"
          >
            <Form.Item name="username" label="username">
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="phone">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </React.Fragment>
    )
  }
}

export default TableBasic