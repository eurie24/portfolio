import { createElement, FC } from 'react';
import { IconType, IconBaseProps } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
  props?: IconBaseProps;
  className?: string;
}

// Icon wrapper component to fix TypeScript errors with React 19
const IconWrapper: FC<IconWrapperProps> = ({ icon, props = {}, className }) => {
  return createElement(icon as FC<IconBaseProps>, { ...props, className });
};

export default IconWrapper;