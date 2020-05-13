import React, { Component, useState, useRef } from 'react'
import { Space } from 'antd'
import PropTypes from 'prop-types'
import style from './index.module.css'
import classNames from 'classnames'


function Tag(props) {
  const { label, value, checked } = props
  const [_checked, setChecked] = useState(checked)
  const tagRef = useRef()

  const onClick = async (e) => {
    setChecked(!_checked)
    props.onChange && props.onChange(tagRef.current.dataset.value)
  }

  return (
    <div
      ref={tagRef}
      className={classNames(style.normal, _checked ? style.check : style.uncheck)}
      onClick={onClick}
      data-value={value}
    >
      {label}
    </div>
  )
}

// propTypes
Tag.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
}

// defaultProps
Tag.defaultProps = {
  label: '',
  value: '',
  checked: false,
};

export class SelectedTags extends Component {
  state = {
    checked: ['apple'],
    options: [
      {
        label: 'apple',
        value: 'apple',
      },
      {
        label: 'banana',
        value: 'banana',
      },
      {
        label: 'orange',
        value: 'orange',
      }
    ]
  }

  onChange = async (value) => {
    const exist = this.state.checked.includes(value)

    if (exist) {
      const index = this.state.checked.findIndex((item) => item === value)
      this.state.checked.splice(index, 1)
      await this.setState({ checked: this.state.checked })
    } else {
      const checked = [...this.state.checked, ...[value]]
      await this.setState({ checked: checked})
    }

    await this.props.onChange && this.props.onChange(this.state.checked)
  }

  render() {
    const { checked, options } = this.state
    return (
      <div>
        <Space>
          {
            options.map((item, index) => {
              return (
                <Tag
                  key={index}
                  label={item.label}
                  value={item.value}
                  checked={checked.includes(item.value)}
                  onChange={this.onChange}
                />
              )
            })
          }
        </Space>
      </div>
    )
  }
}

export default SelectedTags
