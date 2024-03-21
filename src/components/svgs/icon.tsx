import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import exp from "constants";
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 22.5V12.5H15V22.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InitialStateIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.4118 3.34355C9.14282 3.71408 8.00804 4.32575 7.03345 5.22941C6.72554 5.51484 6.6688 5.82448 6.80823 6.21092C7.55517 8.28085 8.29312 10.3539 9.03488 12.4255C9.28916 13.1358 9.54103 13.8475 9.80327 14.555C9.9984 15.0819 10.5685 15.2057 10.9744 14.8162C11.2411 14.5602 11.5272 14.3284 11.8293 14.1163C12.3845 13.726 12.9675 13.3873 13.6473 13.27C14.4295 13.1351 15.1983 13.2521 15.9515 13.4614C16.8524 13.7118 17.7456 13.963 18.7005 13.8658C19.5236 13.7821 20.3058 13.5731 21.0579 13.2337C21.3406 13.1061 21.5586 12.93 21.6326 12.6148V3.5878C21.6184 3.566 21.6118 3.54213 21.6084 3.51791C21.5136 3.26847 21.3361 3.09652 21.079 3H20.8715C20.6788 3.06504 20.5103 3.16952 20.3439 3.28715C19.6415 3.78292 18.8922 4.18459 18.0311 4.3216C17.535 4.40048 17.0454 4.35619 16.5704 4.17352C16.086 3.98739 15.6256 3.74833 15.1499 3.54282C14.5544 3.28542 13.9438 3.08788 13.2937 3.0301C13.2484 3.02595 13.2041 3.01038 13.1595 3H12.4333C12.3825 3.00969 12.3323 3.02629 12.2811 3.02837C11.6445 3.05535 11.0214 3.16537 10.4115 3.3432L10.4118 3.34355ZM13.1297 4.37453C13.2917 4.39114 13.3605 4.46171 13.3982 4.6091C13.5684 5.27197 13.7449 5.93346 13.9192 6.59564C13.9199 6.59564 13.921 6.59564 13.9217 6.59564C13.9217 6.59633 13.922 6.59702 13.9224 6.59772C14.4489 6.63681 14.9212 6.85512 15.401 7.04713C15.6256 7.13708 15.8435 7.24225 16.0649 7.33982C16.1061 7.35781 16.1494 7.39829 16.1933 7.37095C16.2518 7.33463 16.2134 7.27512 16.203 7.22911C16.0829 6.69528 15.9584 6.16249 15.8397 5.62832C15.8217 5.54771 15.7549 5.4491 15.8235 5.38302C15.8978 5.31106 15.9854 5.39825 16.0608 5.42731C16.8046 5.71446 17.5685 5.78296 18.3521 5.64458C18.5677 5.60652 18.5967 5.62209 18.6154 5.83797C18.6573 6.32544 18.6915 6.81325 18.7285 7.30107C18.7299 7.31837 18.7292 7.33567 18.7303 7.35296C18.7479 7.66157 18.787 7.68717 19.0704 7.58199C19.4274 7.44949 19.7754 7.29796 20.1065 7.10906C20.2487 7.02775 20.2812 7.04401 20.2816 7.20281C20.284 8.02656 20.2812 8.85066 20.2837 9.67441C20.284 9.8038 20.2249 9.87334 20.109 9.91866C19.7384 10.0629 19.362 10.1857 18.9718 10.2632C19.023 10.9105 19.0717 11.5582 19.1264 12.2052C19.144 12.4127 19.1247 12.4477 18.9206 12.4788C18.4857 12.5449 18.0518 12.5515 17.6149 12.4878C17.4495 12.4639 17.3775 12.3871 17.3433 12.2315C17.2132 11.6412 17.0703 11.0538 16.9427 10.4629C16.9088 10.3058 16.8316 10.2283 16.6783 10.1892C16.0369 10.0263 15.4017 9.8377 14.7516 9.70935C14.9295 10.3771 15.1083 11.0444 15.2851 11.7125C15.3408 11.9228 15.327 11.9429 15.1215 11.9197C14.3901 11.8374 13.6629 11.8184 12.9498 12.0453C12.8288 12.0837 12.7852 12.0159 12.7485 11.919C12.5281 11.3375 12.306 10.7566 12.0832 10.1761C11.9974 9.95256 11.9905 9.94807 11.7742 10.0453C11.1979 10.3044 10.6803 10.6594 10.188 11.0507C10.0603 11.152 10.007 11.1271 9.95688 10.9863C9.63478 10.0802 9.312 9.17414 8.98367 8.27047C8.92832 8.11755 8.9899 8.03417 9.10511 7.95356C9.57804 7.62178 10.0787 7.33913 10.6083 7.10836C10.8519 7.00215 10.8505 7.00008 10.754 6.75271C10.5426 6.21092 10.3305 5.66914 10.1209 5.12666C10.0392 4.91528 10.0517 4.88967 10.2672 4.81218C10.9595 4.56377 11.6687 4.40186 12.4077 4.37799C12.6492 4.37003 12.8879 4.34962 13.1311 4.37453H13.1297Z"
        fill="#B8D7C9"
      />
      <path
        d="M10.5035 18.496C9.6593 16.1548 8.81583 13.8133 7.97132 11.4725C7.35169 9.75478 6.73172 8.03671 6.10863 6.32036C6.04982 6.15811 6.04117 6.02733 6.15741 5.87441C6.31932 5.66164 6.32382 5.4122 6.19962 5.17175C6.07991 4.93995 5.88029 4.83374 5.55785 4.82959C5.18178 4.89671 4.75105 5.00327 4.34662 5.18628C4.10444 5.29561 3.97055 5.5966 4.00549 5.83566C4.04701 6.12143 4.24352 6.36603 4.50922 6.40651C4.68255 6.43315 4.74932 6.52241 4.8026 6.67118C5.41116 8.36849 6.02421 10.0644 6.63623 11.7604C7.4752 14.0849 8.31348 16.4098 9.15314 18.7344C9.31575 19.1841 9.47489 19.6353 9.65099 20.0795C9.74544 20.3182 9.92431 20.477 10.1966 20.4974C10.7263 20.5376 11.065 20.0881 10.8896 19.5692C10.7678 19.209 10.6325 18.8537 10.5035 18.496Z"
        fill="#B8D7C9"
      />
      <path
        d="M11.079 6.93838C10.9399 6.9799 10.8704 7.03352 10.9344 7.19509C11.269 8.04063 11.599 8.88756 11.9242 9.73656C11.983 9.88983 12.0657 9.92477 12.2141 9.86976C13.0431 9.56289 13.8931 9.57361 14.7504 9.70889C14.6781 9.44872 14.6027 9.18959 14.5339 8.92873C14.3287 8.15203 14.1256 7.37464 13.9222 6.5976C13.9222 6.59691 13.9218 6.59622 13.9215 6.59553C13.9208 6.59553 13.9198 6.59553 13.9191 6.59553C12.9472 6.49969 12.0066 6.6623 11.0794 6.93873L11.079 6.93838Z"
        fill="#B8D7C9"
      />
      <path
        d="M17.6608 7.82049C17.2429 7.79143 16.845 7.6866 16.4579 7.53091C16.3005 7.4676 16.2745 7.48836 16.3102 7.64578C16.4925 8.45396 16.6793 9.2611 16.8623 10.0693C16.89 10.1921 16.9582 10.2464 17.0844 10.2696C17.7138 10.3845 18.3413 10.3706 18.9689 10.262C18.9589 10.2001 18.9451 10.1388 18.9399 10.0765C18.8811 9.36039 18.8236 8.64424 18.7652 7.92774C18.7482 7.7205 18.7347 7.71255 18.5344 7.74991C18.2459 7.80354 17.9563 7.8409 17.6608 7.82049Z"
        fill="#B8D7C9"
      />
      <path
        d="M18.9696 10.2639L18.9719 10.2612C18.9711 10.2612 18.97 10.2612 18.9692 10.2616C18.9692 10.2624 18.9692 10.2631 18.9692 10.2635L18.9696 10.2639Z"
        fill="#B8D7C9"
      />
    </svg>
  );
}

