import type { IconProps } from './types';

export function BulletListLine({ size = 16, className, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.99998 12.2019C3.99998 12.5333 4.2686 12.8019 4.59998 12.8019H13.8C14.1314 12.8019 14.4 12.5333 14.4 12.2019C14.4 11.8706 14.1314 11.6019 13.8 11.6019H4.59998C4.2686 11.6019 3.99998 11.8706 3.99998 12.2019Z"
        fill={color ? color : 'currentColor'}
      />
      <path
        d="M3.99998 8.19998C3.99998 7.8686 4.2686 7.59998 4.59998 7.59998H13.8C14.1314 7.59998 14.4 7.8686 14.4 8.19998C14.4 8.53135 14.1314 8.79998 13.8 8.79998H4.59998C4.2686 8.79998 3.99998 8.53135 3.99998 8.19998Z"
        fill={color ? color : 'currentColor'}
      />
      <path
        d="M3.99998 4.19998C3.99998 3.8686 4.2686 3.59998 4.59998 3.59998H13.8C14.1313 3.59998 14.4 3.8686 14.4 4.19998C14.4 4.53135 14.1313 4.79998 13.8 4.79998H4.59998C4.2686 4.79998 3.99998 4.53135 3.99998 4.19998Z"
        fill={color ? color : 'currentColor'}
      />
      <path
        d="M2.79998 4.19998C2.79998 4.53135 2.53135 4.79998 2.19998 4.79998C1.8686 4.79998 1.59998 4.53135 1.59998 4.19998C1.59998 3.8686 1.8686 3.59998 2.19998 3.59998C2.53135 3.59998 2.79998 3.8686 2.79998 4.19998Z"
        fill={color ? color : 'currentColor'}
      />
      <path
        d="M2.79998 8.19998C2.79998 8.53135 2.53135 8.79998 2.19998 8.79998C1.8686 8.79998 1.59998 8.53135 1.59998 8.19998C1.59998 7.8686 1.8686 7.59998 2.19998 7.59998C2.53135 7.59998 2.79998 7.8686 2.79998 8.19998Z"
        fill={color ? color : 'currentColor'}
      />
      <path
        d="M2.79998 12.2019C2.79998 12.5333 2.53135 12.8019 2.19998 12.8019C1.8686 12.8019 1.59998 12.5333 1.59998 12.2019C1.59998 11.8706 1.8686 11.6019 2.19998 11.6019C2.53135 11.6019 2.79998 11.8706 2.79998 12.2019Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
}
