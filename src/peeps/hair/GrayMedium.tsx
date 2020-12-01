import React from 'react';
import { PieceType } from '../types';

export const GrayMedium: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g>
			<path
				d='M295.213 448.435C274.513 448.378 255.566 444.345 237.589 435.514C215.883 428.432 192.18 424.573 174.565 408.896C165.987 410.715 157.195 401.909 150.079 396.666C138.473 439.369 78.0735 432.266 52.5525 404.667C36.9405 391.483 30.6605 358.868 57.7715 350.24C13.3525 320.07 -2.69155 267.954 0.361452 211.561C3.57445 116.963 76.3005 18.6151 169.775 2.20705C188.215 -1.03695 207.152 -0.693948 225.513 3.16405C235.766 5.38805 245.677 9.70005 256.65 9.50405C299.208 2.77705 345.951 3.55005 381.103 30.7871C437.286 68.3761 445.095 143.585 438.53 204.053L438.796 204.619C435.53 226.815 430.102 247.144 419.837 260.526C419.038 279.765 412.353 320.833 411.858 337.069C413.057 412.619 370.147 446.151 295.213 448.435'
				transform='translate(-6.908852 59.94815)'
				fill={backgroundColor || '#FFFFFF'}
				stroke='none'
			/>
			<path
				d='M232.632 3.21577C57.566 -32.2812 -80.469 235.261 54.082 354.145C-2.66999 403.011 124.326 477.805 158.958 410.108C165.516 415.152 174.689 421.848 183.228 417.867C185.003 417.026 185.485 414.446 184.54 412.865C180.624 406.305 171.406 404.048 165.504 399.592C145.403 383.398 133.52 359.048 125.8 334.838C129.674 327.352 122.25 326.496 113.022 325.432C105.402 324.553 96.5507 323.533 91.816 318.52C63.598 297.131 90.95 245.466 124.256 259.447C127.007 262.554 129.688 266.53 133.88 267.601C136.128 268.176 137.837 265.361 136.161 263.684C132.188 260.454 128.864 256.535 125.073 253.105C186.74 248.95 227.501 193.774 267.507 153.135C275.746 144.5 283.87 135.787 291.976 127.039L300.081 118.28C303.665 114.803 307.529 110.746 309.1 105.979C314.837 106.955 319.195 111.414 323.321 115.99L324.523 117.329C330.006 123.1 335.735 128.895 341.535 134.762C378.21 171.862 417.734 211.843 416.154 267.024C414.178 279.386 413.697 294.038 413.191 309.475C411.635 356.884 409.837 411.708 363.727 430.425L362.695 430.86C328.565 445.132 287.672 450.249 253.097 434.97C247.796 432.511 243.09 429.05 237.412 427.57C233.001 426.421 227.697 431.815 230.901 436.04C236.963 444.036 247.787 448.266 257.335 451.44L259.472 452.142C310.872 466.831 382.557 456.01 410.385 405.587C419.434 386.816 421.731 365.821 422.797 345.236L423.003 341.053C424.076 321.023 430.758 278.449 430.893 267.1C442.581 250.203 447.822 228.465 449.741 208.139C451.419 192.675 451.545 177.135 450.894 161.609C454.804 70.8338 379.159 -7.62723 286.692 6.81177C268.343 11.2078 250.35 9.14877 232.632 3.21577ZM259.881 23.3518L256.411 22.673C252.847 21.968 249.401 21.2637 246.047 20.5783C214.574 14.147 191.25 9.38068 155.897 21.3408C68.704 50.4638 12.493 143.235 14.923 233.402C14.98 284.624 40.373 349.941 97.569 357.211C106.217 357.898 106.352 371.317 97.8309 370.915L97.57 370.899C83.471 370.019 69.823 364.906 58.189 357.039C42.581 382.317 58.223 405.254 82.541 416.119C107.181 429.12 133.522 424.975 149.986 402.004C134.96 385.31 123.884 360.36 121.322 338.228C79.122 354.598 47.295 294.254 74.751 262.252C84.413 248.477 103.169 239.867 118.631 249.645C185.152 224.053 231.594 169.661 276.06 116.38L278.434 113.68C286.219 104.887 304.12 85.0244 306.106 82.4568C308.337 79.5698 312.842 82.1688 312.898 85.2698C312.938 87.4748 312.815 89.7108 312.567 91.9418C320.846 97.2808 327.555 105.388 333.73 112.873C379.828 149.052 417.316 186.943 428.977 244.34C436.219 235.888 439.503 224.793 441.872 214.196C446.84 144.292 433.491 60.5828 361.368 30.2588C333.287 16.3284 307.659 18.8555 279.851 21.5976C273.334 22.2402 266.697 22.8946 259.881 23.3518ZM115.036 284.98C113.163 282.88 93.3216 283.204 96.3246 285.885C104.96 286.506 110.873 293.087 115.751 298.517C120.708 304.035 124.596 308.362 129.187 304.036C135.574 295.676 122.567 287.624 115.463 285.126L115.036 284.98Z'
				transform='translate(-13.00011 55.00043)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
