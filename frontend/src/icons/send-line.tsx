import type { IconProps } from './types';

export function SendLine({ size = 18, className, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.81731 3.18549L16.0215 7.68686C16.6999 8.01864 17.2556 8.29042 17.6668 8.54001C18.0738 8.78712 18.4699 9.08615 18.6817 9.52862C18.9756 10.1428 18.9756 10.8571 18.6817 11.4713C18.4699 11.9137 18.0738 12.2128 17.6668 12.4599C17.2556 12.7095 16.6999 12.9813 16.0214 13.3131L6.81735 17.8144C6.31516 18.06 5.89288 18.2666 5.55224 18.3971C5.22509 18.5224 4.81291 18.6458 4.39442 18.541C3.85633 18.4063 3.41397 18.0244 3.20212 17.5118C3.03736 17.1131 3.09922 16.6873 3.17547 16.3453C3.25487 15.9893 3.39754 15.5414 3.5672 15.0087L4.00932 13.6206C4.02428 13.5736 4.03901 13.5273 4.05354 13.4816C4.37868 12.4591 4.60306 11.7535 5.04047 11.2079C5.25723 10.9376 5.50957 10.6996 5.78967 10.5C5.50956 10.3003 5.2572 10.0623 5.04044 9.79196C4.60303 9.24639 4.37865 8.5408 4.05351 7.51831C4.03898 7.47262 4.02424 7.4263 4.00928 7.37933L3.56717 5.9912C3.3975 5.45853 3.25482 5.01062 3.17543 4.65457C3.09918 4.31262 3.03732 3.88685 3.20207 3.48814C3.41392 2.97548 3.85628 2.59361 4.39437 2.45888C4.81286 2.3541 5.22504 2.47746 5.55219 2.60281C5.89284 2.73333 6.31512 2.93987 6.81731 3.18549ZM4.73745 3.9203C4.67722 3.9412 4.62721 3.98437 4.59775 4.0409C4.59761 4.06379 4.59875 4.14547 4.63947 4.3281C4.7025 4.61076 4.82387 4.9942 5.00737 5.57035L5.43854 6.92411C5.82608 8.14089 5.97027 8.55373 6.21075 8.85367C6.44176 9.14181 6.74015 9.36866 7.07958 9.51419C7.43292 9.66568 7.86929 9.69419 9.14539 9.74216L9.36649 9.75048C9.76946 9.76562 10.0883 10.0967 10.0883 10.4999C10.0883 10.9032 9.76946 11.2343 9.36649 11.2494L9.14542 11.2577C7.86932 11.3057 7.43295 11.3342 7.07961 11.4857C6.74018 11.6312 6.44179 11.8581 6.21078 12.1462C5.9703 12.4462 5.82612 12.859 5.43858 14.0758L5.00741 15.4296C4.82391 16.0057 4.70254 16.3891 4.63952 16.6718C4.59879 16.8544 4.59765 16.9361 4.59779 16.959C4.62726 17.0155 4.67727 17.0587 4.7375 17.0796C4.76017 17.0764 4.8408 17.0633 5.01553 16.9964C5.28596 16.8928 5.64757 16.7167 6.19076 16.4511L15.3285 11.9822C16.0492 11.6297 16.5427 11.3875 16.8884 11.1777C17.2449 10.9612 17.3151 10.8519 17.3286 10.8237C17.4266 10.619 17.4266 10.3809 17.3286 10.1762C17.3151 10.148 17.2449 10.0387 16.8884 9.82222C16.5427 9.61238 16.0492 9.3702 15.3285 9.01771L6.19072 4.54882C5.64752 4.28317 5.28591 4.10712 5.01548 4.0035C4.84076 3.93655 4.76012 3.9235 4.73745 3.9203Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
}
