import React, { Component } from 'react'
import { Row, Card, Button } from 'antd'

import { Map, Markers } from 'react-amap'
import styles from './index.module.css'

const mapConfig = {
  center: { longitude: 105, latitude: 32.5 },
  initZoom: 5,
  scaledZoom: 10
}

const projectMarkers = [
  {
    position: { longitude: 112.42, latitude: 34.16 },
    city: '郑州市',
    count: 8
  },
  {
    position: { longitude: 120.15, latitude: 30.28 },
    city: '杭州市',
    count: 5
  },
  {
    position: { longitude: 102.54, latitude: 30.05 },
    city: '成都市',
    count: 6
  },
  {
    position: { longitude: 106.42, latitude: 26.16 },
    city: '贵阳市',
    count: 1
  },
  {
    position: { longitude: 113.27, latitude: 23.13 },
    city: '广州市',
    count: 10
  }
]

const equipMarkers = [
  {
    position: { longitude: 120.25, latitude: 30.28 },
    location: '太子湾公园',
    count: 20
  },
  {
    position: { longitude: 120.08, latitude: 30.18 },
    location: '市民中心',
    count: 15
  },
  {
    position: { longitude: 119.78, latitude: 30.08 },
    location: '西湖文化广场',
    count: 10
  }
]

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      markers: projectMarkers,
      mapCenter: mapConfig.center,
      mapZoom: mapConfig.initZoom
    }
    this.toolEvents = {
      created: (tool) => {
        this.tool = tool
      }
    }
    this.markerEvents = {
      click: (e, marker) => {
        const extData = marker.getExtData()
        this.setState({
          markers: equipMarkers,
          mapCenter: extData.position,
          mapZoom: mapConfig.scaledZoom
        })
      }
    }
  }

  renderMarkerFn = ({ city, count }) => (
    <div className={styles.markerStyle}>
      <Row className={styles.row}>
        <span className={styles.span}>{city}</span>
        <label className={styles.label}>{count}</label>
      </Row>
    </div>
  )

  renderMarkerFn2 = ({ location, count }) => (
    <div className={styles.markerStyle}>
      <span className={styles.span}>{location}</span>
      <Row className={styles.row}>
        <span>设备</span>
        <span><label className={styles.label}>{count}</label> 台</span>
      </Row>
    </div>
  )

  renderButton = (mapZoom) => {
    const BtnClickFn = () => this.setState({
      markers: projectMarkers,
      mapCenter: mapConfig.center,
      mapZoom: mapConfig.initZoom
    })
    return (
      mapZoom === mapConfig.scaledZoom
        ? <div style={{ position: 'absolute', top: 95, left: 40, zIndex: 1000 }}>
          <Button onClick={BtnClickFn}>返回</Button>
        </div>
        : null
    )
  }

  render() {
    const { markers, mapCenter, mapZoom } = this.state
    return (
      <React.Fragment>
        <Card title="地图示例" style={{ marginTop: 24 }}>
          <div style={{ width: '100%', height: 650 }}>
            {this.renderButton(mapZoom)}
            <Map
              amapkey={'54b47be90d513be84650bbc47b858177'}
              scrollWheel={false}
              doubleClickZoom={false}
              center={mapCenter}
              zoom={mapZoom}
            >
              <Markers
                render={mapZoom === mapConfig.scaledZoom ? this.renderMarkerFn2 : this.renderMarkerFn}
                markers={markers}
                events={this.markerEvents}
              />
            </Map>
          </div>
        </Card>
      </React.Fragment>
    )
  }
}
