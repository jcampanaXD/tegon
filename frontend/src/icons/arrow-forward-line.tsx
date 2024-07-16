import type { IconProps } from './types';

export function ArrowForwardLine({ size = 18, className, color }: IconProps) {
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
        d="M9.97806 3.42263C9.05728 3.49737 8.33333 4.26832 8.33333 5.20835L8.333 6.97302L8.23269 6.99426C4.49791 7.80818 1.75 11.1348 1.75 15.0545C1.75 15.3411 1.76464 15.6268 1.79355 15.9107C1.86245 16.5868 2.72322 16.83 3.13575 16.2898L3.31079 16.0691C4.56202 14.5498 6.35233 13.5687 8.333 13.349L8.33333 15.4285C8.33333 15.8292 8.46766 16.2183 8.71486 16.5337C9.32527 17.3125 10.4514 17.449 11.2302 16.8386L17.75 11.7285C17.8635 11.6395 17.9659 11.5372 18.0549 11.4236C18.6653 10.6448 18.5288 9.51868 17.75 8.90827L11.2302 3.79821C10.9149 3.55102 10.5257 3.41669 10.125 3.41669L9.97806 3.42263ZM10.125 4.91669C10.1902 4.91669 10.2536 4.93855 10.3049 4.9788L16.8247 10.0888C16.9514 10.1882 16.9737 10.3715 16.8743 10.4983C16.8598 10.5168 16.8431 10.5335 16.8247 10.5479L10.3049 15.658C10.1781 15.7574 9.99481 15.7352 9.89544 15.6084C9.8552 15.557 9.83333 15.4937 9.83333 15.4284L9.833 12.5549C9.83295 12.1342 9.48697 11.7959 9.06639 11.8052L8.85105 11.81L8.54602 11.8258C6.62089 11.9577 4.82704 12.6901 3.38429 13.882L3.347 13.914L3.35102 13.8867C3.8559 10.9999 6.19979 8.71706 9.17379 8.35453C9.55009 8.30865 9.83299 7.98921 9.83304 7.61013L9.83333 5.20844C9.83333 5.04727 9.96392 4.91669 10.125 4.91669Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
}
