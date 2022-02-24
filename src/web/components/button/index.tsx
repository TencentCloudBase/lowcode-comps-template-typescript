import React, { FC } from 'react';
import { Button as RawButton } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './index.less';

interface IProps {
  /**
   * 组件类型
   */
  type: 'primary' | 'warn' | 'default',
  /**
   * 按钮大小
   */
  size: 'default' | 'mini',
  /**
   * 是否禁用
   */
  disabled: boolean,
  /**
   * 加载中
   */
  loading: boolean,
  /**
   * 镂空
   */
  plain: boolean,

  /**
   * 按钮内容
   */
  text: boolean,

  /**
   * 低码平台注入的事件触发器
   */
  events: {
    [key: string]: (...args: any[]) => any
  },
}

const Button: FC<IProps> = ({
  text,
  size = 'default',
  type = 'primary',
  loading = false,
  disabled = false,
  plain = false,
  events,
  ...props
}) => {
  return (
    <RawButton
      type={type}
      size={size === 'mini' ? 'small' : 'normal'}
      disabled={disabled}
      plain={plain}
      onClick={events.customevent}
      {...props}
    >
      {loading && <i className="weui-loading" />}
      {text}
    </RawButton>
  );
};

export default Button;
