import React, { Component, useState, useRef } from 'react';
import { Space } from 'antd';
import PropTypes from 'prop-types';


function Tag(props) {
  const { label, value, checked } = props
  const [_checked, setChecked] = useState(checked)
  const tagRef = useRef()

  const item = {
    border: '1px solid #1890ff',
    borderColor: _checked ? '#1890ff' : '#d9d9d9',
    padding: '3px 12px',
    borderRadius: '2px',
    cursor: 'pointer',
    userSelect: 'none',
    overflow: 'hidden',
    background: _checked ? '#1890ff' : '#fff',
    color: _checked ? '#fff' : 'rgba(0, 0, 0, 0.65)',
  }

  const onClick = async (e) => {
    setChecked(!_checked)
    props.onChange && props.onChange(tagRef.current.dataset.value)
  }

  return (
    <div ref={tagRef} style={item} onClick={onClick} data-value={value}>{label}</div>
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

  onChange = (value) => {
    const exist = this.state.checked.includes(value)

    if (exist) {
      const index = this.state.checked.findIndex((item) => item === value)
      this.state.checked.splice(index, 1)

      this.setState((state) => {
        const checked = [...state.checked]
        return { checked }
      }, () => (this.props.onChange && this.props.onChange(this.state.checked)))
    } else {
      this.setState((state) => {
        const checked = [...state.checked, ...[value]]
        return { checked }
      }, () => (this.props.onChange && this.props.onChange(this.state.checked)))
    }

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
