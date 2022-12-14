import React, { FC } from 'react';
import './index.css';

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
  className?: string;
  id: string;
}

const Button: FC<IProps> = ({
  text,
  size = 'default',
  type = 'primary',
  loading = false,
  disabled = false,
  plain = false,
  events,
  className,
  id,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`weui-btn weui-btn_${type} ${
        size !== 'default' ? `weui-btn_${size}` : ''
      } ${className}`}
      disabled={disabled}
      onClick={events.customevent}
      {...props}
    >
      {loading && <i className="weui-loading" />}
      {text}
    </button>
  );
};

export default Button;
