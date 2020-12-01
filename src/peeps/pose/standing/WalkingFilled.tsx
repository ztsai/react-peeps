import React from 'react';
import { PieceType } from '../../types';

export const WalkingFilled: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g transform='translate(-276 479)'>
			<path
				d='M1013.24 2409.58C1020.27 2376.82 988.086 2365.75 967.795 2358.46C953.261 2349.03 899.409 2316.38 857.74 2276.08C823.643 2243.1 800.432 2200.83 790.77 2196.8C790.77 2196.8 780.824 2191.03 779.791 2186.75C773.739 2161.64 778.787 2138.23 779.791 2123C799.189 2117.91 814.733 2111.56 826.358 2102.67C829.748 2103.8 834.83 2105.25 836.345 2100.29C846.851 2030.2 851.386 1960.93 859.934 1890.78C892.29 1623.6 895.94 1311.46 840.275 1067.43C839.69 1055.34 840.745 1044.41 841.824 1034.02C849.351 1033.21 853.902 1025.92 860.048 1021.57C869.587 1013.98 880.882 1008.16 880.416 994.908C882.682 993.192 882.418 992.227 881.301 990.041C888.577 958.751 856.122 925.779 846.943 899.983C863.628 736.789 840.926 582.574 853.591 419.341C869.588 412.647 858.833 370.809 857.74 353.552C848.878 242.378 791.087 132.46 687.017 96.1412C681.068 94.9352 672.126 88.1352 667.203 92.7012C657.689 88.9322 645.031 96.3632 637.668 87.8082L637.742 87.7522C631.542 79.1552 628.763 68.2262 626.725 57.8922C627.066 60.8042 627.635 63.6922 628.336 66.5152C610.395 15.9512 605.875 2.43122 548.118 0.0502247C522.101 -0.297775 487.805 0.483225 472.635 25.2972C466.419 36.8322 468.318 50.0772 464.46 62.2192C457.378 84.5002 426.808 73.7332 410.759 85.3032C282.311 126.501 176.952 210.593 142.321 345.566C135.241 361.834 127.211 378.025 121.292 394.814C120.376 397.306 117.856 405.739 123.908 409.62L126.835 411.497C88.2814 591.698 85.7234 743.542 215.25 863.675C224.97 915.296 199.965 985.791 209.577 1035.91C204.1 1043.68 211.045 1049.94 218.047 1050.44C218.722 1050.82 221.45 1052.01 222.194 1052.35C211.051 1209.66 257.835 1421.67 278.457 1505.34C281.264 1555.58 264.117 1596.85 228.843 1624.23C189.87 1648.24 112.82 1756.65 127.104 1870.37C110.411 1873.65 93.8394 1875.44 77.8244 1881.72C7.75041 1869.35 8.44541 2004.44 3.98041 2051.94C-3.58159 2131.47 -8.28159 2246.74 67.2714 2297.65C87.1754 2312.09 127.533 2328.99 148.214 2305.88C154.991 2297.74 156.688 2289.87 154.022 2281.56C188.172 2233.31 178.969 2170.2 182.106 2113.61C192.009 2113.01 202.37 2117.66 211.949 2115.97C221.781 2107.3 185.913 2109.66 182.193 2109.15C182.574 2100.43 183.276 2091.24 184.182 2082.44C189.808 2083.57 197.015 2086.27 202.425 2086.47C205.627 2087.25 207.89 2082.84 205.957 2080.56C201.735 2076.53 190.97 2077.16 184.912 2076.58C185.935 2069.22 187.186 2061.48 188.576 2054.35C195.987 2054.09 203.64 2058.81 210.657 2057.84C205.346 2054.3 195.377 2055.38 188.903 2053.04C193.113 2030.1 201.691 2008.32 209.666 1986.86C229.234 1994.93 246.115 1995.25 265.218 1992.83C273.032 1994.03 276.842 1992.43 278.107 1982.66L277.608 1982.04C292.749 1891.44 341.607 1805.07 432.36 1707.12C450.286 1687.06 470.543 1663.43 484.04 1637.02C511.161 1582.06 515.793 1521.41 536.69 1464.33C556.2 1406.96 582.877 1352.08 607.924 1297.7C611.597 1325.57 616.531 1354.16 621.66 1381.5C644.234 1478.35 642.046 1581.68 625.433 1679.07C600.853 1815.48 612.701 1952.53 607.234 2089.9C607.309 2097.82 608.291 2105.02 607.129 2113.26C606.975 2113.9 607.275 2114.65 608.027 2114.63L609.446 2114.67C621.26 2123.32 637.576 2124.88 651.458 2129.58C657.288 2134.19 655.646 2141.5 656.18 2147.2C657.705 2171.77 659.655 2196.44 657.235 2221.76C646.523 2242.29 633.22 2238.05 630.499 2266.98C628.117 2300.01 623.903 2335.14 639.989 2364.55L633.903 2365.6C624.871 2384.56 630.385 2396.86 651.613 2404.88C756.411 2445.97 903.877 2483.27 1013.24 2452.26C1015.22 2454.23 1018.11 2452.18 1020.37 2449.09C1022.55 2446.11 1024.14 2442.16 1023.78 2439.87C1021.91 2429.81 1024.48 2411.44 1013.24 2409.58Z'
				transform='translate(199.0003 -35.99643)'
				fill={backgroundColor || '#FFFFFF'}
				stroke='none'
			/>
			<path
				d='M1024.26 2380.04C1032.64 2382.58 1032.74 2391.82 1033 2398.98C1033.14 2400.9 1033.44 2402.81 1033.73 2404.72C1034.5 2409.67 1035.27 2414.59 1033.29 2419.62C1031.22 2425.35 1024.07 2432.46 1017.66 2428.83C928.149 2465.78 743.058 2412.05 655.948 2379.41C644.028 2374.58 631.698 2370.16 630.138 2356.18C629.218 2351.22 631.548 2332.48 637.688 2331.08C625.52 2305.81 627.692 2276.25 629.768 2247.98C630.033 2244.38 630.297 2240.8 630.528 2237.24C634.249 2207.17 643.888 2210.33 657.268 2190.55C659.29 2169.62 658.214 2153.14 656.946 2133.7C656.714 2130.16 656.476 2126.51 656.249 2122.72C656.05 2121.42 656.055 2119.87 656.061 2118.26C656.074 2114.47 656.089 2110.34 653.428 2108.31C639.749 2104.97 624.798 2102.2 612.899 2094.39C609.659 2094.3 606.579 2091.61 607.188 2087.32C607.944 2082 607.71 2076.9 607.473 2071.71C607.364 2069.34 607.255 2066.95 607.239 2064.52C610.123 2018.34 609.503 1972.06 608.883 1925.76C608.033 1862.25 607.182 1798.72 615.378 1735.41C617.98 1707.95 621.737 1680.55 625.494 1653.15C633.115 1597.56 640.739 1541.96 638.729 1485.81C636.758 1419.55 619.558 1355.28 610.348 1289.94C587.378 1339.55 563.948 1389.09 546.418 1440.75C525.608 1497.64 520.729 1559.25 493.528 1614.01C480.138 1640.21 460.808 1663.15 441.098 1685.21C369.539 1762.32 305.718 1851.82 287.928 1955.42C288.098 1955.63 288.249 1955.86 288.399 1956.1C287.388 1962.82 285.608 1971.05 277.909 1973.09C270.989 1972.16 263.508 1972.57 256.659 1974.01C243.448 1975.09 230.039 1972.25 217.659 1967.95C210.819 1986.36 203.718 2004.77 199.789 2024.02C206.258 2025.51 214.619 2024.55 219.508 2029.34C222.138 2032.29 220.888 2035.93 217.289 2037.35C213.232 2038.61 208.984 2037.38 204.76 2036.16C202.372 2035.47 199.992 2034.78 197.659 2034.55C196.909 2038.57 196.249 2042.6 195.659 2046.65C204.098 2047.11 217.649 2047.93 216.638 2058.66C214.426 2069.04 204.777 2066.43 196.747 2064.25C195.668 2063.96 194.618 2063.67 193.619 2063.43C193.119 2068.65 192.729 2073.87 192.458 2079.09C194.613 2079.16 196.881 2079.12 199.193 2079.07C206.408 2078.92 214.056 2078.77 220.069 2082.18C225.569 2085.5 224.739 2093.84 218.239 2095.56C212.921 2096.88 207.246 2095.85 201.632 2094.84C198.335 2094.24 195.059 2093.65 191.888 2093.54C191.395 2104.52 191.314 2115.78 191.233 2127.15C190.911 2172.21 190.576 2218.99 164.438 2257.27C166.979 2267.15 163.458 2276.19 156.999 2283.92C134.168 2309.18 92.8083 2293.16 69.3783 2276.48C-0.311673 2226.82 -3.32167 2135.91 1.49933 2060.07C2.50915 2051.66 3.19915 2039.98 4.00155 2026.4C8.09387 1957.14 15.11 1838.41 82.3883 1851.3C96.9793 1845.79 111.048 1843.97 126.079 1841.17C124.178 1832.87 123.048 1824.27 124.198 1815.82C132.308 1733.36 161.518 1646.83 230.858 1594.99C267.329 1566.64 280.878 1525.77 278.499 1480.84C246.329 1350.12 213.138 1165.75 221.989 1030.25C221.816 1030.17 221.653 1030.08 221.485 1030C221.256 1029.96 221.024 1029.92 220.799 1029.88C213.384 1028.52 206.663 1023.2 207.711 1014.94C207.936 1013.16 208.511 1011.5 209.324 1009.94C204.558 987.318 209.186 951.146 212.954 921.695C215.106 904.882 216.977 890.259 216.659 881.599C216.684 877.91 216.855 874.179 217.027 870.434C217.478 860.574 217.935 850.616 215.739 841.079C82.2683 719.519 90.8883 550.659 126.218 388.589C118.968 383.939 118.968 375.029 121.608 367.849C127.508 351.269 135.289 335.109 142.499 319.029C174.798 198.269 267.338 102.529 389.028 66.5786C391.536 65.8915 395.914 63.7947 401.059 61.3309C414.707 54.7946 433.749 45.6751 437.569 53.4386C446.338 51.4586 455.149 49.6486 463.999 47.9586C468.768 39.1986 471.579 29.4986 472.569 19.5986C473.017 17.2837 472.958 14.7521 472.899 12.215C472.803 8.12149 472.708 4.01365 474.739 0.778639C474.548 0.208639 475.039 -0.421361 475.348 0.378639C484.369 -1.24136 483.058 6.81864 481.508 12.8486C484.518 30.0286 480.508 48.1686 471.698 63.0986C462.489 83.9486 438.268 79.2286 457.399 57.9686C431.369 61.7486 418.768 74.5086 433.369 98.0586C453.848 166.229 714.319 171.419 671.239 72.5386C669.069 71.3886 649.208 65.9586 644.848 62.3386C648.528 70.5386 650.649 84.5286 660.168 87.2486C663.268 87.6086 665.409 92.0786 661.948 93.7986C644.456 101.169 638.27 77.0114 634.468 62.1626C633.906 59.9671 633.396 57.9751 632.909 56.3186C627.428 41.7786 623.458 25.5086 629.188 11.1086C632.232 9.37503 634.877 22.7422 637.391 35.4554C639.214 44.6689 640.969 53.539 642.758 56.0686C643.188 56.1586 643.588 56.2286 643.928 56.2186C644.058 56.9886 644.608 57.6786 645.468 58.3086C650.088 61.6886 663.579 63.1786 667.768 65.1286C671.718 58.5186 681.108 60.9786 686.878 63.8186C695.418 67.0686 705.178 69.0686 712.168 74.9686C811.778 116.709 858.628 227.509 867.729 327.859C867.973 330.428 868.452 333.861 869.007 337.835C871.75 357.492 876.339 390.366 863.378 397.229C857.653 473.13 859.56 547.757 861.464 622.226C863.599 705.778 865.73 789.133 857.069 873.869C864.558 889.769 873.039 905.059 882.018 920.209C890.208 933.509 894.229 948.789 891.499 964.179C892.668 966.839 892.418 969.909 890.289 971.939C889.319 986.929 878.598 991.739 868.058 1000.33C862.388 1004.2 858.308 1010.89 851.458 1012.72C850.489 1022.27 849.808 1031.9 850.258 1041.52C907.698 1295.43 900.938 1609.13 869.909 1866.14C861.399 1935.93 856.749 2006.33 846.289 2075.87C845.088 2082.66 838.079 2084.62 832.298 2082.92C819.718 2091.94 804.708 2097.44 789.579 2101.63C788.119 2126.05 787.739 2138.16 792.729 2161.98C796.119 2160.83 801.198 2160.53 801.928 2164.42C822.308 2173.24 826.508 2197.84 839.548 2213.87C841.222 2213.56 843.027 2213.15 844.909 2212.72C854.59 2210.5 866.276 2207.83 872.229 2215.7C875.389 2225.94 862.114 2226.49 853.61 2226.84C852.132 2226.9 850.797 2226.96 849.718 2227.06C854.108 2232.57 858.579 2238.01 863.208 2243.35C865.317 2242.84 867.7 2242.08 870.218 2241.27C879.212 2238.38 889.927 2234.93 895.989 2241.07C897.668 2242.9 898.289 2245.37 896.899 2247.75C892.438 2255.35 882.698 2254.81 875.039 2256.29C881.188 2262.39 887.698 2268.15 894.418 2273.67C906.249 2269.22 917.558 2262.82 930.149 2261.16C937.258 2260.17 940.418 2270.86 933.858 2274.07C925.168 2278.33 915.388 2280.54 905.608 2282.38C926.668 2299.28 952.659 2309.08 975.579 2323.1C1002.46 2331.64 1028.06 2349.2 1024.26 2380.04ZM462.848 49.9986C462.659 50.3286 462.458 50.6586 462.258 50.9786C460.938 51.0686 459.608 51.1886 458.258 51.3386C459.789 50.8786 461.319 50.4486 462.848 49.9986ZM595.979 1080.62C586.069 1075.84 577.708 1068.19 572.729 1058.68C570.418 1054.26 577.319 1050.36 579.688 1054.79C584.468 1063.71 594.388 1073.03 605.508 1075.07C598.844 1059.59 597.184 1047.02 595.759 1036.23C592.863 1014.31 590.94 999.751 549.948 983.089C399.888 929.139 386.598 742.569 272.249 651.779C259.808 655.679 257.608 638.769 259.558 629.989C266.018 558.969 266.979 495.529 281.979 425.539C239.448 404.739 191.958 393.409 144.729 387.769C115.468 546.339 91.1593 690.289 218.558 817.239C282.128 886.339 352.088 949.799 417.758 1017.04C431.168 1028.98 440.329 1044.53 449.079 1059.97C455.879 1071.96 472.493 1090.07 483.265 1101.81C489.126 1108.2 493.258 1112.7 493.138 1113.31C518.048 1132.33 523.808 1133.92 547.018 1112.3C553.838 1107.52 561.428 1106.59 569.319 1104.41C581.378 1100.37 576.358 1091.9 594.208 1088.25C594.338 1085.72 594.758 1083.02 595.979 1080.62ZM844.428 395.019C838.239 480.351 839.453 557.026 840.791 641.625C840.86 646.014 840.93 650.424 840.999 654.859C841.808 715.329 842.188 775.819 840.088 836.269C800.459 733.841 799.363 624.922 798.27 516.276C797.895 478.99 797.52 441.737 795.588 404.789C811.319 399.549 828.218 397.259 844.428 395.019ZM641.014 958.938C637.416 960.251 638.969 966.051 642.609 964.723C667.853 955.511 695.056 953.906 721.698 954.908C750.045 955.974 778.167 960.077 806.2 964.187C816.856 965.749 827.513 967.321 838.197 968.689C840.625 969.113 843.057 969.522 845.493 969.907C846.073 969.999 846.594 969.927 847.06 969.76C847.764 969.842 848.466 969.935 849.17 970.014C853.001 970.446 852.971 964.442 849.17 964.014C845.977 963.655 842.782 963.27 839.586 962.867C823.933 960.132 808.408 956.712 792.762 953.926C776.419 951.015 759.915 949.162 743.375 947.782C712.602 945.216 679.69 944.172 650.229 954.905C649.365 955.22 648.805 955.797 648.493 956.469C645.983 957.231 643.485 958.036 641.014 958.938ZM290.452 1002.27C286.772 1002.7 283.082 1003.02 279.389 1003.32C278.961 1003.66 278.43 1003.92 277.78 1004C272.026 1004.72 266.159 1005.66 260.345 1006.93C251.719 1009.99 243.002 1012.78 234.325 1015.69C233.565 1016.06 232.809 1016.44 232.062 1016.84C231.346 1017.22 230.653 1017.28 230.027 1017.14C229.774 1017.22 229.519 1017.3 229.266 1017.39C229.201 1017.41 229.135 1017.44 229.071 1017.46C228.841 1017.45 228.61 1017.44 228.375 1017.43C228.034 1017.42 227.447 1017.39 226.752 1017.35C226.737 1017.08 226.742 1016.82 226.734 1016.56C224.285 1016.63 222.09 1013.57 224.395 1011.55C232.844 1004.14 244.195 1001.43 255.044 999.793C266.788 998.019 278.667 997.648 290.452 996.27C294.286 995.822 294.241 1001.83 290.452 1002.27ZM121.649 2026.77C127.048 2019.71 172.039 2021.26 182.558 2022.07C186.039 2006.49 190.718 1991.09 196.778 1976.29C164.358 2000.19 119.718 1973.29 117.548 1937.11C117.829 1911.94 121.098 1885.75 131.358 1862.49C130.358 1858.57 129.468 1854.68 128.569 1850.72C104.909 1851.93 76.9283 1855.99 66.6493 1879.39C37.8693 1963.54 35.3783 2056.62 49.8993 2143.92C56.4483 2181.39 77.5883 2259.49 125.778 2262.03C171.637 2255.83 172.794 2170.49 173.496 2118.76C173.637 2108.31 173.76 2099.24 174.229 2092.46C168.161 2091.87 161.981 2092.05 155.819 2092.23C148.9 2092.43 142.004 2092.63 135.319 2091.74C135.289 2086.43 169.048 2080.84 174.789 2080.23C175.168 2073.5 175.678 2066.77 176.378 2060.05C161.968 2057.19 147.018 2059.25 132.659 2056.96C140.708 2048.09 165.399 2047.54 178.079 2046.33C178.778 2041.42 179.628 2036.53 180.569 2031.63C167.999 2029.85 155.329 2028.73 142.628 2028.21C140.691 2028.12 138.595 2028.19 136.44 2028.25L136.432 2028.25C131.328 2028.41 125.925 2028.58 121.649 2026.77ZM118.789 2282.34C23.3383 2261.82 7.67833 2151.28 14.2393 2070C15.2531 2059.28 15.8438 2046.3 16.4909 2032.08C19.2584 1971.29 23.058 1887.83 65.3883 1860.89C-2.11167 1922.51 3.74933 2342.01 153.338 2268.79C149.608 2280.61 130.428 2284.02 118.789 2282.34ZM138.048 1883.57C137.848 1885.03 137.659 1886.48 137.489 1887.94C137.19 1892.58 136.597 1897.49 135.989 1902.52C133.369 1924.19 130.48 1948.09 149.718 1962.52C163.308 1973.08 183.448 1969.24 193.789 1956.34C166.778 1939.68 148.638 1912.34 138.048 1883.57ZM779.229 2167.08C751.858 2187.33 725.138 2209.88 706.128 2238.12C693.548 2261.09 676.808 2247.1 672.649 2228.7C669.278 2187.62 672.178 2152.14 668.229 2110.81C706.079 2115.97 744.958 2112.79 781.928 2103.66C777.479 2122.11 775.438 2129.11 775.298 2148.04C775.539 2154.28 775.448 2161.89 779.229 2167.08ZM656.928 2209.36C647.278 2224.34 644.558 2242.24 642.858 2259.2C638.308 2338.32 661.489 2348.97 732.928 2362.12C791.358 2378.02 849.808 2396.22 911.638 2398.8C931.418 2400.45 951.468 2400.02 971.378 2397.19C991.058 2395.39 1012.39 2392.67 1005.55 2367.18C996.999 2341.69 964.338 2339.01 942.848 2327.26C921.369 2316.6 902.178 2302.37 885.039 2286.23C873.869 2288.26 860.979 2289.92 853.489 2298.95C853.138 2299.37 852.499 2298.88 852.758 2298.45C858.218 2288.85 868.778 2284.25 878.778 2280.13C872.159 2273.51 866.108 2266.42 859.458 2259.82C844.508 2262.81 830.098 2270.09 815.229 2272.51C815.048 2265.57 842.548 2251.67 849.369 2248.67C844.149 2242.6 839.178 2236.32 834.489 2229.85C819.848 2232.93 806.999 2241.67 793.039 2246.37C795.088 2234.62 815.348 2223.27 826.528 2218.29C816.499 2206.38 809.808 2177.93 794.249 2175.25C766.278 2191.32 741.518 2213.42 722.208 2238.88C716.399 2246.62 711.338 2256.26 702.308 2261.05C670.428 2274.76 655.878 2233.58 656.928 2209.36ZM1023.73 2416.49C929.558 2458.78 758.558 2405.42 666.028 2374.55C665.093 2374.21 664.18 2373.88 663.292 2373.56C640.478 2365.38 633.03 2362.7 639.758 2335.02C652.838 2360.26 680.968 2366.36 707.918 2371.42C728.621 2376.14 749.416 2381.76 770.335 2387.42C841.657 2406.72 914.42 2426.4 989.909 2411.9C1004.24 2409.65 1018.42 2401.89 1022.59 2387.57C1024.17 2391.29 1024.18 2395.83 1024.19 2400.32C1024.19 2403.14 1024.2 2405.95 1024.6 2408.53C1024.79 2411.19 1024.85 2414.07 1023.73 2416.49Z'
				transform='translate(193.0002 -10.00104)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
