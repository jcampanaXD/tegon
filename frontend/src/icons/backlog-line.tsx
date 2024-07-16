import type { IconProps } from './types';

export function BacklogLine({ size = 18, className, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.533 1.5V1.50232C10.5947 1.50342 10.656 1.50492 10.7168 1.50682L11.4664 1.5302L11.4197 3.02947L10.6701 3.00609C10.5404 3.00205 10.4075 3 10.2712 3H9.72875C9.59256 3 9.45971 3.00205 9.33004 3.00609L8.5804 3.02946L8.53366 1.53019L9.2833 1.50682C9.34407 1.50492 9.4053 1.50342 9.467 1.50232V1.5H10.533ZM7.02074 3.3198L6.33864 3.63162C6.22425 3.68391 6.11245 3.73939 6.00289 3.79804L5.99961 3.7998C5.90638 3.84911 5.81483 3.9011 5.72508 3.95566L5.08422 4.34528L4.30498 3.06357L4.94583 2.67395C5.06053 2.60422 5.17749 2.53777 5.2966 2.47473C5.43301 2.40175 5.57236 2.33261 5.71499 2.26741L6.3971 1.95559L7.02074 3.3198ZM13.6036 1.95577L14.2858 2.26741C14.4285 2.33259 14.5679 2.40171 14.7044 2.47466C14.8236 2.53778 14.9406 2.6043 15.0553 2.67411L15.6961 3.06391L14.9165 4.3454L14.2757 3.9556C14.186 3.90102 14.0945 3.84902 14.0013 3.79969L13.9985 3.79819C13.8888 3.73955 13.7769 3.68407 13.6625 3.63178L12.9803 3.32014L13.6036 1.95577ZM4.34553 5.08365L3.95563 5.72433C3.90102 5.81406 3.84899 5.90558 3.79963 5.99879L3.7982 6.0015C3.73955 6.11117 3.68407 6.22305 3.63178 6.33751L3.32014 7.0197L1.95577 6.39641L2.26741 5.71422C2.33261 5.57149 2.40175 5.43203 2.47473 5.29549C2.53787 5.17631 2.60443 5.05928 2.67426 4.94452L3.06417 4.30384L4.34553 5.08365ZM16.9361 4.30392L17.3259 4.94467C17.3957 5.05941 17.4622 5.17643 17.5253 5.2956C17.5983 5.4321 17.6674 5.57153 17.7326 5.71422L18.0442 6.39641L16.6799 7.0197L16.3682 6.33751C16.3159 6.22305 16.2605 6.11116 16.2018 6.0015L16.2003 5.99869C16.151 5.90549 16.099 5.81398 16.0444 5.72427L15.6546 5.08352L16.9361 4.30392ZM3.02947 8.58031L3.00609 9.32994C3.00205 9.45965 3 9.59253 3 9.72875V10.2712C3 10.4075 3.00205 10.5404 3.00609 10.6701L3.02947 11.4197L1.5302 11.4664L1.50682 10.7168C1.50492 10.656 1.50342 10.5947 1.50232 10.533H1.5V9.467H1.50232C1.50342 9.40527 1.50492 9.344 1.50682 9.28319L1.5302 8.53355L3.02947 8.58031ZM18.4698 8.53355L18.4932 9.28319C18.4951 9.344 18.4966 9.40527 18.4977 9.467H18.5V10.533H18.4977C18.4966 10.5947 18.4951 10.656 18.4932 10.7168L18.4698 11.4664L16.9705 11.4197L16.9939 10.6701C16.998 10.5404 17 10.4075 17 10.2712V9.72875C17 9.59253 16.998 9.45965 16.9939 9.32994L16.9705 8.58031L18.4698 8.53355ZM3.32014 12.9803L3.63178 13.6625C3.68407 13.7769 3.73955 13.8888 3.79819 13.9985L3.79969 14.0013C3.84902 14.0945 3.90102 14.186 3.9556 14.2757L4.3454 14.9165L3.06391 15.6961L2.67411 15.0553C2.6043 14.9406 2.53778 14.8236 2.47466 14.7044C2.40171 14.5679 2.33259 14.4285 2.26741 14.2858L1.95577 13.6036L3.32014 12.9803ZM18.0442 13.6036L17.7326 14.2858C17.6674 14.4284 17.5983 14.5679 17.5254 14.7043C17.4622 14.8235 17.3957 14.9406 17.3259 15.0553L16.9361 15.6961L15.6546 14.9165L16.0444 14.2757C16.099 14.186 16.151 14.0945 16.2003 14.0013L16.2018 13.9985C16.2605 13.8888 16.3159 13.7769 16.3682 13.6625L16.6799 12.9803L18.0442 13.6036ZM5.08352 15.6546L5.72427 16.0444C5.81398 16.099 5.90549 16.151 5.99869 16.2003L6.0015 16.2018C6.11116 16.2605 6.22305 16.3159 6.33751 16.3682L7.0197 16.6799L6.39641 18.0442L5.71422 17.7326C5.57153 17.6674 5.4321 17.5983 5.2956 17.5253C5.17643 17.4622 5.05941 17.3957 4.94467 17.3259L4.30392 16.9361L5.08352 15.6546ZM15.6961 16.9361L15.0553 17.3259C14.9406 17.3957 14.8235 17.4622 14.7043 17.5254C14.5679 17.5983 14.4284 17.6674 14.2858 17.7326L13.6036 18.0442L12.9803 16.6799L13.6625 16.3682C13.7769 16.3159 13.8888 16.2605 13.9985 16.2018L14.0013 16.2003C14.0945 16.151 14.186 16.099 14.2757 16.0444L14.9165 15.6546L15.6961 16.9361ZM8.58031 16.9705L9.32994 16.9939C9.45965 16.998 9.59253 17 9.72875 17H10.2712C10.4075 17 10.5404 16.998 10.6701 16.9939L11.4197 16.9705L11.4664 18.4698L10.7168 18.4932C10.656 18.4951 10.5947 18.4966 10.533 18.4977V18.5H9.467V18.4977C9.40527 18.4966 9.344 18.4951 9.28319 18.4932L8.53355 18.4698L8.58031 16.9705Z"
        fill={color ? color : 'currentColor'}
      />
      <path
        d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
}
