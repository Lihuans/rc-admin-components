import React, { memo } from 'react';
import './index.less' // 引入样式
export interface ButtonProps {
  /**
   * @description 按钮类型
   * @default "primary"
   */
  type?: 'primary' | 'default';
  /** 按钮文字 */
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/** 按钮组件 */
const Button: React.FC<ButtonProps> = (props) => {
  const { type = 'default', children, onClick } = props
  return (
    <button
      type='button'
      className={`dumi-btn ${type ? 'dumi-btn-' + type : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
