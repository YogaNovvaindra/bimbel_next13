"use client";
import { Inter } from "next/font/google";
import ButtonNavbar from "@/pages/components/buttons/ButtonNavbar";
import Program from "./Program";

import { useEffect, useRef } from "react";

export default function NavbarLanding() {
  const navBg = useRef<HTMLInputElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      console.log(window.scrollY);
      console.log(window.screenY);
      if (window.scrollY > 100) {
        navBg.current?.classList.add(
          "backdrop-blur",
          "shadow-[0px_1px_0px_0px_rgba(255,255,255,0.3)]",
          "bg-gradient-to-b",
          "from-blue-400/60",
          "to-teal-500/60"
        );
      } else {
        navBg.current?.classList.remove(
          "backdrop-blur",
          "shadow-[0px_1px_0px_0px_rgba(255,255,255,0.3)]",
          "bg-gradient-to-b",
          "from-blue-400/60",
          "to-teal-500/60"
        );
      }
    });
  });

  const goHome = () => {
    window.scrollY;
  };
  return (
    <nav
      ref={navBg}
      className="z-50 fixed flex justify-between px-14 py-5 w-screen backdrop-filter"
    >
      <svg
        width="100"
        height="35"
        viewBox="0 0 144 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.81809 6.5454C9.81809 4.13543 7.86441 2.18176 5.45446 2.18176C3.04449 2.18176 1.09082 4.13543 1.09082 6.5454V53.4545C1.09082 55.8645 3.04449 57.8181 5.45446 57.8181H32.7272C35.1371 57.8181 37.0908 55.8645 37.0908 53.4545C37.0908 51.0445 35.1371 49.0909 32.7272 49.0909H9.81809V6.5454ZM14.1817 7.63626C12.9768 7.63626 11.9999 8.61311 11.9999 9.81808C11.9999 11.0231 12.9768 11.9999 14.1817 11.9999H22.909C24.114 11.9999 25.0908 11.0231 25.0908 9.81808C25.0908 8.61311 24.114 7.63626 22.909 7.63626H14.1817ZM11.9999 35.9999C11.9999 34.7949 12.9768 33.8181 14.1817 33.8181H27.2726C28.4776 33.8181 29.4545 34.7949 29.4545 35.9999C29.4545 37.2049 28.4776 38.1817 27.2726 38.1817H14.1817C12.9768 38.1817 11.9999 37.2049 11.9999 35.9999ZM14.1817 16.3635C12.9768 16.3635 11.9999 17.3404 11.9999 18.5454C11.9999 19.7503 12.9768 20.7272 14.1817 20.7272H27.2726C28.4776 20.7272 29.4545 19.7503 29.4545 18.5454C29.4545 17.3404 28.4776 16.3635 27.2726 16.3635H14.1817ZM11.9999 44.7272C11.9999 43.5222 12.9768 42.5454 14.1817 42.5454H22.909C24.114 42.5454 25.0908 43.5222 25.0908 44.7272C25.0908 45.932 24.114 46.909 22.909 46.909H14.1817C12.9768 46.909 11.9999 45.932 11.9999 44.7272ZM14.1817 25.0908C12.9768 25.0908 11.9999 26.0677 11.9999 27.2726C11.9999 28.4776 12.9768 29.4544 14.1817 29.4544H22.909C24.114 29.4544 25.0908 28.4776 25.0908 27.2726C25.0908 26.0677 24.114 25.0908 22.909 25.0908H14.1817Z"
          fill="white"
        />
        <path
          d="M57.9928 17.8997C59.0226 18.0917 59.8691 18.6066 60.5324 19.4444C61.1957 20.2822 61.5273 21.2422 61.5273 22.3244C61.5273 23.3018 61.2829 24.1658 60.7942 24.9164C60.3229 25.6495 59.6335 26.2255 58.7258 26.6444C57.8182 27.0633 56.7448 27.2728 55.5055 27.2728H47.6248V8.99785H55.1651C56.4044 8.99785 57.4691 9.19858 58.3593 9.60003C59.2669 10.0015 59.9477 10.56 60.4015 11.2757C60.8728 11.9913 61.1084 12.8029 61.1084 13.7106C61.1084 14.7753 60.8204 15.6655 60.2444 16.3811C59.6858 17.0968 58.9353 17.6029 57.9928 17.8997ZM51.2902 16.5382H54.6415C55.5142 16.5382 56.1862 16.3462 56.6575 15.9622C57.1288 15.5608 57.3644 14.9935 57.3644 14.2604C57.3644 13.5273 57.1288 12.96 56.6575 12.5586C56.1862 12.1571 55.5142 11.9564 54.6415 11.9564H51.2902V16.5382ZM54.9818 24.288C55.872 24.288 56.5615 24.0786 57.0502 23.6597C57.5564 23.2408 57.8095 22.6473 57.8095 21.8793C57.8095 21.0938 57.5477 20.4829 57.024 20.0466C56.5004 19.5928 55.7935 19.3658 54.9033 19.3658H51.2902V24.288H54.9818ZM66.3077 11.04C65.6618 11.04 65.1208 10.8393 64.6844 10.4379C64.2655 10.0189 64.056 9.50403 64.056 8.89312C64.056 8.28222 64.2655 7.77603 64.6844 7.37458C65.1208 6.95567 65.6618 6.74622 66.3077 6.74622C66.9535 6.74622 67.4858 6.95567 67.9048 7.37458C68.3411 7.77603 68.5593 8.28222 68.5593 8.89312C68.5593 9.50403 68.3411 10.0189 67.9048 10.4379C67.4858 10.8393 66.9535 11.04 66.3077 11.04ZM68.1142 12.768V27.2728H64.4488V12.768H68.1142ZM89.7487 12.5586C91.529 12.5586 92.9603 13.1084 94.0425 14.208C95.1421 15.2902 95.692 16.8088 95.692 18.7637V27.2728H92.0265V19.2611C92.0265 18.1266 91.7385 17.2626 91.1625 16.6691C90.5865 16.0582 89.801 15.7528 88.8061 15.7528C87.8112 15.7528 87.017 16.0582 86.4236 16.6691C85.8476 17.2626 85.5596 18.1266 85.5596 19.2611V27.2728H81.8941V19.2611C81.8941 18.1266 81.6061 17.2626 81.0301 16.6691C80.4541 16.0582 79.6687 15.7528 78.6738 15.7528C77.6614 15.7528 76.8585 16.0582 76.265 16.6691C75.689 17.2626 75.401 18.1266 75.401 19.2611V27.2728H71.7356V12.768H75.401V14.5222C75.8723 13.9113 76.4745 13.4313 77.2076 13.0822C77.9581 12.7331 78.7785 12.5586 79.6687 12.5586C80.8032 12.5586 81.8156 12.8029 82.7058 13.2917C83.596 13.7629 84.2854 14.4437 84.7741 15.3338C85.2454 14.496 85.9261 13.824 86.8163 13.3178C87.7239 12.8117 88.7014 12.5586 89.7487 12.5586ZM102.836 14.8888C103.307 14.1906 103.953 13.6233 104.773 13.1869C105.611 12.7506 106.562 12.5324 107.627 12.5324C108.866 12.5324 109.983 12.8378 110.978 13.4488C111.991 14.0597 112.785 14.9324 113.361 16.0669C113.954 17.184 114.251 18.4844 114.251 19.968C114.251 21.4517 113.954 22.7695 113.361 23.9215C112.785 25.056 111.991 25.9375 110.978 26.5658C109.983 27.1942 108.866 27.5084 107.627 27.5084C106.545 27.5084 105.593 27.2989 104.773 26.88C103.97 26.4437 103.324 25.8851 102.836 25.2044V27.2728H99.1702V7.89822H102.836V14.8888ZM110.507 19.968C110.507 19.0953 110.324 18.3448 109.957 17.7164C109.608 17.0706 109.137 16.5818 108.543 16.2502C107.967 15.9186 107.339 15.7528 106.658 15.7528C105.995 15.7528 105.367 15.9273 104.773 16.2764C104.197 16.608 103.726 17.0968 103.359 17.7426C103.01 18.3884 102.836 19.1477 102.836 20.0204C102.836 20.8931 103.01 21.6524 103.359 22.2982C103.726 22.944 104.197 23.4415 104.773 23.7906C105.367 24.1222 105.995 24.288 106.658 24.288C107.339 24.288 107.967 24.1135 108.543 23.7644C109.137 23.4153 109.608 22.9178 109.957 22.272C110.324 21.6262 110.507 20.8582 110.507 19.968ZM130.398 19.7062C130.398 20.2298 130.363 20.7011 130.293 21.12H119.69C119.777 22.1673 120.144 22.9877 120.789 23.5811C121.435 24.1746 122.229 24.4713 123.172 24.4713C124.533 24.4713 125.502 23.8866 126.078 22.7171H130.032C129.613 24.1135 128.81 25.2655 127.623 26.1731C126.436 27.0633 124.978 27.5084 123.25 27.5084C121.854 27.5084 120.597 27.2029 119.48 26.592C118.381 25.9637 117.517 25.0822 116.888 23.9477C116.277 22.8131 115.972 21.504 115.972 20.0204C115.972 18.5193 116.277 17.2015 116.888 16.0669C117.499 14.9324 118.354 14.0597 119.454 13.4488C120.554 12.8378 121.819 12.5324 123.25 12.5324C124.629 12.5324 125.86 12.8291 126.942 13.4226C128.042 14.016 128.888 14.8626 129.482 15.9622C130.093 17.0444 130.398 18.2924 130.398 19.7062ZM126.602 18.6589C126.584 17.7164 126.244 16.9658 125.581 16.4073C124.917 15.8313 124.106 15.5433 123.146 15.5433C122.238 15.5433 121.47 15.8226 120.842 16.3811C120.231 16.9222 119.856 17.6815 119.716 18.6589H126.602ZM136.739 7.89822V27.2728H133.073V7.89822H136.739ZM51.2902 50.5484H57.312V53.4546H47.6248V35.1797H51.2902V50.5484ZM61.5007 37.2218C60.8549 37.2218 60.3138 37.0211 59.8774 36.6197C59.4585 36.2008 59.249 35.6858 59.249 35.0749C59.249 34.464 59.4585 33.9578 59.8774 33.5564C60.3138 33.1375 60.8549 32.928 61.5007 32.928C62.1465 32.928 62.6789 33.1375 63.0978 33.5564C63.5341 33.9578 63.7523 34.464 63.7523 35.0749C63.7523 35.6858 63.5341 36.2008 63.0978 36.6197C62.6789 37.0211 62.1465 37.2218 61.5007 37.2218ZM63.3072 38.9498V53.4546H59.6418V38.9498H63.3072ZM74.9664 38.7404C76.6944 38.7404 78.0908 39.2902 79.1555 40.3898C80.2202 41.472 80.7526 42.9906 80.7526 44.9455V53.4546H77.0872V45.4429C77.0872 44.2909 76.7992 43.4095 76.2232 42.7986C75.6472 42.1702 74.8617 41.856 73.8668 41.856C72.8544 41.856 72.0515 42.1702 71.4581 42.7986C70.8821 43.4095 70.5941 44.2909 70.5941 45.4429V53.4546H66.9286V38.9498H70.5941V40.7564C71.0828 40.128 71.7024 39.6393 72.453 39.2902C73.221 38.9237 74.0588 38.7404 74.9664 38.7404ZM97.7219 45.888C97.7219 46.4117 97.687 46.8829 97.6172 47.3018H87.0136C87.1008 48.3491 87.4674 49.1695 88.1132 49.7629C88.759 50.3564 89.5532 50.6531 90.4957 50.6531C91.8572 50.6531 92.8259 50.0684 93.4019 48.8989H97.3554C96.9365 50.2953 96.1336 51.4473 94.9466 52.3549C93.7597 53.2451 92.3023 53.6902 90.5743 53.6902C89.1779 53.6902 87.9212 53.3847 86.8041 52.7738C85.7045 52.1455 84.8405 51.264 84.2121 50.1295C83.6012 48.9949 83.2957 47.6858 83.2957 46.2022C83.2957 44.7011 83.6012 43.3833 84.2121 42.2487C84.823 41.1142 85.6783 40.2415 86.7779 39.6306C87.8776 39.0197 89.143 38.7142 90.5743 38.7142C91.9532 38.7142 93.1837 39.0109 94.2659 39.6044C95.3656 40.1978 96.2121 41.0444 96.8056 42.144C97.4165 43.2262 97.7219 44.4742 97.7219 45.888ZM93.9255 44.8407C93.9081 43.8982 93.5677 43.1477 92.9045 42.5891C92.2412 42.0131 91.4296 41.7251 90.4696 41.7251C89.5619 41.7251 88.7939 42.0044 88.1656 42.5629C87.5546 43.104 87.1794 43.8633 87.0397 44.8407H93.9255ZM99.4547 46.1498C99.4547 44.6837 99.7427 43.3833 100.319 42.2487C100.913 41.1142 101.707 40.2415 102.702 39.6306C103.714 39.0197 104.84 38.7142 106.079 38.7142C107.161 38.7142 108.104 38.9324 108.907 39.3687C109.727 39.8051 110.382 40.3549 110.87 41.0182V38.9498H114.562V53.4546H110.87V51.3338C110.399 52.0146 109.745 52.5818 108.907 53.0357C108.086 53.472 107.135 53.6902 106.053 53.6902C104.831 53.6902 103.714 53.376 102.702 52.7477C101.707 52.1193 100.913 51.2378 100.319 50.1033C99.7427 48.9513 99.4547 47.6335 99.4547 46.1498ZM110.87 46.2022C110.87 45.312 110.696 44.5527 110.347 43.9244C109.998 43.2786 109.526 42.7898 108.933 42.4582C108.34 42.1091 107.702 41.9346 107.022 41.9346C106.341 41.9346 105.713 42.1004 105.137 42.432C104.561 42.7637 104.089 43.2524 103.723 43.8982C103.374 44.5266 103.199 45.2771 103.199 46.1498C103.199 47.0226 103.374 47.7906 103.723 48.4538C104.089 49.0997 104.561 49.5971 105.137 49.9462C105.73 50.2953 106.358 50.4698 107.022 50.4698C107.702 50.4698 108.34 50.304 108.933 49.9724C109.526 49.6233 109.998 49.1346 110.347 48.5062C110.696 47.8604 110.87 47.0924 110.87 46.2022ZM121.807 41.2015C122.279 40.4335 122.89 39.8313 123.64 39.3949C124.408 38.9586 125.281 38.7404 126.258 38.7404V42.5891H125.29C124.138 42.5891 123.265 42.8597 122.671 43.4007C122.095 43.9418 121.807 44.8844 121.807 46.2284V53.4546H118.142V38.9498H121.807V41.2015Z"
          fill="white"
        />
      </svg>
      {/* <svg width="100" height="35" viewBox="0 0 33 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 1.5C2.25 0.947715 1.80228 0.5 1.25 0.5C0.697715 0.5 0.25 0.947715 0.25 1.5V12.25C0.25 12.8023 0.697715 13.25 1.25 13.25H7.5C8.05228 13.25 8.5 12.8023 8.5 12.25C8.5 11.6977 8.05228 11.25 7.5 11.25H2.25V1.5ZM3.25 1.74999C2.97386 1.74999 2.75 1.97385 2.75 2.24999C2.75 2.52613 2.97386 2.74999 3.25 2.74999H5.25C5.52614 2.74999 5.75 2.52613 5.75 2.24999C5.75 1.97385 5.52614 1.74999 5.25 1.74999H3.25ZM2.75 8.24999C2.75 7.97385 2.97386 7.74999 3.25 7.74999H6.25C6.52614 7.74999 6.75 7.97385 6.75 8.24999C6.75 8.52613 6.52614 8.74999 6.25 8.74999H3.25C2.97386 8.74999 2.75 8.52613 2.75 8.24999ZM3.25 3.74999C2.97386 3.74999 2.75 3.97385 2.75 4.24999C2.75 4.52613 2.97386 4.74999 3.25 4.74999H6.25C6.52614 4.74999 6.75 4.52613 6.75 4.24999C6.75 3.97385 6.52614 3.74999 6.25 3.74999H3.25ZM2.75 10.25C2.75 9.97385 2.97386 9.74999 3.25 9.74999H5.25C5.52614 9.74999 5.75 9.97385 5.75 10.25C5.75 10.5261 5.52614 10.75 5.25 10.75H3.25C2.97386 10.75 2.75 10.5261 2.75 10.25ZM3.25 5.74999C2.97386 5.74999 2.75 5.97385 2.75 6.24999C2.75 6.52613 2.97386 6.74999 3.25 6.74999H5.25C5.52614 6.74999 5.75 6.52613 5.75 6.24999C5.75 5.97385 5.52614 5.74999 5.25 5.74999H3.25Z" fill="url(#paint0_linear_807_7995)"/>
<path d="M13.29 4.102C13.526 4.146 13.72 4.264 13.872 4.456C14.024 4.648 14.1 4.868 14.1 5.116C14.1 5.34 14.044 5.538 13.932 5.71C13.824 5.878 13.666 6.01 13.458 6.106C13.25 6.202 13.004 6.25 12.72 6.25H10.914V2.062H12.642C12.926 2.062 13.17 2.108 13.374 2.2C13.582 2.292 13.738 2.42 13.842 2.584C13.95 2.748 14.004 2.934 14.004 3.142C14.004 3.386 13.938 3.59 13.806 3.754C13.678 3.918 13.506 4.034 13.29 4.102ZM11.754 3.79H12.522C12.722 3.79 12.876 3.746 12.984 3.658C13.092 3.566 13.146 3.436 13.146 3.268C13.146 3.1 13.092 2.97 12.984 2.878C12.876 2.786 12.722 2.74 12.522 2.74H11.754V3.79ZM12.6 5.566C12.804 5.566 12.962 5.518 13.074 5.422C13.19 5.326 13.248 5.19 13.248 5.014C13.248 4.834 13.188 4.694 13.068 4.594C12.948 4.49 12.786 4.438 12.582 4.438H11.754V5.566H12.6ZM15.1955 2.53C15.0475 2.53 14.9235 2.484 14.8235 2.392C14.7275 2.296 14.6795 2.178 14.6795 2.038C14.6795 1.898 14.7275 1.782 14.8235 1.69C14.9235 1.594 15.0475 1.546 15.1955 1.546C15.3435 1.546 15.4655 1.594 15.5615 1.69C15.6615 1.782 15.7115 1.898 15.7115 2.038C15.7115 2.178 15.6615 2.296 15.5615 2.392C15.4655 2.484 15.3435 2.53 15.1955 2.53ZM15.6095 2.926V6.25H14.7695V2.926H15.6095ZM20.5674 2.878C20.9754 2.878 21.3034 3.004 21.5514 3.256C21.8034 3.504 21.9294 3.852 21.9294 4.3V6.25H21.0894V4.414C21.0894 4.154 21.0234 3.956 20.8914 3.82C20.7594 3.68 20.5794 3.61 20.3514 3.61C20.1234 3.61 19.9414 3.68 19.8054 3.82C19.6734 3.956 19.6074 4.154 19.6074 4.414V6.25H18.7674V4.414C18.7674 4.154 18.7014 3.956 18.5694 3.82C18.4374 3.68 18.2574 3.61 18.0294 3.61C17.7974 3.61 17.6134 3.68 17.4774 3.82C17.3454 3.956 17.2794 4.154 17.2794 4.414V6.25H16.4394V2.926H17.2794V3.328C17.3874 3.188 17.5254 3.078 17.6934 2.998C17.8654 2.918 18.0534 2.878 18.2574 2.878C18.5174 2.878 18.7494 2.934 18.9534 3.046C19.1574 3.154 19.3154 3.31 19.4274 3.514C19.5354 3.322 19.6914 3.168 19.8954 3.052C20.1034 2.936 20.3274 2.878 20.5674 2.878ZM23.5665 3.412C23.6745 3.252 23.8225 3.122 24.0105 3.022C24.2025 2.922 24.4205 2.872 24.6645 2.872C24.9485 2.872 25.2045 2.942 25.4325 3.082C25.6645 3.222 25.8465 3.422 25.9785 3.682C26.1145 3.938 26.1825 4.236 26.1825 4.576C26.1825 4.916 26.1145 5.218 25.9785 5.482C25.8465 5.742 25.6645 5.944 25.4325 6.088C25.2045 6.232 24.9485 6.304 24.6645 6.304C24.4165 6.304 24.1985 6.256 24.0105 6.16C23.8265 6.06 23.6785 5.932 23.5665 5.776V6.25H22.7265V1.81H23.5665V3.412ZM25.3245 4.576C25.3245 4.376 25.2825 4.204 25.1985 4.06C25.1185 3.912 25.0105 3.8 24.8745 3.724C24.7425 3.648 24.5985 3.61 24.4425 3.61C24.2905 3.61 24.1465 3.65 24.0105 3.73C23.8785 3.806 23.7705 3.918 23.6865 4.066C23.6065 4.214 23.5665 4.388 23.5665 4.588C23.5665 4.788 23.6065 4.962 23.6865 5.11C23.7705 5.258 23.8785 5.372 24.0105 5.452C24.1465 5.528 24.2905 5.566 24.4425 5.566C24.5985 5.566 24.7425 5.526 24.8745 5.446C25.0105 5.366 25.1185 5.252 25.1985 5.104C25.2825 4.956 25.3245 4.78 25.3245 4.576ZM29.8829 4.516C29.8829 4.636 29.8749 4.744 29.8589 4.84H27.4289C27.4489 5.08 27.5329 5.268 27.6809 5.404C27.8289 5.54 28.0109 5.608 28.2269 5.608C28.5389 5.608 28.7609 5.474 28.8929 5.206H29.7989C29.7029 5.526 29.5189 5.79 29.2469 5.998C28.9749 6.202 28.6409 6.304 28.2449 6.304C27.9249 6.304 27.6369 6.234 27.3809 6.094C27.1289 5.95 26.9309 5.748 26.7869 5.488C26.6469 5.228 26.5769 4.928 26.5769 4.588C26.5769 4.244 26.6469 3.942 26.7869 3.682C26.9269 3.422 27.1229 3.222 27.3749 3.082C27.6269 2.942 27.9169 2.872 28.2449 2.872C28.5609 2.872 28.8429 2.94 29.0909 3.076C29.3429 3.212 29.5369 3.406 29.6729 3.658C29.8129 3.906 29.8829 4.192 29.8829 4.516ZM29.0129 4.276C29.0089 4.06 28.9309 3.888 28.7789 3.76C28.6269 3.628 28.4409 3.562 28.2209 3.562C28.0129 3.562 27.8369 3.626 27.6929 3.754C27.5529 3.878 27.4669 4.052 27.4349 4.276H29.0129ZM31.336 1.81V6.25H30.496V1.81H31.336ZM11.754 11.584H13.134V12.25H10.914V8.062H11.754V11.584ZM14.0939 8.53C13.9459 8.53 13.8219 8.484 13.7219 8.392C13.6259 8.296 13.5779 8.178 13.5779 8.038C13.5779 7.898 13.6259 7.782 13.7219 7.69C13.8219 7.594 13.9459 7.546 14.0939 7.546C14.2419 7.546 14.3639 7.594 14.4599 7.69C14.5599 7.782 14.6099 7.898 14.6099 8.038C14.6099 8.178 14.5599 8.296 14.4599 8.392C14.3639 8.484 14.2419 8.53 14.0939 8.53ZM14.5079 8.926V12.25H13.6679V8.926H14.5079ZM17.1798 8.878C17.5758 8.878 17.8958 9.004 18.1398 9.256C18.3838 9.504 18.5058 9.852 18.5058 10.3V12.25H17.6658V10.414C17.6658 10.15 17.5998 9.948 17.4678 9.808C17.3358 9.664 17.1558 9.592 16.9278 9.592C16.6958 9.592 16.5118 9.664 16.3758 9.808C16.2438 9.948 16.1778 10.15 16.1778 10.414V12.25H15.3378V8.926H16.1778V9.34C16.2898 9.196 16.4318 9.084 16.6038 9.004C16.7798 8.92 16.9718 8.878 17.1798 8.878ZM22.3946 10.516C22.3946 10.636 22.3866 10.744 22.3706 10.84H19.9406C19.9606 11.08 20.0446 11.268 20.1926 11.404C20.3406 11.54 20.5226 11.608 20.7386 11.608C21.0506 11.608 21.2726 11.474 21.4046 11.206H22.3106C22.2146 11.526 22.0306 11.79 21.7586 11.998C21.4866 12.202 21.1526 12.304 20.7566 12.304C20.4366 12.304 20.1486 12.234 19.8926 12.094C19.6406 11.95 19.4426 11.748 19.2986 11.488C19.1586 11.228 19.0886 10.928 19.0886 10.588C19.0886 10.244 19.1586 9.942 19.2986 9.682C19.4386 9.422 19.6346 9.222 19.8866 9.082C20.1386 8.942 20.4286 8.872 20.7566 8.872C21.0726 8.872 21.3546 8.94 21.6026 9.076C21.8546 9.212 22.0486 9.406 22.1846 9.658C22.3246 9.906 22.3946 10.192 22.3946 10.516ZM21.5246 10.276C21.5206 10.06 21.4426 9.888 21.2906 9.76C21.1386 9.628 20.9526 9.562 20.7326 9.562C20.5246 9.562 20.3486 9.626 20.2046 9.754C20.0646 9.878 19.9786 10.052 19.9466 10.276H21.5246ZM22.7917 10.576C22.7917 10.24 22.8577 9.942 22.9897 9.682C23.1258 9.422 23.3078 9.222 23.5358 9.082C23.7678 8.942 24.0258 8.872 24.3098 8.872C24.5578 8.872 24.7738 8.922 24.9578 9.022C25.1458 9.122 25.2958 9.248 25.4078 9.4V8.926H26.2538V12.25H25.4078V11.764C25.2998 11.92 25.1498 12.05 24.9578 12.154C24.7698 12.254 24.5518 12.304 24.3038 12.304C24.0238 12.304 23.7678 12.232 23.5358 12.088C23.3078 11.944 23.1258 11.742 22.9897 11.482C22.8577 11.218 22.7917 10.916 22.7917 10.576ZM25.4078 10.588C25.4078 10.384 25.3678 10.21 25.2878 10.066C25.2078 9.918 25.0998 9.806 24.9638 9.73C24.8278 9.65 24.6818 9.61 24.5258 9.61C24.3698 9.61 24.2258 9.648 24.0938 9.724C23.9618 9.8 23.8538 9.912 23.7698 10.06C23.6898 10.204 23.6498 10.376 23.6498 10.576C23.6498 10.776 23.6898 10.952 23.7698 11.104C23.8538 11.252 23.9618 11.366 24.0938 11.446C24.2298 11.526 24.3738 11.566 24.5258 11.566C24.6818 11.566 24.8278 11.528 24.9638 11.452C25.0998 11.372 25.2078 11.26 25.2878 11.116C25.3678 10.968 25.4078 10.792 25.4078 10.588ZM27.9142 9.442C28.0222 9.266 28.1622 9.128 28.3342 9.028C28.5102 8.928 28.7102 8.878 28.9342 8.878V9.76H28.7122C28.4482 9.76 28.2482 9.822 28.1122 9.946C27.9802 10.07 27.9142 10.286 27.9142 10.594V12.25H27.0742V8.926H27.9142V9.442Z" fill="url(#paint1_linear_807_7995)"/>
<defs>
<linearGradient id="paint0_linear_807_7995" x1="12.075" y1="12.74" x2="-6.0973" y2="8.97055" gradientUnits="userSpaceOnUse">
<stop stop-color="#65BAB1"/>
<stop offset="1" stop-color="#417DD9"/>
</linearGradient>
<linearGradient id="paint1_linear_807_7995" x1="30.0556" y1="21.35" x2="15.8273" y2="-10.0487" gradientUnits="userSpaceOnUse">
<stop stop-color="#65BAB1"/>
<stop offset="1" stop-color="#417DD9"/>
</linearGradient>
</defs>
</svg> */}
      <div className="flex gap-2">
        <ButtonNavbar label="Home" goTo="Home" />
        <ButtonNavbar label="About Us" goTo="About" />
        <ButtonNavbar label="Program" goTo="Program" />
        <ButtonNavbar label="Benefit" goTo="Benefit" />
        <ButtonNavbar label="Diskon" goTo="Diskon" />
      </div>
    </nav>
  );
}
