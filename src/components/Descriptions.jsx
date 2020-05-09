import React, { Component } from 'react'
import WrapperSection from './WrapperSection'
import { PageHeader, Descriptions } from 'antd'


export class Description extends Component {
  render() {
    return (
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Table Row Details"
        subTitle="This is a subtitle"
      >
        <WrapperSection style={{ marginBottom: 0 }}>
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association ID">
              {this.props.location.state.id}
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
            <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
            <Descriptions.Item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </WrapperSection>
      </PageHeader>
    )
  }
}

export default Description
