import { type FC, type ReactElement } from 'react';

import {
  CoinGoldIcon, FlashIcon,
  FriendsIcon,
  HomeIcon, InfoIcon,
  LogoIcon,
  MarketIcon, RocketIcon,
} from '~/components/svg/icons';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  // Look line 15
  // eslint-disable-next-line react/no-unused-prop-types
  icon: string;
  fill?: string;
  stroke?: string;
  active: false | string;
  className?: string;
  width?: string;
  height?: string;
}

const getIcon = (props: IconProps): { viewBox: string, data: ReactElement<any, any> } => {
  const { icon } = props;
  switch (icon) {
    case 'coin-gold':
      return CoinGoldIcon();
    case 'flash':
      return FlashIcon();
    case 'friends':
      return FriendsIcon(props);
    case 'home':
      return HomeIcon(props);
    case 'info':
      return InfoIcon();
    case 'logo':
      return LogoIcon(props);
    case 'market':
      return MarketIcon(props);
    case 'rocket':
      return RocketIcon();
    default:
      return { viewBox: '0 0 0 0', data: <g /> };
  }
};

export const Icon: FC<IconProps> = (props) => {
  const {
    fill: fillIn,
    stroke: strokeIn,
    active = false,
    className,
    width = '18px',
    height = '18px',
  } = props;

  const fill = active && fillIn ? active : (fillIn || 'none');
  const stroke = active && strokeIn ? active : (strokeIn || 'none');

  const newProps: IconProps = { ...props, fill, stroke };

  const { viewBox, data } = getIcon(newProps);

  return (
    <svg
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
    >
      {data}
    </svg>
  );
};
