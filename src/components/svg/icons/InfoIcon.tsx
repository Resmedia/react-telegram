import { type ReactElement } from 'react';

const InfoIcon = (): { viewBox: string, data: ReactElement<any, any> } => {
  return ({
    viewBox: '0 0 20 20',
    data: (
      <g>
        <path
          d={`M10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 
          18.3334 9.99996C18.3334 5.39759 14.6025 1.66663 10.0001 
          1.66663C5.39771 1.66663 1.66675 5.39759 1.66675 9.99996C1.66675 
          14.6023 5.39771 18.3333 10.0001 18.3333Z`}
          fill="#484D52"
          stroke="none"
        />
        <path
          d={`M10.0001 13.3333V9.99996M10.0001 6.66663H10.0084M18.3334 
          9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 
          18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 
          1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 
          9.99996Z`}
          stroke="#141517"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ),
  });
};

export default InfoIcon;
