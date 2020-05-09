import React from 'react'
import classNames from 'classnames'
import style from './index.module.css'

function WrapperSection(props) {
  return (
    <section className={classNames(style.wrapper)} style={props.style}>
      {props.children}
    </section>
  )
}

export default WrapperSection
