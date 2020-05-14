import React, { Component } from 'react'
import { Row, Col, Statistic } from 'antd'
import { LikeOutlined, SelectOutlined, TeamOutlined, StarOutlined } from '@ant-design/icons'
import WrapperSection from './WrapperSection'


export class Home extends Component {
  render() {
    const style = { textAlign: 'center' }
    return (
      <React.Fragment>
        <WrapperSection>
          <Row gutter={16}>
            <Col span={6} style={style} >
              <Statistic title="Feedback" value={10128} prefix={<LikeOutlined />} />
            </Col>
            <Col span={6} style={style}>
              <Statistic title="Forwarding" value={3893} prefix={<SelectOutlined />} />
            </Col>
            <Col span={6} style={style}>
              <Statistic title="Collection" value={1336} prefix={<StarOutlined />} />
            </Col>
            <Col span={6} style={style}>
              <Statistic title="Members" value={9335226} prefix={<TeamOutlined />} />
            </Col>
          </Row>
        </WrapperSection>
      </React.Fragment>
    )
  }
}

export default Home