export function SuccessIcon({ className }: Props) {
  return (
    <svg width="102" className={cn("", className)} height="101" viewBox="0 0 102 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M51 12.625C45.9 12.625 40.8 15.15 38.25 19.7792C35.7051 19.134 33.0353 19.1485 30.4977 19.8214C27.9602 20.4942 25.6403 21.8026 23.7615 23.6207C21.8828 25.4388 20.5084 27.7052 19.7707 30.2018C19.0331 32.6983 18.9571 35.3409 19.55 37.875C15.3 40.4 12.325 45.45 12.325 50.5C12.325 55.55 15.3 60.6 19.55 63.125C18.275 68.175 19.55 73.6458 23.8 77.4333C27.2 80.8 32.7249 82.4833 37.8249 81.6417C40.3749 85.85 45.475 88.375 50.575 88.375C55.6749 88.375 60.775 85.85 63.325 81.2208C68.4249 82.4833 73.95 81.2208 77.7749 77.0125C81.1749 73.6458 82.8749 68.5958 82.0249 63.125C86.2749 60.6 88.825 55.55 88.825 50.5C88.825 45.45 86.275 40.4 81.6 37.875C82.875 32.825 81.6 27.3542 77.35 23.5667C75.5329 21.7904 73.3064 20.479 70.8628 19.7458C68.4192 19.0126 65.8321 18.8796 63.325 19.3583C60.775 15.15 55.6749 12.625 50.575 12.625H51Z"
        fill="#1E1E1E"
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38.25 50.5L46.75 58.9167L63.75 42.0833" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function StatusIcon({ isCompleted, className }: { isCompleted?: boolean; className?: ClassValue }) {
  return (
    <svg className={cn("", className)} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 12.7058C20 12.1606 19.9488 11.6267 19.8465 11.1041C19.7328 10.5816 19.5764 10.0818 19.3774 9.60466C19.1784 9.12756 18.9311 8.67318 18.6354 8.24151C18.3511 7.80985 18.027 7.41226 17.6631 7.04875C17.2992 6.69661 16.9012 6.37286 16.4691 6.07751C16.0483 5.79352 15.5991 5.54929 15.1215 5.34481C14.6439 5.14034 14.1436 4.98699 13.6205 4.88475C13.0974 4.77115 12.5572 4.71436 12 4.71436C11.4428 4.71436 10.9026 4.77115 10.3795 4.88475C9.85643 4.98699 9.35608 5.14034 8.87846 5.34481C8.40085 5.54929 7.95167 5.79352 7.53092 6.07751C7.09879 6.37286 6.70078 6.69661 6.33689 7.04875C5.97299 7.41226 5.6489 7.80985 5.36461 8.24151C5.06894 8.67318 4.82161 9.12756 4.6226 9.60466C4.4236 10.0818 4.26724 10.5816 4.15352 11.1041C4.05117 11.6267 4 12.1606 4 12.7058C4 13.2625 4.05117 13.802 4.15352 14.3246C4.26724 14.8471 4.4236 15.3469 4.6226 15.824C4.82161 16.3011 5.06894 16.7555 5.36461 17.1872C5.6489 17.6075 5.97299 17.9994 6.33689 18.3629C6.70078 18.7264 7.09879 19.0502 7.53092 19.3342C7.95167 19.6295 8.40085 19.8794 8.87846 20.0839C9.35608 20.2884 9.85643 20.4417 10.3795 20.544C10.9026 20.6576 11.4428 20.7144 12 20.7144C12.5572 20.7144 13.0974 20.6576 13.6205 20.544C14.1436 20.4417 14.6439 20.2884 15.1215 20.0839C15.5991 19.8794 16.0483 19.6295 16.4691 19.3342C16.9012 19.0502 17.2992 18.7264 17.6631 18.3629C18.027 17.9994 18.3511 17.6075 18.6354 17.1872C18.9311 16.7555 19.1784 16.3011 19.3774 15.824C19.5764 15.3469 19.7328 14.8471 19.8465 14.3246C19.9488 13.802 20 13.2625 20 12.7058Z"
        stroke={isCompleted ? "#10B981" : "#B8D7C9"}
        strokeWidth="2"
      />
    </svg>
  );
}

export function StatusCompletedIcon({ isCompleted, className }: { isCompleted?: boolean; className?: ClassValue }) {
  return (
    <svg className={cn("", className)} width="25" height="25" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 9.56277C17 9.01751 16.9488 8.48361 16.8465 7.96107C16.7328 7.43852 16.5764 6.9387 16.3774 6.4616C16.1784 5.98449 15.9311 5.53011 15.6354 5.09845C15.3511 4.66678 15.027 4.26919 14.6631 3.90569C14.2992 3.55354 13.9012 3.22979 13.4691 2.93444C13.0483 2.65045 12.5991 2.40622 12.1215 2.20175C11.6439 1.99727 11.1436 1.84392 10.6205 1.74168C10.0974 1.62809 9.55721 1.57129 9 1.57129C8.44279 1.57129 7.90263 1.62809 7.37953 1.74168C6.85643 1.84392 6.35608 1.99727 5.87846 2.20175C5.40085 2.40622 4.95167 2.65045 4.53092 2.93444C4.09879 3.22979 3.70078 3.55354 3.33689 3.90569C2.97299 4.26919 2.6489 4.66678 2.36461 5.09845C2.06894 5.53011 1.82161 5.98449 1.6226 6.4616C1.4236 6.9387 1.26724 7.43852 1.15352 7.96107C1.05117 8.48361 1 9.01751 1 9.56277C1 10.1194 1.05117 10.659 1.15352 11.1815C1.26724 11.7041 1.4236 12.2039 1.6226 12.681C1.82161 13.1581 2.06894 13.6125 2.36461 14.0441C2.6489 14.4644 2.97299 14.8563 3.33689 15.2199C3.70078 15.5834 4.09879 15.9071 4.53092 16.1911C4.95167 16.4864 5.40085 16.7364 5.87846 16.9408C6.35608 17.1453 6.85643 17.2987 7.37953 17.4009C7.90263 17.5145 8.44279 17.5713 9 17.5713C9.55721 17.5713 10.0974 17.5145 10.6205 17.4009C11.1436 17.2987 11.6439 17.1453 12.1215 16.9408C12.5991 16.7364 13.0483 16.4864 13.4691 16.1911C13.9012 15.9071 14.2992 15.5834 14.6631 15.2199C15.027 14.8563 15.3511 14.4644 15.6354 14.0441C15.9311 13.6125 16.1784 13.1581 16.3774 12.681C16.5764 12.2039 16.7328 11.7041 16.8465 11.1815C16.9488 10.659 17 10.1194 17 9.56277Z"
        fill="#10B981"
        stroke="#10B981"
        stroke-width="2"
      />
      <path
        d="M12.4101 6.53526L7.59625 11.344L5.58955 9.33945C5.49451 9.25182 5.38303 9.20801 5.2551 9.20801C5.12717 9.20801 5.01934 9.25182 4.93162 9.33945C4.83658 9.43439 4.78906 9.54575 4.78906 9.67355C4.78906 9.80134 4.83658 9.90906 4.93162 9.99669L7.26728 12.3408C7.35501 12.4285 7.46466 12.4723 7.59625 12.4723C7.72784 12.4723 7.83749 12.4285 7.92522 12.3408L13.0681 7.19249C13.1631 7.10486 13.2106 6.99714 13.2106 6.86935C13.2106 6.74155 13.1631 6.63019 13.0681 6.53526C12.9804 6.44762 12.8725 6.40381 12.7446 6.40381C12.6167 6.40381 12.5052 6.44762 12.4101 6.53526Z"
        fill="white"
      />
    </svg>
  );
}

export function TranslateIcon({ className }: { className?: ClassValue }) {
  return (
    <svg className={cn("", className)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4562_15913)">
        <path d="M4.16663 6.66663L9.16663 11.6666" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.33337 11.6666L8.33337 6.66663L10 4.16663" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1.66663 4.16663H11.6666" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.83337 1.66663H6.66671" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18.3333 18.3333L14.1667 10L10 18.3333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.6666 15H16.6666" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_4562_15913">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LockIcon({ className }: { className?: ClassValue }) {
  return (
    <svg className={cn("", className)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8333 9.16663H4.16667C3.24619 9.16663 2.5 9.91282 2.5 10.8333V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V10.8333C17.5 9.91282 16.7538 9.16663 15.8333 9.16663Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.83338 9.16667V5.83334C5.83234 4.80005 6.21528 3.80323 6.90785 3.03639C7.60043 2.26956 8.55323 1.78742 9.5813 1.68358C10.6094 1.57974 11.6393 1.86159 12.4713 2.47443C13.3032 3.08728 13.8778 3.98738 14.0834 5.00001"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function LogoutIcon({ className }: { className?: ClassValue }) {
  return (
    <svg className={cn("", className)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
        stroke="#EF4444"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M13.3334 14.1667L17.5 10L13.3334 5.83337" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17.5 10H7.5" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function CautionIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.4999 3.64282C13.3247 3.64282 14.0934 4.05362 14.5641 4.73974L14.6548 4.88048L21.6628 16.7979C21.8758 17.1736 21.9916 17.5982 21.9996 18.0319C22.0075 18.4656 21.9072 18.8943 21.7081 19.2778C21.509 19.6613 21.2176 19.987 20.8612 20.2245C20.5048 20.462 20.095 20.6035 19.6703 20.6358L19.5018 20.6428H5.48847C5.06328 20.6379 4.64623 20.5234 4.27626 20.31C3.90628 20.0965 3.59544 19.7911 3.37275 19.4221C3.15006 19.0532 3.02278 18.6328 3.00278 18.2002C2.98279 17.7676 3.07074 17.3369 3.25843 16.9483L3.34393 16.7856L10.3485 4.87696C10.5727 4.50031 10.8885 4.18888 11.2654 3.97271C11.6422 3.75653 12.0674 3.64292 12.4999 3.64282ZM12.4999 11.8499H11.6362L11.5352 11.8561C11.3252 11.8815 11.1318 11.9844 10.9914 12.1454C10.851 12.3064 10.7735 12.5142 10.7735 12.7295C10.7735 12.9448 10.851 13.1527 10.9914 13.3137C11.1318 13.4746 11.3252 13.5776 11.5352 13.603L11.6362 13.6092V16.2481L11.6423 16.351C11.665 16.5474 11.752 16.7302 11.8893 16.87C12.0266 17.0098 12.2061 17.0985 12.3989 17.1216L12.4999 17.1278H13.3636L13.4646 17.1216C13.6574 17.0985 13.8369 17.0098 13.9742 16.87C14.1115 16.7302 14.1985 16.5474 14.2212 16.351L14.2273 16.2481L14.2212 16.1452C14.2006 15.9657 14.1262 15.7971 14.0081 15.6622C13.8901 15.5273 13.7341 15.4328 13.5614 15.3913L13.4646 15.3738L13.3636 15.3685V12.7295L13.3575 12.6266C13.3348 12.4303 13.2478 12.2474 13.1105 12.1076C12.9733 11.9678 12.7937 11.8792 12.601 11.8561L12.4999 11.8499ZM12.5085 9.21097L12.3989 9.21713C12.1889 9.24256 11.9955 9.34552 11.8551 9.5065C11.7147 9.66748 11.6372 9.87531 11.6372 10.0906C11.6372 10.3059 11.7147 10.5137 11.8551 10.6747C11.9955 10.8357 12.1889 10.9387 12.3989 10.9641L12.4999 10.9703L12.6096 10.9641C12.8195 10.9387 13.013 10.8357 13.1534 10.6747C13.2937 10.5137 13.3713 10.3059 13.3713 10.0906C13.3713 9.87531 13.2937 9.66748 13.1534 9.5065C13.013 9.34552 12.8195 9.24256 12.6096 9.21713L12.5085 9.21097Z"
        fill="#FB923C"
      />
    </svg>
  );
}

export function LightBulb({ className }: Props) {
  return (
    <svg className={cn("", className)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="16" fill="#FDE68A" />
      <path
        d="M16.3424 23.4538C15.5428 23.4538 14.7432 23.4407 13.9436 23.4596C13.4494 23.4712 13.1993 23.3273 13.1601 22.772C13.0597 21.2978 12.5858 20.0287 11.5783 18.8352C9.3628 16.2111 9.80911 12.4255 12.4041 10.2623C15.0107 8.08888 18.7556 8.35492 21.038 10.8758C23.3103 13.385 23.194 17.1415 20.7487 19.5184C19.8619 20.3791 19.6744 21.5043 19.5566 22.6309C19.4869 23.3026 19.2223 23.4988 18.5928 23.464C17.8441 23.4233 17.091 23.4538 16.3409 23.4552L16.3424 23.4538ZM16.2857 22.5437C16.8192 22.5437 17.3556 22.5059 17.8834 22.5539C18.4532 22.6062 18.6771 22.4289 18.7643 21.8328C18.9402 20.6218 19.3691 19.5286 20.3199 18.6433C21.3622 17.6721 21.7838 16.3696 21.7635 14.9594C21.7286 12.6275 20.0902 10.5283 17.8732 9.89591C15.6475 9.26061 13.2575 10.1532 11.9563 12.1042C10.6741 14.0275 10.7352 16.4917 12.3125 18.306C13.2851 19.4239 13.8404 20.6306 13.9829 22.0683C14.0178 22.4158 14.1646 22.5728 14.5426 22.5524C15.1226 22.5219 15.7056 22.5437 16.2871 22.5437H16.2857Z"
        fill="#13243E"
        stroke="#13243E"
        strokeWidth="0.5"
      />
      <path
        d="M16.4441 24.5424C17.1216 24.5424 17.7976 24.5453 18.475 24.5424C18.7919 24.5409 19.0871 24.5947 19.0769 24.9858C19.0667 25.3623 18.7803 25.4292 18.4576 25.4292C17.1041 25.4248 15.7507 25.4248 14.3957 25.4292C14.0803 25.4292 13.7779 25.3856 13.7604 25.0061C13.7401 24.5627 14.0817 24.5424 14.4132 24.5438C15.0906 24.5453 15.7667 24.5438 16.4441 24.5438V24.5424Z"
        fill="#13243E"
        stroke="#13243E"
        strokeWidth="0.5"
      />
      <path
        d="M16.3612 27.5038C16.0472 27.5038 15.7332 27.5125 15.4192 27.5008C15.1517 27.4907 14.9438 27.386 14.9496 27.0705C14.9554 26.7667 15.1633 26.6286 15.4206 26.6213C16.0966 26.6024 16.7755 26.6039 17.4516 26.6286C17.7176 26.6388 17.8993 26.8132 17.8862 27.1083C17.8746 27.3773 17.6885 27.4878 17.4486 27.4965C17.0867 27.5096 16.7232 27.4994 16.3612 27.4994C16.3612 27.4994 16.3612 27.5008 16.3612 27.5023V27.5038Z"
        fill="#13243E"
        stroke="#13243E"
        strokeWidth="0.5"
      />
      <path
        d="M24.5576 8.11516C24.546 8.44516 23.3277 9.67651 23.0632 9.68377C22.9061 9.68814 22.7739 9.61545 22.691 9.49478C22.5674 9.31597 22.579 9.10227 22.7157 8.95253C23.0762 8.56146 23.4571 8.1893 23.8409 7.82004C23.9718 7.69502 24.1419 7.66739 24.3105 7.76625C24.4646 7.85784 24.5794 7.97705 24.5576 8.1137V8.11516Z"
        fill="#13243E"
        stroke="#13243E"
        strokeWidth="0.5"
      />
      <path
        d="M15.8568 5.52144C15.8583 5.05494 15.6548 4.51689 16.2959 4.49363C17.014 4.46891 16.7742 5.13619 16.78 5.53743C16.7843 5.9474 16.9922 6.62049 16.3308 6.61904C15.6635 6.61758 15.8568 5.974 15.8583 5.52144H15.8568Z"
        fill="#13243E"
        stroke="#13243E"
        strokeWidth="0.5"
      />
      <path
        d="M6.91322 14.4079C7.3101 14.4864 7.94249 14.2291 7.95557 14.86C7.97011 15.5607 7.30719 15.334 6.90304 15.334C6.49744 15.334 5.8258 15.5549 5.83307 14.876C5.84179 14.1942 6.51925 14.5038 6.91176 14.4079H6.91322Z"
        fill="#13243E"
        stroke="#13243E"
        strokeWidth="0.5"
      />
      <path
        d="M25.9635 15.3724C25.536 15.2779 24.9007 15.5542 24.8789 14.9218C24.8542 14.2181 25.5171 14.4348 25.9213 14.4362C26.3298 14.4362 26.9985 14.2138 27 14.8883C27.0029 15.589 26.3065 15.2372 25.962 15.3724H25.9635Z"
        fill="#13243E"
        stroke="#13243E"
        strokeWidth="0.5"
      />
      <path
        d="M10.0737 9.18818C10.0563 9.57052 9.66233 9.74352 9.32796 9.47312C8.99069 9.20126 8.70139 8.8698 8.40336 8.55433C8.25799 8.40023 8.23472 8.21124 8.34085 8.01935C8.4179 7.87833 8.54438 7.82163 8.69993 7.81727C9.01831 7.8071 10.0897 8.87416 10.0752 9.18818H10.0737Z"
        fill="#13243E"
        stroke="#13243E"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function LeadIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 21.5V19.5C16 18.4391 15.5786 17.4217 14.8284 16.6716C14.0783 15.9214 13.0609 15.5 12 15.5H6C4.93913 15.5 3.92172 15.9214 3.17157 16.6716C2.42143 17.4217 2 18.4391 2 19.5V21.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.5C11.2091 11.5 13 9.70914 13 7.5C13 5.29086 11.2091 3.5 9 3.5C6.79086 3.5 5 5.29086 5 7.5C5 9.70914 6.79086 11.5 9 11.5Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 21.5V19.5C21.9993 18.6137 21.7044 17.7528 21.1614 17.0523C20.6184 16.3519 19.8581 15.8516 19 15.63"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.63C16.8604 3.85031 17.623 4.35071 18.1676 5.05232C18.7122 5.75392 19.0078 6.61683 19.0078 7.505C19.0078 8.39318 18.7122 9.25608 18.1676 9.95769C17.623 10.6593 16.8604 11.1597 16 11.38"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NotificationIcon({ className,count }: {className?:ClassValue; count:number}) {
  return (
    <div className="relative">
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.44V9.77" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
      <path
        d="M12.02 2C8.33999 2 5.35999 4.98 5.35999 8.66V10.76C5.35999 11.44 5.07999 12.46 4.72999 13.04L3.45999 15.16C2.67999 16.47 3.21999 17.93 4.65999 18.41C9.43999 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.65001 21.17C9.05001 20.57 8.67001 19.73 8.67001 18.82"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
    {count > 0 && (
      <div
        className="absolute flex w-4 h-4 -top-1 -right-1 bg-red-500 text-white rounded-full items-center justify-center text-xs"
      >
        {count}
      </div>
    )}
    </div>
  );
}

export function ProfileIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4440_4530)">
        <path
          d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15C8.17157 15 12 15 12 15"
          stroke="#334155"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 11C12.2091 11 14 9.20914 14 7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7C6 9.20914 7.79086 11 10 11Z"
          stroke="#334155"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.42 12.6151C19.615 12.4201 19.8465 12.2654 20.1013 12.1599C20.3561 12.0543 20.6292 12 20.905 12C21.1808 12 21.4539 12.0543 21.7087 12.1599C21.9635 12.2654 22.195 12.4201 22.39 12.6151C22.585 12.8101 22.7397 13.0416 22.8452 13.2964C22.9508 13.5512 23.0051 13.8243 23.0051 14.1001C23.0051 14.3759 22.9508 14.649 22.8452 14.9038C22.7397 15.1586 22.585 15.3901 22.39 15.5851L16.95 21.0051L13 22.0051L13.99 18.0551L19.42 12.6151Z"
          stroke="#334155"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GreenSuccessIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="88" height="89" viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="88" height="88" rx="44" fill="#22C55E"/>
<path d="M36.3478 63.6388L36.1412 63.2869C32.5936 57.2431 23.1688 44.4192 23.074 44.29L22.9531 44.1258L26.1285 40.988L36.2948 48.0865C42.6994 39.7725 48.6747 34.0638 52.5713 30.7308C56.829 27.0889 59.6006 25.4139 59.628 25.3969L59.684 25.3633H65.0454L64.5826 25.7755C57.5932 32.0009 50.345 41.8648 45.4951 49.0439C40.2363 56.8283 36.586 63.2205 36.5498 63.2842L36.3478 63.6388Z" fill="#F3FAFD"/>
<path d="M59.6842 25.3633L59.6281 25.3969C59.6004 25.4134 56.8292 27.0889 52.5715 30.7308C48.6748 34.0638 42.6994 39.7725 36.2951 48.0869L36.1414 63.2869L36.3479 63.6388L36.5499 63.2842C36.5862 63.2205 40.2364 56.8283 45.4953 49.0439C50.3451 41.8651 57.5933 32.0009 64.5827 25.7755L65.0456 25.3633H59.6842Z" fill="white"/>
</svg>

  )
}

export function EditIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_4440_4821)">
        <rect x="6" y="2" width="60" height="60" rx="30" fill="#10B981" />
        <g clipPath="url(#clip0_4440_4821)">
          <path d="M42 22L46 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M31.5 40.5L43 29L39 25L27.5 36.5L26 42L31.5 40.5Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_4440_4821" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4440_4821" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4440_4821" result="shape" />
        </filter>
        <clipPath id="clip0_4440_4821">
          <rect width="24" height="24" fill="white" transform="translate(24 20)" />
        </clipPath>
      </defs>
    </svg>
  );
}
export function PencilIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4588_7355)">
        <path d="M12 1.3335L14.6667 4.00016" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M5.00004 13.6668L12.6667 6.00016L10 3.3335L2.33337 11.0002L1.33337 14.6668L5.00004 13.6668Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4588_7355">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SortDescIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 9H18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 13H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.00002 17L6.00002 20L9.00002 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.00002 18V4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CrossIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6L18 18" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HamburgerMenuIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33337 16H26.6667" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.33337 8H26.6667" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.33337 24H26.6667" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function DownloadIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4375_2104)">
        <path
          d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17"
          stroke="#334155"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7 11L12 16L17 11" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4V16" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_4375_2104">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export function DocumentsIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4375_2107)">
        <path
          d="M8 6H18C18.5304 6 19.0391 6.21071 19.4142 6.58579C19.7893 6.96086 20 7.46957 20 8V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6"
          stroke="#13243E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20C6.53043 20 7.03914 19.7893 7.41421 19.4142C7.78929 19.0391 8 18.5304 8 18C8 17.4696 7.78929 16.9609 7.41421 16.5858C7.03914 16.2107 6.53043 16 6 16C5.46957 16 4.96086 16.2107 4.58579 16.5858C4.21071 16.9609 4 17.4696 4 18Z"
          stroke="#13243E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 18V6C8 5.46957 7.78929 4.96086 7.41421 4.58579C7.03914 4.21071 6.53043 4 6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6L4 18"
          stroke="#13243E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4375_2107">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function KebabMenuIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InfoIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4559_14756)">
        <path
          d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
          stroke="#64748B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M8 10.6667V8" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 5.33337H8.00667" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_4559_14756">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function BackIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NextArrow({ className }: Props) {
  return (
    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.909912 16.9201L7.42991 10.4001C8.19991 9.63008 8.19991 8.37008 7.42991 7.60008L0.909912 1.08008"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CorrectIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function WrongIcon({ className }: Props) {
  return (
    <svg className={cn("", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 6L18 18" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export default HomeIcon;
