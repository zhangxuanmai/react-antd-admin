import React from 'react'
import { Layout } from 'antd'
import style from './index.module.css'

const { Footer } = Layout

function FooterComponent() {
  return (
    <Footer className={style.footer}>Deer Design Pro ©2020 Created by Uennk</Footer>
  )
}

export default FooterComponent
