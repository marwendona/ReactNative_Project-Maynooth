import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'

export interface LogoProps {
  size: LogoSize
}

export enum LogoSize {
  Small = 'Small',
  Medium = 'Medium',
}

const LogoMark: React.FC<LogoProps> = ({ size }) => {
  const styles = size === LogoSize.Small ? stylesSmall : stylesMedium

  return (
        <View style={styles.logo}>
            <View style={styles._logo}>
                <Svg style={styles.logomark} width="35" height="24" viewBox="0 0 35 24" fill="none" >
                    <Path d="M14.435 23.9541C13.4777 24.1064 12.4987 23.8773 11.709 23.316C10.9194 22.7548 10.3822 21.9063 10.2133 20.9535L7.37132 4.26077C7.21868 3.3052 7.44823 2.32803 8.01052 1.5398C8.5728 0.751572 9.42281 0.215385 10.3774 0.0467716C11.3347 -0.105591 12.3137 0.123542 13.1033 0.684799C13.893 1.24606 14.4302 2.09451 14.5991 3.04734L17.4411 19.7425C17.593 20.6977 17.3631 21.6742 16.8009 22.4619C16.2387 23.2496 15.3891 23.7854 14.435 23.9541Z" fill="#0856DB" />
                    <Path d="M14.435 23.9541C13.4777 24.1064 12.4987 23.8773 11.709 23.316C10.9194 22.7548 10.3822 21.9063 10.2133 20.9535L7.37132 4.26077C7.21868 3.3052 7.44823 2.32803 8.01052 1.5398C8.5728 0.751572 9.42281 0.215385 10.3774 0.0467716C11.3347 -0.105591 12.3137 0.123542 13.1033 0.684799C13.893 1.24606 14.4302 2.09451 14.5991 3.04734L17.4411 19.7425C17.593 20.6977 17.3631 21.6742 16.8009 22.4619C16.2387 23.2496 15.3891 23.7854 14.435 23.9541Z" fill="black" fillOpacity="0.2" />
                    <Path d="M24.6238 23.9539C23.6665 24.1063 22.6875 23.8772 21.8979 23.3159C21.1082 22.7547 20.571 21.9062 20.4021 20.9534L17.5607 4.26063C17.4767 3.78954 17.4868 3.3065 17.5904 2.8393C17.694 2.3721 17.8891 1.92995 18.1645 1.53828C18.4399 1.14661 18.7901 0.813138 19.1951 0.557045C19.6 0.300952 20.0517 0.127288 20.5241 0.0460392C21.4815 -0.106323 22.4604 0.122809 23.2501 0.684066C24.0398 1.24532 24.5769 2.09377 24.7459 3.0466L27.5878 19.7417C27.6715 20.2127 27.6612 20.6955 27.5573 21.1625C27.4535 21.6295 27.2583 22.0713 26.9829 22.4627C26.7075 22.8542 26.3573 23.1874 25.9524 23.4433C25.5476 23.6992 25.0961 23.8727 24.6238 23.9539Z" fill="#0856DB" />
                    <Path d="M24.6238 23.9539C23.6665 24.1063 22.6875 23.8772 21.8979 23.3159C21.1082 22.7547 20.571 21.9062 20.4021 20.9534L17.5607 4.26063C17.4767 3.78954 17.4868 3.3065 17.5904 2.8393C17.694 2.3721 17.8891 1.92995 18.1645 1.53828C18.4399 1.14661 18.7901 0.813138 19.1951 0.557045C19.6 0.300952 20.0517 0.127288 20.5241 0.0460392C21.4815 -0.106323 22.4604 0.122809 23.2501 0.684066C24.0398 1.24532 24.5769 2.09377 24.7459 3.0466L27.5878 19.7417C27.6715 20.2127 27.6612 20.6955 27.5573 21.1625C27.4535 21.6295 27.2583 22.0713 26.9829 22.4627C26.7075 22.8542 26.3573 23.1874 25.9524 23.4433C25.5476 23.6992 25.0961 23.8727 24.6238 23.9539Z" fill="black" fillOpacity="0.2" />
                    <Path d="M2.17505 23.6702C1.28994 23.2744 0.59719 22.5458 0.24749 21.6428C-0.10221 20.7398 -0.0805787 19.7355 0.307679 18.8483L7.65512 2.19399C8.05167 1.31035 8.78176 0.618758 9.68655 0.269687C10.5913 -0.0793845 11.5976 -0.0576937 12.4865 0.33004C13.3716 0.725864 14.0643 1.45451 14.414 2.35751C14.7637 3.2605 14.7421 4.26479 14.3539 5.15195L6.96493 21.8063C6.77544 22.2446 6.50065 22.6409 6.15652 22.9724C5.81238 23.3039 5.40573 23.5638 4.96016 23.7372C4.51459 23.9106 4.03897 23.994 3.56088 23.9825C3.08278 23.971 2.61173 23.8648 2.17505 23.6702Z" fill="#0856DB" />
                    <Path d="M12.324 23.6702C11.4389 23.2744 10.7461 22.5458 10.3964 21.6428C10.0467 20.7398 10.0683 19.7355 10.4566 18.8483L17.804 2.19399C18.2006 1.31035 18.9307 0.618757 19.8355 0.269686C20.7403 -0.0793845 21.7466 -0.0576937 22.6354 0.33004C23.5205 0.725864 24.2133 1.45451 24.563 2.35751C24.9127 3.2605 24.891 4.26479 24.5028 5.15195L17.1547 21.8063C16.7599 22.6913 16.0301 23.3842 15.1248 23.7335C14.2195 24.0828 13.2125 24.0601 12.324 23.6702Z" fill="#0856DB" />
                    <Path d="M22.4734 23.67C21.5883 23.2742 20.8955 22.5455 20.5458 21.6425C20.1961 20.7395 20.2178 19.7353 20.606 18.8481L27.9943 2.19377C28.3909 1.31028 29.1209 0.618801 30.0255 0.269742C30.9302 -0.0793177 31.9363 -0.057726 32.8251 0.32982C33.7102 0.725644 34.403 1.45429 34.7527 2.35729C35.1024 3.26028 35.0807 4.26457 34.6925 5.15173L27.3041 21.8061C27.1114 22.2465 26.8331 22.6445 26.4853 22.977C26.1376 23.3096 25.7273 23.57 25.2781 23.7433C24.8289 23.9166 24.3498 23.9994 23.8684 23.9868C23.387 23.9742 22.9129 23.8665 22.4734 23.67Z" fill="#0856DB" />
                </Svg>
                <Svg style={styles.mAYNOOTH} width="115" height="16" viewBox="0 0 115 16" fill="none" >
                    <Path fillRule="evenodd" clipRule="evenodd" d="M2.42 15.49H0V0.53002H2.33777L7.15 12.2804L11.9622 0.53002H14.34V15.49H11.92V7.78002C11.92 7.29793 11.9267 6.88123 11.9402 6.53041C11.9428 6.46219 11.9454 6.3955 11.9481 6.33035L8.23848 15.49H6.06147L2.37864 6.38819C2.37909 6.40966 2.37951 6.43129 2.37991 6.45308C2.40667 7.17666 2.42 8.04581 2.42 9.06002V15.49ZM2.03 4.86002C2.06288 5.07373 2.08816 5.35837 2.10583 5.71395C2.11683 5.93518 2.12489 6.18387 2.13 6.46002C2.15667 7.18002 2.17 8.04669 2.17 9.06002V15.24H0.25V0.78002H2.17L7.15 12.94L12.13 0.78002H14.09V15.24H12.17V7.78002C12.17 7.30002 12.1767 6.88669 12.19 6.54002C12.2031 6.20033 12.2161 5.89904 12.2292 5.63616C12.2295 5.63077 12.2297 5.62539 12.23 5.62002C12.2433 5.34002 12.2633 5.07335 12.29 4.82002L8.07 15.24H6.23L2.03 4.86002ZM19.0335 15.49H16.4596L21.9222 0.53002H24.4517L29.9349 15.49H27.3415L26.0415 11.89H20.3135L19.0335 15.49ZM20.137 11.64H23.177H26.217L27.517 15.24H29.577L24.277 0.78002H22.097L16.817 15.24H18.857L20.137 11.64ZM23.1719 3.98558L21.0942 9.69002H25.2788L23.1787 3.97617L23.1772 3.97093C23.1755 3.97578 23.1737 3.98074 23.1719 3.98558ZM23.0481 3.56211C23.0502 3.55508 23.0522 3.54806 23.0543 3.54103C23.055 3.53854 23.0557 3.53605 23.0564 3.53356C23.0635 3.50905 23.0703 3.48453 23.077 3.46002L23.177 3.06002C23.1904 3.16669 23.2237 3.30002 23.277 3.46002C23.2837 3.47833 23.2902 3.49663 23.2967 3.51494L23.2986 3.52046C23.3026 3.53172 23.3065 3.54299 23.3104 3.55426C23.35 3.66951 23.3856 3.78477 23.417 3.90002L25.637 9.94002H20.737L22.937 3.90002C22.978 3.78739 23.015 3.67474 23.0481 3.56211ZM36.2534 9.36002V15.24H34.2934V9.36002L29.3934 0.78002H31.5934L34.8134 6.56002C34.9068 6.73335 34.9868 6.89335 35.0534 7.04002C35.088 7.10344 35.1226 7.16936 35.1572 7.23777C35.2026 7.32756 35.248 7.42164 35.2934 7.52002C35.3582 7.4035 35.404 7.30584 35.4311 7.22704C35.4319 7.22468 35.4327 7.22234 35.4334 7.22002L35.5534 6.94002C35.6068 6.84669 35.6801 6.72002 35.7734 6.56002L38.9734 0.78002H41.1134L36.2534 9.36002ZM35.5561 6.43649L38.8261 0.53002H41.5424L36.5034 9.42591V15.49H34.0434V9.42638L28.9628 0.53002H31.7403L35.0336 6.44148C35.1273 6.61553 35.2086 6.77786 35.2773 6.92828C35.279 6.93144 35.2807 6.93461 35.2824 6.93778L35.3293 6.8284L35.3364 6.81599C35.39 6.72219 35.4633 6.5956 35.5561 6.43649ZM46.0123 15.49H43.5523V0.53002H45.8967L52.9124 11.133V0.53002H55.3724V15.49H53.028L46.0123 4.88703V15.49ZM45.7623 4.05614V15.24H43.8023V0.78002H45.7623L53.1624 11.9639V0.78002H55.1224V15.24H53.1624L45.7623 4.05614ZM69.0989 14.7542C68.015 15.4072 66.7626 15.73 65.3499 15.73C63.9628 15.73 62.7178 15.4068 61.622 14.7549L61.6188 14.753C60.5391 14.0885 59.6952 13.1744 59.0884 12.016C58.48 10.8546 58.1799 9.51353 58.1799 8.00002C58.1799 6.49944 58.4802 5.16515 59.0884 4.00402L59.0895 4.00196C59.7095 2.84465 60.5596 1.93123 61.6388 1.26711C62.7226 0.600168 63.969 0.27002 65.3699 0.27002C66.7835 0.27002 68.0367 0.599932 69.1209 1.26711C70.2003 1.9314 71.0442 2.84525 71.6509 4.00327C72.2727 5.16452 72.5798 6.49912 72.5798 8.00002C72.5798 9.50131 72.2726 10.8423 71.6511 12.0164C71.0439 13.1754 70.192 14.09 69.0989 14.7542ZM71.4299 4.12002C70.8432 3.00002 70.0299 2.12002 68.9899 1.48002C67.9499 0.84002 66.7432 0.52002 65.3699 0.52002C64.0098 0.52002 62.8099 0.84002 61.7699 1.48002C60.7299 2.12002 59.9099 3.00002 59.3099 4.12002C58.7232 5.24002 58.4299 6.53335 58.4299 8.00002C58.4299 9.48002 58.7232 10.78 59.3099 11.9C59.8965 13.02 60.7099 13.9 61.7499 14.54C62.8032 15.1667 64.0032 15.48 65.3499 15.48C66.7232 15.48 67.9298 15.1667 68.9698 14.54C70.0232 13.9 70.8432 13.02 71.4299 11.9C72.0299 10.7667 72.3298 9.46669 72.3298 8.00002C72.3298 6.53335 72.0299 5.24002 71.4299 4.12002ZM69.4255 5.1704L69.4241 5.16751C69.0431 4.36731 68.5076 3.75873 67.8184 3.33267L67.8156 3.33095C67.1276 2.89312 66.3156 2.67002 65.3699 2.67002C64.4382 2.67002 63.6326 2.89278 62.9441 3.33094L62.9413 3.33269C62.2517 3.75895 61.7092 4.36806 61.3149 5.169C60.9342 5.96895 60.7399 6.91042 60.7399 8.00002C60.7399 9.08962 60.9342 10.0311 61.3149 10.831C61.7095 11.6325 62.2528 12.2492 62.9441 12.6891C63.6326 13.1273 64.4382 13.35 65.3699 13.35C66.3149 13.35 67.1264 13.1273 67.8141 12.6901C68.5061 12.2368 69.0428 11.6133 69.4241 10.8125L69.4255 10.8096C69.8192 10.0097 70.0199 9.07534 70.0199 8.00002C70.0199 6.91086 69.819 5.96995 69.4255 5.1704ZM67.9499 12.9C68.6832 12.42 69.2499 11.76 69.6499 10.92C70.0632 10.08 70.2699 9.10669 70.2699 8.00002C70.2699 6.88002 70.0632 5.90002 69.6499 5.06002C69.2499 4.22002 68.6832 3.57335 67.9499 3.12002C67.2165 2.65335 66.3565 2.42002 65.3699 2.42002C64.3965 2.42002 63.5432 2.65335 62.8099 3.12002C62.0765 3.57335 61.5032 4.22002 61.0899 5.06002C60.6898 5.90002 60.4899 6.88002 60.4899 8.00002C60.4899 9.12002 60.6898 10.1 61.0899 10.94C61.5032 11.78 62.0765 12.4334 62.8099 12.9C63.5432 13.3667 64.3965 13.6 65.3699 13.6C66.3565 13.6 67.2165 13.3667 67.9499 12.9ZM85.4458 14.7542C84.3619 15.4072 83.1094 15.73 81.6967 15.73C80.3096 15.73 79.0647 15.4068 77.9689 14.7549L77.9657 14.753C76.886 14.0885 76.042 13.1744 75.4353 12.016C74.8269 10.8546 74.5267 9.51353 74.5267 8.00002C74.5267 6.49944 74.8271 5.16515 75.4353 4.00402L75.4363 4.00196C76.0563 2.84465 76.9065 1.93123 77.9857 1.26711C79.0695 0.600168 80.3159 0.27002 81.7167 0.27002C83.1304 0.27002 84.3836 0.599933 85.4678 1.26711C86.5471 1.93135 87.3909 2.8451 87.9976 4.00299C88.6195 5.16431 88.9267 6.499 88.9267 8.00002C88.9267 9.50131 88.6194 10.8423 87.998 12.0164C87.3908 13.1754 86.5389 14.09 85.4458 14.7542ZM85.7724 5.1704L85.771 5.16751C85.39 4.36731 84.8545 3.75873 84.1653 3.33267L84.1625 3.33095C83.4745 2.89312 82.6625 2.67002 81.7167 2.67002C80.7851 2.67002 79.9795 2.89278 79.2909 3.33094L79.2882 3.33269C78.5985 3.75899 78.056 4.36818 77.6616 5.16923C77.2811 5.96913 77.0867 6.91052 77.0867 8.00002C77.0867 9.08952 77.2811 10.0309 77.6616 10.8308C78.0563 11.6324 78.5996 12.2492 79.2909 12.6891C79.9795 13.1273 80.7851 13.35 81.7167 13.35C82.6619 13.35 83.4735 13.1272 84.1612 12.6899C84.8531 12.2367 85.3897 11.6133 85.771 10.8125L85.7724 10.8096C86.166 10.0097 86.3667 9.07534 86.3667 8.00002C86.3667 6.91086 86.1658 5.96996 85.7724 5.1704ZM84.2967 12.9C83.5634 13.3667 82.7034 13.6 81.7167 13.6C80.7434 13.6 79.8901 13.3667 79.1567 12.9C78.4234 12.4334 77.8501 11.78 77.4367 10.94C77.0367 10.1 76.8367 9.12002 76.8367 8.00002C76.8367 6.88002 77.0367 5.90002 77.4367 5.06002C77.8501 4.22002 78.4234 3.57335 79.1567 3.12002C79.8901 2.65335 80.7434 2.42002 81.7167 2.42002C82.7034 2.42002 83.5634 2.65335 84.2967 3.12002C85.0301 3.57335 85.5967 4.22002 85.9967 5.06002C86.4101 5.90002 86.6167 6.88002 86.6167 8.00002C86.6167 9.10669 86.4101 10.08 85.9967 10.92C85.5967 11.76 85.0301 12.42 84.2967 12.9ZM96.3958 2.58002V15.24H94.4358V2.58002H90.0758V0.78002H100.736V2.58002H96.3958ZM94.1858 2.83002H89.8258V0.53002H100.986V2.83002H96.6458V15.49H94.1858V2.83002ZM105.716 15.49H103.256V0.53002H105.716V6.75002H112.376V0.53002H114.836V15.49H112.376V9.07002H105.716V15.49ZM112.626 8.82002V15.24H114.586V0.78002H112.626V7.00002H105.466V0.78002H103.506V15.24H105.466V8.82002H112.626ZM87.7767 11.9C88.3767 10.7667 88.6767 9.46669 88.6767 8.00002C88.6767 6.53335 88.3767 5.24002 87.7767 4.12002C87.1901 3.00002 86.3767 2.12002 85.3367 1.48002C84.2967 0.84002 83.0901 0.52002 81.7167 0.52002C80.3567 0.52002 79.1567 0.84002 78.1167 1.48002C77.0767 2.12002 76.2567 3.00002 75.6567 4.12002C75.0701 5.24002 74.7767 6.53335 74.7767 8.00002C74.7767 9.48002 75.0701 10.78 75.6567 11.9C76.2434 13.02 77.0567 13.9 78.0967 14.54C79.1501 15.1667 80.3501 15.48 81.6967 15.48C83.0701 15.48 84.2767 15.1667 85.3167 14.54C86.3701 13.9 87.1901 13.02 87.7767 11.9Z" fill="#09111F" />
                    <Path d="M2.03 4.86002C2.06288 5.07373 2.08816 5.35837 2.10583 5.71395C2.11683 5.93518 2.12489 6.18387 2.13 6.46002C2.15667 7.18002 2.17 8.04669 2.17 9.06002V15.24H0.25V0.78002H2.17L7.15 12.94L12.13 0.78002H14.09V15.24H12.17V7.78002C12.17 7.30002 12.1767 6.88669 12.19 6.54002C12.2031 6.20033 12.2161 5.89904 12.2292 5.63616L12.23 5.62002C12.2433 5.34002 12.2633 5.07335 12.29 4.82002L8.07 15.24H6.23L2.03 4.86002Z" fill="#09111F" />
                    <Path fillRule="evenodd" clipRule="evenodd" d="M27.517 15.24L26.217 11.64H23.177H20.137L18.857 15.24H16.817L22.097 0.78002H24.277L29.577 15.24H27.517ZM23.0481 3.56211L23.0543 3.54103L23.0564 3.53356C23.0635 3.50905 23.0703 3.48453 23.077 3.46002L23.177 3.06002C23.1904 3.16669 23.2237 3.30002 23.277 3.46002L23.2967 3.51494L23.2986 3.52046L23.3104 3.55426C23.35 3.66951 23.3856 3.78477 23.417 3.90002L25.637 9.94002H20.737L22.937 3.90002C22.978 3.78739 23.015 3.67474 23.0481 3.56211Z" fill="#09111F" />
                    <Path d="M34.8134 6.56002L31.5934 0.78002H29.3934L34.2934 9.36002V15.24H36.2534V9.36002L41.1134 0.78002H38.9734L35.7734 6.56002C35.6801 6.72002 35.6068 6.84669 35.5534 6.94002L35.4334 7.22002L35.4311 7.22704C35.404 7.30584 35.3582 7.4035 35.2934 7.52002C35.248 7.42164 35.2026 7.32756 35.1572 7.23777C35.1226 7.16936 35.088 7.10344 35.0534 7.04002C34.9868 6.89335 34.9068 6.73335 34.8134 6.56002Z" fill="#09111F" />
                    <Path d="M53.1624 15.24L45.7623 4.05614V15.24H43.8023V0.78002H45.7623L53.1624 11.9639V0.78002H55.1224V15.24H53.1624Z" fill="#09111F" />
                    <Path fillRule="evenodd" clipRule="evenodd" d="M71.4299 4.12002C70.8432 3.00002 70.0299 2.12002 68.9899 1.48002C67.9499 0.84002 66.7432 0.52002 65.3699 0.52002C64.0098 0.52002 62.8099 0.84002 61.7699 1.48002C60.7299 2.12002 59.9099 3.00002 59.3099 4.12002C58.7232 5.24002 58.4299 6.53335 58.4299 8.00002C58.4299 9.48002 58.7232 10.78 59.3099 11.9C59.8965 13.02 60.7099 13.9 61.7499 14.54C62.8032 15.1667 64.0032 15.48 65.3499 15.48C66.7232 15.48 67.9298 15.1667 68.9698 14.54C70.0232 13.9 70.8432 13.02 71.4299 11.9C72.0299 10.7667 72.3298 9.46669 72.3298 8.00002C72.3298 6.53335 72.0299 5.24002 71.4299 4.12002ZM67.9499 12.9C68.6832 12.42 69.2499 11.76 69.6499 10.92C70.0632 10.08 70.2699 9.10669 70.2699 8.00002C70.2699 6.88002 70.0632 5.90002 69.6499 5.06002C69.2499 4.22002 68.6832 3.57335 67.9499 3.12002C67.2165 2.65335 66.3565 2.42002 65.3699 2.42002C64.3965 2.42002 63.5432 2.65335 62.8099 3.12002C62.0765 3.57335 61.5032 4.22002 61.0899 5.06002C60.6898 5.90002 60.4899 6.88002 60.4899 8.00002C60.4899 9.12002 60.6898 10.1 61.0899 10.94C61.5032 11.78 62.0765 12.4334 62.8099 12.9C63.5432 13.3667 64.3965 13.6 65.3699 13.6C66.3565 13.6 67.2165 13.3667 67.9499 12.9Z" fill="#09111F" />
                    <Path fillRule="evenodd" clipRule="evenodd" d="M88.6767 8.00002C88.6767 9.46669 88.3767 10.7667 87.7767 11.9C87.1901 13.02 86.3701 13.9 85.3167 14.54C84.2767 15.1667 83.0701 15.48 81.6967 15.48C80.3501 15.48 79.1501 15.1667 78.0967 14.54C77.0567 13.9 76.2434 13.02 75.6567 11.9C75.0701 10.78 74.7767 9.48002 74.7767 8.00002C74.7767 6.53335 75.0701 5.24002 75.6567 4.12002C76.2567 3.00002 77.0767 2.12002 78.1167 1.48002C79.1567 0.84002 80.3567 0.52002 81.7167 0.52002C83.0901 0.52002 84.2967 0.84002 85.3367 1.48002C86.3767 2.12002 87.1901 3.00002 87.7767 4.12002C88.3767 5.24002 88.6767 6.53335 88.6767 8.00002ZM84.2967 12.9C83.5634 13.3667 82.7034 13.6 81.7167 13.6C80.7434 13.6 79.8901 13.3667 79.1567 12.9C78.4234 12.4334 77.8501 11.78 77.4367 10.94C77.0367 10.1 76.8367 9.12002 76.8367 8.00002C76.8367 6.88002 77.0367 5.90002 77.4367 5.06002C77.8501 4.22002 78.4234 3.57335 79.1567 3.12002C79.8901 2.65335 80.7434 2.42002 81.7167 2.42002C82.7034 2.42002 83.5634 2.65335 84.2967 3.12002C85.0301 3.57335 85.5967 4.22002 85.9967 5.06002C86.4101 5.90002 86.6167 6.88002 86.6167 8.00002C86.6167 9.10669 86.4101 10.08 85.9967 10.92C85.5967 11.76 85.0301 12.42 84.2967 12.9Z" fill="#09111F" />
                    <Path d="M100.736 2.58002H96.3958V15.24H94.4358V2.58002H90.0758V0.78002H100.736V2.58002Z" fill="#09111F" />
                    <Path d="M112.626 8.82002H105.466V15.24H103.506V0.78002H105.466V7.00002H112.626V0.78002H114.586V15.24H112.626V8.82002Z" fill="#09111F" />
                </Svg>
            </View>
        </View>
  )
}
export default LogoMark

const stylesSmall = StyleSheet.create({
  logo: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6
  },
  _logo: {
    flexShrink: 0,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6
  },
  logomark: {
    flexShrink: 0,
    height: 24,
    width: 35
  },
  mAYNOOTH: {
    flexShrink: 0,
    width: 115,
    height: 15,
    overflow: 'visible'
  }
})
const stylesMedium = StyleSheet.create({
  logomark: {
    flexShrink: 0,
    height: 32,
    width: 47
  },
  logo: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 7.999997138977051
  },
  _logo: {
    flexShrink: 0,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 7.999997138977051
  },
  mAYNOOTH: {
    flexShrink: 0,
    width: 153,
    height: 21,
    overflow: 'visible'
  }
})