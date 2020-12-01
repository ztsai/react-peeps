import React from 'react';
import { PieceType } from '../../types';

export const MediumBW: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g transform='translate(-169 464)'>
			<path
				d='M210.868 1387.45C196.1 1401.86 197.548 1428.44 207.402 1445.38C216.611 1479.95 313.947 1482.63 352.876 1482.6C374.422 1482.6 396.293 1481.44 417.564 1479.21C448.651 1476.49 484.112 1473.56 486.164 1445.88C486.678 1430.67 481.207 1407.77 467.712 1407.2C453.538 1352.2 407.157 1243.41 407.158 1243.41C412.586 1237.51 403.567 1228.64 398.159 1223.32L397.902 1223.07C390.178 1206.95 383.142 1192.5 374.856 1178.54C372.356 1103.07 367.304 1025.38 361.019 949.642C364.506 953.229 373.671 964.387 377.842 967.054L376.253 970.441C407.896 989.389 457.683 990.01 504.038 990.587C523.855 990.834 543.045 991.073 559.921 992.733C556.178 1003.72 551.538 1006.82 546.39 1009.13C541.856 1011.16 536.928 1011.37 531.87 1011.59C524.877 1011.9 517.636 1012.22 510.846 1017.35C490.344 1063.09 501.951 1154.21 545.386 1288.32C551.38 1307.91 563.995 1324.52 580.932 1335.09C623.744 1362.09 662.591 1381.16 699.683 1393.4C701.039 1393.77 702.399 1394.15 703.764 1394.53C724.868 1400.39 747.028 1406.54 768.284 1401.57C784.896 1397.95 794.001 1375.76 782.624 1362.39C801.199 1349.16 803.482 1321.56 787.649 1305.11C768.962 1283.5 736.254 1278.77 715.314 1258.79C718.068 1229.71 719.348 1201.05 723.273 1171.89C725.864 1171.15 730.051 1171.6 734.331 1172.06C741.137 1172.8 748.18 1173.57 749.414 1169.59C744.491 1164.72 730.433 1166.91 723.37 1170.02C723.998 1164.19 725.639 1148.84 726.282 1142.81C749.945 1149.65 750.503 1136.73 725.908 1140.68C728.905 1126.77 730.999 1112.03 730.694 1098.39C734.081 1095 731.511 1091.06 729.25 1087.6C728.507 1086.46 727.798 1085.38 727.344 1084.38C747.838 1080.72 769.635 1081.09 789.229 1074.07C785.03 1083.37 812.656 1199.51 831.218 1196.76C833.541 1197.08 837.375 1193.22 840.047 1189.27C880.04 1150.64 943.254 1138.08 986.716 1114.49C1096.16 1057.69 1241.88 994.938 1296.91 896.039C1339.07 794.4 1264.5 705.247 1169.46 648.041C1183.87 634.468 1182.97 618.917 1174.34 596.475C1148.23 512.291 1117.8 423.506 1062.41 349.691L1067.74 346.508C1068.07 345.701 1069.12 341.641 1065.38 327.919C1036.01 246.737 997.936 128.296 906.032 91.9081C905.094 89.9901 903.753 87.9111 901.216 88.0011C899.277 88.0011 898.839 89.1361 898.655 90.3631L896.699 103.369C843.451 33.5881 749.261 -0.397933 662.684 14.6251C643.134 18.1869 623.114 15.0602 603.493 11.9958C597.663 11.0854 591.869 10.1805 586.133 9.45807L586.672 2.85507C426.575 -22.5579 301.33 127.028 209.282 239.124C177.013 278.04 143.656 318.296 107.498 354.555C81.0451 378.85 52.7571 417.363 67.3051 456.643C70.5691 467.622 73.4301 475.394 80.5501 475.392L83.2121 486.769C-37.5501 544.085 1.00148 703.512 27.8945 814.726C29.7148 822.253 31.4817 829.56 33.1421 836.599C58.1681 946.615 81.2001 1054.61 106.935 1164.79C107.794 1168.91 112.413 1166.97 114.324 1164.87C114.346 1163.64 113.626 1158.49 113.216 1155.56C113.109 1154.8 113.023 1154.19 112.977 1153.84C114.638 1154.27 122.373 1156.3 123.887 1156.7L122.357 1165.86C163.266 1175.66 206.423 1176.14 248.321 1177.75C271.765 1231.55 269.407 1248.7 237.32 1296.83L237.27 1296.76C215.659 1321.54 205.901 1356.32 210.868 1387.45ZM289.966 386.183C299.211 383.087 309.023 378.555 320.845 371.92L329.652 366.978L329.782 377.076C329.946 389.941 327.969 401.71 323.907 412.056L320.814 419.932L314.405 414.407C306.101 407.25 297.842 401.63 289.157 397.223L276.37 390.735L289.966 386.183ZM888.742 405.336C877.678 425.324 864.322 445.002 851.405 464.032C822.897 506.032 793.418 549.463 784.341 601.399C783.282 607.856 782.827 630.593 782.827 630.593L791.277 627.148C819.495 615.642 849.434 607.083 878.386 598.807C889.577 595.608 901.147 592.301 912.488 588.861C917.106 587.624 921.699 586.178 926.143 584.779C936.924 581.386 947.109 578.18 957.817 577.634L961.077 577.468L962.708 574.64C977.461 549.06 966.397 524.677 953.728 501.892C946.118 485.283 936.33 469.679 926.862 454.584C917.049 438.94 906.902 422.764 899.488 405.835L894.619 394.72L888.742 405.336ZM390.543 670.372C376.589 652.707 361.01 634.828 344.238 617.232L351.093 607.643C380.115 621.022 396.017 639.404 401.139 665.497L390.543 670.372ZM905.324 1010.33C903.645 1010.33 902.07 1010.98 900.89 1012.16C899.693 1013.36 899.036 1014.98 899.041 1016.71L905.324 1016.69L905.324 1010.33Z'
				transform='translate(-111 -56)'
				fill={backgroundColor || '#FFFFFF'}
				fillRule='evenodd'
				stroke='none'
			/>
			<path
				d='M630.384 12.7272C553.754 -16.0558 467.969 7.09023 401.893 51.0482C283.727 130.939 209.033 256.502 109.754 356.167C81.4733 382.478 54.4343 419.922 66.7053 460.447C67.1004 461.678 67.4917 462.995 67.8972 464.358C70.9261 474.547 74.7473 487.4 86.8933 487.397C-36.1917 548.316 -0.488302 699.214 26.3392 812.597C28.9004 823.422 31.3807 833.905 33.6343 843.935C58.5133 953.292 81.9263 1063 107.443 1172.2C109.393 1180.32 118.134 1180.8 123.103 1176.66C158.18 1185.67 194.806 1187.58 231.053 1188.91L250.613 1189.61C272.139 1240.9 268.524 1253.23 239.511 1298.2L238.624 1299.58L238.419 1299.62C236.571 1299.99 236.531 1300.74 236.984 1300.94L237.034 1300.96L236.433 1301.71C216.688 1326.73 206.583 1359.8 210.893 1391.53C196.147 1408.09 197.811 1435.8 208.472 1454.26C221.695 1479.98 251.045 1486.92 277.594 1489.25C310.183 1493.53 343.084 1495.27 375.943 1494.38C392.183 1493.94 408.393 1492.88 424.553 1491.18C452.216 1488.18 494.315 1487.95 498.483 1452.44C499.403 1439.22 493.793 1411.57 478.943 1408.17C464.982 1354.59 447.897 1300.12 416.403 1253.97C425.657 1246.04 416.616 1232.51 409.582 1225.84L409.154 1225.44C402.38 1211.32 395.552 1197.21 387.643 1183.68C388.815 1179.32 387.798 1175.84 386.766 1172.32C385.87 1169.26 384.964 1166.17 385.465 1162.42C385.657 1115.69 382.043 1069.08 378.429 1022.49C377.298 1007.91 376.167 993.329 375.153 978.747C407.392 1001.38 463.08 1002.04 511.377 1002.61C527.984 1002.81 543.718 1002.99 557.323 1004.06C553.051 1013.64 544.865 1013.34 536.002 1013.02C527.77 1012.72 518.953 1012.41 512.143 1019.96C482.127 1084.76 522.14 1221.94 544.637 1291.88L545.991 1296.08C552.326 1316.79 565.656 1334.67 584.074 1346.17L585.691 1347.18C622.914 1370.54 662.476 1391.37 704.283 1405.15C705.35 1405.44 706.421 1405.74 707.495 1406.04C729.585 1412.2 753.327 1418.81 776.044 1413.41C794.526 1408.92 806.609 1386.67 796.614 1369.59C815.219 1352.84 814.815 1325.02 798.562 1307.23C779.964 1285.35 748.864 1280.52 727.914 1262.29C730.345 1236 731.61 1209.81 734.933 1183.64C737.636 1183.5 740.337 1183.82 743.018 1184.14C747.992 1184.72 752.888 1185.3 757.584 1182.98C771.396 1169.66 747.817 1164.13 736.653 1167.59L737.874 1156.14C762.326 1161.6 763.138 1137.92 739.683 1140C741.885 1128.83 743.078 1117.47 743.042 1106.2C745.403 1102.65 745.254 1098.32 743.313 1094.99C758.595 1092.66 774.899 1092.56 789.704 1088.11C790.025 1107.36 819.185 1245.52 850.754 1199.4C866.989 1182.21 888.89 1171.71 910.595 1162.77L913.344 1161.65C940.973 1150.25 968.443 1138.48 995.573 1125.94C1076.25 1088.6 1154.3 1045.12 1226.34 992.898C1299.04 946.101 1345.66 872.922 1309.07 786.547C1286.1 727.992 1237.5 684.779 1184.94 652.607C1197.61 637.839 1193.05 619.056 1187.07 602.46L1186.31 600.397C1159.96 515.6 1130.26 429.874 1077.47 357.477C1085.98 352.399 1074.37 321.195 1067 301.401C1064.76 295.398 1062.92 290.445 1062.15 287.587C1033.84 218.695 991.403 119.422 916.473 92.9972C912.551 86.1432 900.52 85.7832 899.063 95.4772C842.721 29.5022 752.795 0.69723 667.993 14.7202C648.831 18.0705 630.273 15.1406 611.544 12.1838C605.458 11.2229 599.353 10.2592 593.204 9.50723C605.573 10.0172 617.874 11.5072 629.983 14.1672C630.933 14.3772 631.294 13.0472 630.384 12.7272ZM237.034 1300.96L237.306 1300.73C237.58 1300.51 237.864 1300.31 238.164 1300.13C238.143 1300.19 238.143 1300.22 238.204 1300.16C237.914 1300.86 237.433 1301.04 237.103 1300.98L237.034 1300.96ZM238.624 1299.58L238.861 1299.54C239.268 1299.48 239.734 1299.43 240.284 1299.42C239.583 1299.46 238.795 1299.68 238.214 1300.15C238.32 1300 238.407 1299.91 238.549 1299.7L238.624 1299.58ZM597.635 155.528C585.2 109.825 584.942 61.5052 590.254 14.6772C618.113 28.5277 649.91 26.2958 681.116 24.1054C695.376 23.1044 709.513 22.1121 723.094 22.6672C789.686 25.3042 854.299 58.0652 895.573 110.437C879.415 181.818 840.891 262.996 762.513 279.377C684.832 293.342 616.177 226.753 597.635 155.528ZM270.613 197.837C221.983 252.905 179.41 313.185 127.105 364.938C96.4573 392.638 67.4613 430.497 91.3633 472.187C96.4043 474.177 97.2903 481.603 92.9433 485.097C93.2124 485.063 93.8604 484.819 94.6465 484.524C96.8917 483.682 100.264 482.417 99.1533 484.377C85.7543 490.097 73.9733 498.387 63.8233 508.417C127.063 461.892 210.917 499.14 266.073 540.837C293.294 560.727 318.603 582.647 342.303 606.238C350.784 607.757 359.553 612.287 366.622 615.827C415.378 639.25 423.017 670.902 418.994 721.497C404.361 749.392 397.439 781.291 387.244 811.198C376.758 834.447 397.387 818.778 400.344 808.637C407.523 799.701 410.987 787.826 415.388 777.438L415.704 776.698C416.954 773.727 419.634 771.517 423.084 772.507C425.854 773.301 428.423 776.727 427.348 779.694L425.139 785.384C414.443 812.877 403.391 840.513 394.874 868.687C423.654 851.448 437.904 818.819 453.013 790.007C457.164 782.347 468.334 789.097 464.594 796.777C461.124 803.867 457.584 810.937 453.834 817.887C444.033 838.772 436.928 860.808 431.044 883.097C463.393 863.802 474.668 824.491 483.973 791.318C484.547 781.854 498.192 783.716 496.784 793.007C493.323 811.448 488.044 829.617 479.784 846.507L477.6 859.278C476.147 867.793 474.707 876.311 473.334 884.837C474.113 884.457 474.954 884.407 475.763 884.607C504.424 855.744 515.896 815.923 525.903 777.648C522.961 767.636 524.065 757.485 525.179 747.247C525.866 740.932 526.557 734.585 526.303 728.217C528.834 706.85 521.943 686.938 512.4 667.86C506.681 608.841 449.841 583.241 410.212 548.55C361.675 500.58 336.155 427.132 267.933 403.357C260.84 403.808 254.002 402.285 247.363 399.997C247.073 399.917 247.023 399.417 247.363 399.367C254.116 398.264 260.865 396.54 267.634 395.307C269.458 389.357 276.751 388.63 282.235 391.29C341.225 365.433 390.119 319.966 436.994 276.707C391.224 234.362 331.964 208.074 270.613 197.837ZM1052.08 343.797C996.418 347.772 960.379 375.272 920.874 410.537C917.924 413.087 914.933 415.587 911.874 418.007C929.135 448.28 947.745 477.752 965.733 507.607L969.104 513.223C974.351 521.981 979.473 530.897 982.596 540.648C990.726 566.378 970.948 607.054 955.141 639.562C950.262 649.596 945.762 658.851 942.577 666.649C936.31 677.711 930.081 688.445 923.993 698.934C867.318 796.584 822.979 872.979 876.063 994.957C877.213 991.852 877.019 985.93 876.811 979.598C876.449 968.548 876.046 956.253 882.674 955.517L882.464 953.402C879.132 919.065 878.982 877.709 889.382 847.388C883.626 906.058 889.865 967.546 912.094 1022.32C915.513 991.793 914.259 959.166 913.008 926.62L913.008 926.617C912.131 903.8 911.256 881.027 911.993 859.047C911.924 850.847 924.323 850.937 924.674 859.047L925.097 872.819C926.55 919.491 929.06 968.364 956.193 1007.85C956.97 989.97 956.547 971.81 956.122 953.6C955.119 910.585 954.109 867.293 968.903 826.807C970.624 822.657 976.823 822.977 977.003 827.908C977.39 847.523 985.684 913.921 999.993 925.437C1003.92 913.427 1003.52 900.287 1002.89 887.707C1000.94 842.12 994.372 797.637 986.305 752.688C984.846 743.806 987.459 732.874 996.653 729.448C1003.48 722.948 1012.91 718.337 1020.71 714.638C1070.28 690.141 1138.48 694.86 1172 644.407L1173.63 641.952C1177.54 636.036 1181.2 630.193 1182.85 623.097C1178.34 606.215 1171.84 589.761 1166.32 573.187C1161.39 558.544 1156.33 543.95 1151.02 529.44L1149.24 524.607C1125.54 459.893 1095.37 397.775 1052.08 343.797ZM330.124 383.157C319.893 388.899 309.342 394.151 298.214 397.877C307.794 402.737 316.553 408.877 324.664 415.867C328.739 405.489 330.265 394.248 330.124 383.157ZM796.594 608.437C809.548 534.318 864.951 478.168 900.334 414.247C915.113 447.991 939.375 477.03 954.713 510.608C966.486 531.759 977.227 554.458 963.853 577.647C947.627 578.474 932.628 584.969 917.183 589.096C876.435 601.457 834.852 611.491 795.353 627.597C795.483 621.198 795.554 614.777 796.594 608.437ZM319.383 608.127C252.52 545.39 150.148 464.273 57.8003 523.875C-11.9391 582.906 19.3766 708.642 43.2412 804.462C48.8945 827.161 54.1297 848.181 57.5043 866.237C79.9093 965.34 103.589 1064.17 125.553 1163.37C203.875 1173.7 283.375 1179.12 362.084 1169.81C361.194 1099.87 356.475 1030.01 354.933 960.047C353.499 923.999 353.997 887.81 348.595 852.107C347.114 842.728 346.726 832.718 346.334 822.609C345.513 801.429 344.676 779.814 333.733 762.648C327.75 753.414 318.019 745.33 315.844 734.198C315.794 733.677 316.473 733.507 316.803 733.797C321.534 737.957 325.334 742.917 330.353 746.907L334.044 749.766C340.047 754.44 346.027 759.43 349.744 766.077C349.874 765.113 349.13 761.554 348.261 757.396C346.577 749.333 344.421 739.02 347.252 741.007L348.061 743.221C353.831 759.095 359.033 775.154 360.514 792.137C366.178 850.024 369.343 908.196 374.193 966.167C385.891 971.441 396.639 979.194 409.414 981.997C425.807 983.619 442.217 983.252 458.643 982.883C463.178 982.782 467.714 982.68 472.249 982.62L474.214 982.597C504.573 982.144 534.884 982.762 565.19 983.381L565.269 983.382C595.986 984.01 626.696 984.637 657.443 984.149C719.907 986.573 783.76 970.206 837.073 937.327C816.614 844.906 859.691 771.051 903.269 696.335C921.905 664.383 940.633 632.274 954.523 598.488C901.108 611.964 847.95 626.438 794.683 640.637C801.872 658.216 778.622 708.031 769.872 725.685C723.057 818.001 628.381 878.333 543.244 790.227C543.284 790.497 543.313 790.767 543.344 791.047C540.485 788.437 537.326 786.14 534.143 783.937C529.867 819.042 518.301 854.427 496.473 882.617L494.092 885.605C487.283 894.097 477.426 905.264 466.524 898.847C458.497 894.505 456.987 886.054 458.544 877.527C432.318 906.075 403.744 912.524 421.664 863.398L421.071 864.013C411.04 874.317 384.414 897.086 381.703 870.167C382.885 856.765 391.139 844.801 395.334 832.247C390.853 835.017 385.813 836.387 380.683 834.417C368.393 829.701 372.73 816.64 375.983 806.842C376.372 805.671 376.746 804.546 377.073 803.488C384.844 778.437 392.773 753.427 400.835 728.467C399.695 722.411 400.494 716.367 401.275 710.458C402.408 701.888 403.504 693.601 398.594 685.967C395.044 687.827 390.263 687.437 386.834 682.857C366.714 656.057 343.624 631.227 319.383 608.127ZM354.924 619.097C371.22 636.196 386.867 654.015 401.594 672.657C396.312 645.752 379.012 630.201 354.924 619.097ZM1008.23 735.898C1067.47 715.293 1136.69 702.462 1182.49 655.787C1189.76 663.477 1197.37 671.198 1205.07 679.016C1253.15 727.831 1304.98 780.452 1302.07 852.927C1301.07 904.218 1260.37 940.264 1221.31 967.754L1218.92 969.426C1148.64 1019.96 1073.24 1063.13 994.933 1099.96C965.964 1113.61 936.594 1126.38 906.983 1138.59C882.392 1148.53 857.248 1159.6 838.084 1178.37C815.447 1141.64 805.163 1098.51 798.102 1056.32L797.673 1053.74C796.513 1040.25 795.353 1026.78 793.884 1013.32C792.254 1004.29 793.508 993.612 788.323 985.757C807.174 978.927 825.403 970.387 842.693 960.277C848.318 978.394 878.955 1066.3 891.054 1006.5C895.348 1014.22 898.023 1023.23 902.742 1030.52C908.631 1038.15 919.607 1035.86 924.013 1027.09C928.138 1019.09 927.682 1009.36 927.256 1000.25C927.149 997.96 927.044 995.71 927.013 993.537C926.872 989.101 926.897 984.663 926.922 980.225L926.922 980.22C926.951 975.167 926.979 970.124 926.763 965.087C934.443 983.547 942.823 1001.67 950.693 1020.08C952.059 1022.81 955.658 1021.88 957.894 1020.88L958.204 1020.74C960.537 1021.78 963.149 1020.08 962.783 1017.17C966.927 1012.26 968.172 1004.59 968.554 998.22L968.603 997.318C970.101 959.766 971.301 922.221 972.784 884.657C977.24 903.232 985.979 920.624 995.195 937.258L996.374 939.377C1002.65 947.218 1008.1 936.627 1009.78 930.694L1009.87 930.337C1012.83 927.247 1014.17 922.707 1014.73 918.537C1015.48 901.39 1014.07 884.086 1012.67 866.865C1012.16 860.496 1011.64 854.139 1011.23 847.807C1012.19 848.837 1013.72 849.417 1015.24 849.177C1027.33 849.686 1039.45 848.38 1051.47 846.949L1054.95 846.533C1068.54 844.922 1083.04 844.71 1094.89 837.347C1099.57 834.448 1099.17 826.297 1093.28 825.017C1080.98 822.326 1068.48 825.401 1056.28 828.401C1054.01 828.961 1051.74 829.518 1049.49 830.035L1048.06 830.357C1037.33 833.797 1018.16 834.903 1010.84 843.367C1008.87 820.934 1006.14 798.572 1002.71 776.317C1002.38 773.858 1001.88 771.257 1001.36 768.594C999.035 756.574 996.46 743.273 1008.23 735.898ZM544.534 801.648C543.893 800.357 543.034 799.177 542.054 798.087C543.013 799.597 543.903 801.158 544.744 802.738C544.689 802.373 544.709 801.979 544.534 801.648ZM966.714 867.837C964.103 886.686 963.942 905.857 963.782 924.928C963.756 928.028 963.73 931.125 963.693 934.217C964.693 912.097 965.523 889.957 966.714 867.837ZM659.575 883.545C659.164 882.868 658.064 883.318 658.284 884.087C663.115 901.127 672.924 915.217 687.304 925.648C701.334 935.837 721.124 943.488 738.264 937.807C742.844 936.288 743.484 929.078 738.264 927.857C707.601 923.346 675.753 912.013 659.575 883.545ZM529.774 908.527C526.535 908.248 523.245 907.527 520.064 906.427C522.404 909.347 526.335 910.168 529.774 908.527ZM374.683 972.637L374.983 976.557C376.903 976.948 378.784 977.437 380.664 977.917C378.483 976.337 376.454 974.587 374.683 972.637ZM786.993 1071.57C781.461 1014.59 784.844 995.186 778.545 991.244C775.659 989.437 770.738 990.879 761.993 993.443C747.254 997.763 721.652 1005.27 676.614 1005.77C677.198 1008.95 673.015 1008.58 674.493 1007.7C672.757 1001.22 663.54 1018.22 660.949 1023C660.73 1023.4 660.559 1023.72 660.443 1023.93C657.634 1029.89 656.353 1037.31 655.364 1043.83C648.394 1080.34 674.368 1112.33 712.243 1096.81C710.743 1096.68 709.185 1096.76 707.626 1096.84C704.13 1097.02 700.644 1097.2 697.844 1095.05C697.864 1095.04 697.874 1095.02 697.893 1095C695.302 1090.35 704.727 1088.89 711.752 1087.79C714.55 1087.36 716.968 1086.98 718.094 1086.49C733.494 1083.27 748.933 1080.28 764.243 1076.67C771.704 1074.91 779.344 1072.15 786.993 1071.57ZM579.115 1004.69C549.682 1025.5 557.332 1049.6 565.996 1076.89C567.314 1081.04 568.656 1085.27 569.894 1089.57C583.599 1137.43 594.128 1186.2 605.855 1234.57C612.763 1277.53 639.929 1314.79 679.013 1334.12C696.594 1343.38 715.883 1349.37 735.594 1351.84C736.91 1351.97 738.251 1352.06 739.594 1352.14C746.021 1352.56 752.518 1352.97 756.733 1358.62C759.624 1361.75 759.943 1366.89 756.733 1369.96C748.378 1379.43 726.817 1373.97 711.941 1370.2C708.874 1369.42 706.09 1368.71 703.766 1368.23C603.053 1337.7 587.746 1264.72 568.32 1173.23C565.848 1159.88 562.429 1146.34 558.984 1132.71C549.315 1094.43 539.444 1055.36 549.733 1017.36C541.293 1021.87 528.326 1020.32 522.34 1028.85C510.063 1106.64 532.754 1185.43 554.444 1260.75C557.167 1270.2 559.874 1279.6 562.494 1288.94C567.71 1306.53 578.721 1321.99 594.743 1331.23C628.92 1352.1 664.742 1371.18 702.644 1384.35L703.794 1384.68C705.825 1385.26 708.105 1385.95 710.576 1386.69C731.508 1393 766.141 1403.44 779.344 1389.52C782.424 1384.97 782.284 1380.1 778.404 1377.08L776.524 1376.36C772.913 1374.97 768.661 1373 768.003 1368.78L767.964 1368.49L768.103 1368.44C764.964 1362.68 771.056 1356.23 776.513 1354.82C784.204 1354.54 787.781 1349.42 790.515 1341.9C793.594 1318.79 774.372 1306.31 755.397 1293.99C744.146 1286.69 732.981 1279.44 726.603 1270.07C724.787 1279.26 710.638 1277.51 710.712 1268.24C710.274 1246.15 713.944 1223.9 717.569 1201.93C718.567 1195.88 719.56 1189.86 720.464 1183.87C717.77 1183.75 715.005 1184.14 712.241 1184.53C708.389 1185.07 704.539 1185.61 700.883 1184.79C700.044 1179.53 714.822 1174.05 721.322 1171.64C721.998 1171.39 722.584 1171.17 723.054 1170.99C724.084 1166.19 725.174 1161.41 726.334 1156.65C686.046 1159.08 704.76 1146.16 730.204 1141.74C730.996 1139.04 731.69 1136.27 732.323 1133.52L732.634 1132.16C734.243 1125.29 735.094 1118.8 735.374 1112.09C717.562 1120.25 697.524 1125.2 678.223 1121.05C643.349 1112.95 625.272 1070.61 639.272 1038.84C636.087 1027.57 642.34 1015.58 647.993 1006.08C625.034 1006 602.063 1005.37 579.115 1004.69ZM664.901 1008.61C665.981 1007.66 666.986 1006.39 668.254 1005.98L667.628 1006.45C666.658 1007.19 666.027 1007.71 665.327 1008.28L664.668 1008.8L664.901 1008.61ZM911.864 1022.86C911.493 1023.94 910.924 1021.81 912.034 1022.46C911.983 1022.59 911.914 1022.72 911.864 1022.86ZM126.513 1168.35C126.504 1168.2 126.504 1168.07 126.483 1167.92C127.255 1168.12 128.029 1168.35 128.813 1168.54C128.044 1168.47 127.284 1168.4 126.513 1168.35ZM365.263 1184.42C331.757 1187.83 297.989 1185.73 264.473 1189.54C271.045 1198.62 275.733 1208.66 279.664 1219.27C307.192 1193.27 351.353 1201.22 384.473 1210.8C382.244 1204.29 380.191 1197.72 378.353 1191.09C373.397 1191.89 367.738 1189.1 365.263 1184.42ZM285.164 1231.03C311.165 1210.54 365.677 1217.62 392.594 1233.9C393.844 1238.18 397.148 1240.81 400.483 1241.1C403.782 1244.7 405.089 1250.15 409.494 1252.62C426.182 1307.85 448.624 1361.51 459.933 1418.32C382.59 1443.37 310.096 1444.81 232.263 1419.55C234.134 1417.71 235.013 1415.24 235.053 1412.5C235.103 1412.55 235.164 1412.59 235.223 1412.64C224.908 1361.96 230.403 1345.32 255.926 1303.07L257.513 1300.45C293.63 1298.89 329.854 1297.55 366.004 1298.64C374.492 1299.63 390.967 1292.65 383.544 1282.5C376.001 1274.22 364.721 1275.05 354.235 1275.83C352.613 1275.95 351.01 1276.07 349.443 1276.15L347.954 1276.23C321.155 1277.67 294.434 1281.7 268.893 1290.13C271.627 1284.31 272.476 1277.4 274.674 1271.24C299.892 1268.37 325.36 1267.7 350.653 1269.81C352.915 1270.02 355.273 1270.44 357.663 1270.87C365.242 1272.23 373.15 1273.65 379.353 1268.65C393.928 1243.28 290.737 1257.19 278.874 1260.02L279.079 1259.54C282.924 1250.51 286.915 1241.14 285.164 1231.03ZM276.273 1266.57C278.161 1266.33 280.036 1266.11 281.914 1265.86C279.903 1266.41 277.903 1266.98 275.903 1267.58L276.273 1266.57ZM212.563 1403.73C210.697 1457.38 251.302 1470.25 297.004 1471.62C325.483 1474.33 354.174 1475.16 382.763 1474.04L396.23 1473.26C418.722 1471.93 441.383 1470.28 463.272 1465.15C477.687 1462.18 481.301 1449.29 476.094 1436.69C473.844 1437.69 471.183 1437.76 469.103 1436.3C466.773 1434.67 465.084 1432.94 463.803 1430.9C389.744 1463.85 296.555 1460.25 224.783 1422.33C215.586 1421.88 214.392 1410.89 212.563 1403.73Z'
				transform='translate(-116.0002 -64.00373)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
