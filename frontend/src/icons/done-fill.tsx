import type { IconProps } from './types';

export function DoneFill({ size = 18, className, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.72875 1.5C7.91879 1.5 6.50962 1.82576 5.2966 2.47473C4.09457 3.11097 3.11144 4.09371 2.47473 5.29549C1.82585 6.50948 1.5 7.91856 1.5 9.72875V10.2712C1.5 12.0814 1.82582 13.4904 2.47466 14.7044C3.11109 15.9061 4.09389 16.8889 5.29559 17.5253C6.50956 18.1742 7.91862 18.5 9.72875 18.5H10.2712C12.0813 18.5 13.4904 18.1742 14.7043 17.5254C15.9061 16.8889 16.8889 15.9061 17.5254 14.7043C18.1742 13.4904 18.5 12.0813 18.5 10.2712V9.72875C18.5 7.91862 18.1742 6.50956 17.5253 5.29559C16.8889 4.09389 15.9061 3.1111 14.7044 2.47466C13.4904 1.82582 12.0814 1.5 10.2712 1.5H9.72875ZM13.5326 8.83113C13.8255 8.53825 13.8255 8.06338 13.5326 7.77047C13.2398 7.47757 12.7649 7.47755 12.472 7.77043L9.00234 11.2398L7.52939 9.772C7.23599 9.47962 6.76111 9.48046 6.46874 9.77387C6.17636 10.0673 6.1772 10.5422 6.47061 10.8345L8.47386 12.8307C8.76689 13.1227 9.24103 13.1223 9.53356 12.8298L13.5326 8.83113Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
}
