import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

interface Props {
  className?: ClassValue;
}

function HomeIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 9.5L12 2.5L21 9.5V20.5C21 21.0304 20.7893 21.5391 20.4142 21.9142C20.0391 22.2893 19.5304 22.5 19 22.5H5C4.46957 22.5 3.96086 22.2893 3.58579 21.9142C3.21071 21.5391 3 21.0304 3 20.5V9.5Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M9 22.5V12.5H15V22.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function LeadIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 21.5V19.5C16 18.4391 15.5786 17.4217 14.8284 16.6716C14.0783 15.9214 13.0609 15.5 12 15.5H6C4.93913 15.5 3.92172 15.9214 3.17157 16.6716C2.42143 17.4217 2 18.4391 2 19.5V21.5"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 11.5C11.2091 11.5 13 9.70914 13 7.5C13 5.29086 11.2091 3.5 9 3.5C6.79086 3.5 5 5.29086 5 7.5C5 9.70914 6.79086 11.5 9 11.5Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 21.5V19.5C21.9993 18.6137 21.7044 17.7528 21.1614 17.0523C20.6184 16.3519 19.8581 15.8516 19 15.63"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 3.63C16.8604 3.85031 17.623 4.35071 18.1676 5.05232C18.7122 5.75392 19.0078 6.61683 19.0078 7.505C19.0078 8.39318 18.7122 9.25608 18.1676 9.95769C17.623 10.6593 16.8604 11.1597 16 11.38"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function NotificationIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.44V9.77" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M12.02 2C8.33999 2 5.35999 4.98 5.35999 8.66V10.76C5.35999 11.44 5.07999 12.46 4.72999 13.04L3.45999 15.16C2.67999 16.47 3.21999 17.93 4.65999 18.41C9.43999 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.65001 21.17C9.05001 20.57 8.67001 19.73 8.67001 18.82"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
}

export function ProfileIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4440_4530)">
        <path
          d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15C8.17157 15 12 15 12 15"
          stroke="#334155"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 11C12.2091 11 14 9.20914 14 7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7C6 9.20914 7.79086 11 10 11Z"
          stroke="#334155"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.42 12.6151C19.615 12.4201 19.8465 12.2654 20.1013 12.1599C20.3561 12.0543 20.6292 12 20.905 12C21.1808 12 21.4539 12.0543 21.7087 12.1599C21.9635 12.2654 22.195 12.4201 22.39 12.6151C22.585 12.8101 22.7397 13.0416 22.8452 13.2964C22.9508 13.5512 23.0051 13.8243 23.0051 14.1001C23.0051 14.3759 22.9508 14.649 22.8452 14.9038C22.7397 15.1586 22.585 15.3901 22.39 15.5851L16.95 21.0051L13 22.0051L13.99 18.0551L19.42 12.6151Z"
          stroke="#334155"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4440_4530">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SearchIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="#334155"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#334155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function VerifiedLeadIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.9999 3C10.7999 3 9.5999 3.6 8.9999 4.7C8.40111 4.54669 7.77292 4.55015 7.17585 4.71003C6.57878 4.86991 6.03292 5.18082 5.59086 5.61284C5.1488 6.04486 4.82541 6.58342 4.65185 7.17666C4.47829 7.7699 4.4604 8.39784 4.5999 9C3.5999 9.6 2.8999 10.8 2.8999 12C2.8999 13.2 3.5999 14.4 4.5999 15C4.2999 16.2 4.5999 17.5 5.5999 18.4C6.3999 19.2 7.6999 19.6 8.8999 19.4C9.4999 20.4 10.6999 21 11.8999 21C13.0999 21 14.2999 20.4 14.8999 19.3C16.0999 19.6 17.3999 19.3 18.2999 18.3C19.0999 17.5 19.4999 16.3 19.2999 15C20.2999 14.4 20.8999 13.2 20.8999 12C20.8999 10.8 20.2999 9.6 19.1999 9C19.4999 7.8 19.1999 6.5 18.1999 5.6C17.7724 5.17793 17.2485 4.86631 16.6735 4.69208C16.0986 4.51785 15.4898 4.48624 14.8999 4.6C14.2999 3.6 13.0999 3 11.8999 3H11.9999Z"
        fill="#10B981"
        stroke="#10B981"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function SortDescIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11 9H18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11 13H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3.00002 17L6.00002 20L9.00002 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.00002 18V4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function HamburgurIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function BackIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function NextArrow({ className }: Props) {
  return (
    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.909912 16.9201L7.42991 10.4001C8.19991 9.63008 8.19991 8.37008 7.42991 7.60008L0.909912 1.08008"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default HomeIcon;
