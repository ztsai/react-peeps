import React from 'react';
import { PieceType } from '../types';

export const Blank: React.FC<PieceType> = ({ strokeColor }) => {
	return (
		<g>
			<path
				d='M139.603 3.56553C135.664 -1.94347 124.939 -1.13147 123.503 6.43953C120.915 20.0849 135.421 20.5 145.678 20.7936C146.541 20.8183 147.374 20.8421 148.164 20.8729L150.534 20.9796C162.089 21.4589 173.382 20.7633 184.867 19.2685C185.682 19.1615 185.915 18.0855 185.067 17.7945C176.838 14.9775 168.67 11.9555 160.3 9.57154C156.258 8.42054 152.225 7.23253 148.195 6.03753C145.882 5.35153 142.149 4.43953 139.603 3.56553ZM73.5171 5.04064C78.9371 3.07164 84.5701 7.67964 85.2731 12.8726C86.0826 18.8569 81.7664 22.7969 76.2956 23.5116L76.0211 23.5446C63.9451 24.8746 51.9601 27.3066 39.8681 28.6816C34.3763 29.3053 28.8431 29.7157 23.3145 29.8633L19.3635 29.9521C14.5218 30.0745 9.32892 30.1849 4.8591 28.5176L4.8761 28.4876C3.6891 28.1436 3.1431 26.4316 4.4641 25.4956C9.2231 22.1306 15.6381 20.8586 21.1781 19.2596C26.7481 17.6506 32.3591 16.1676 37.9851 14.7746C49.7991 11.8526 62.0711 9.19864 73.5171 5.04064ZM153.46 39.688L153.152 39.7187C147.74 40.2421 138.511 40.3887 134.767 44.8451C133.854 45.931 133.717 47.111 134.31 48.382C136.276 52.5989 143.689 53.5632 149.03 54.0353L150.816 54.1861C150.479 55.1711 150.195 56.1691 149.879 57.062L149.804 57.2893C148.184 62.4353 153.301 67.2333 158.238 66.5701C163.551 65.856 166.167 60.2691 163.962 55.591C168.276 55.9891 172.602 56.1911 176.708 55.7751C187.893 54.6421 187.912 39.4961 176.708 38.3571C170.637 37.7389 164.074 38.4903 157.823 39.2059C156.348 39.3748 154.89 39.5416 153.46 39.688ZM56.7411 44.2924L58.0752 44.1806C58.7215 44.1236 59.3688 44.0633 60.0166 44.0029C65.1694 43.5229 70.3594 43.0394 75.4291 44.2024C83.0961 45.9624 82.534 57.1164 75.4291 59.1674C70.6988 60.5324 65.5823 60.4201 60.576 60.3102L60.5758 60.3102C58.9547 60.2746 57.3452 60.2393 55.7641 60.2544C54.7471 60.2645 53.7321 60.2905 52.7161 60.3074C52.5161 62.7244 51.7231 64.8084 50.5091 66.8904C49.6391 68.3845 48.5291 69.8035 47.4371 71.1304C44.8411 74.2845 38.7181 74.2135 36.0981 71.1304C34.1601 68.8484 32.6171 66.2234 32.5921 63.1345C32.5861 62.3435 32.6821 61.5034 32.8711 60.6775L29.343 60.7391C20.7079 60.8709 12.0069 60.8124 3.52806 59.4405C0.512058 60.0644 -1.95594 54.6224 2.20706 52.9935C13.5241 48.5674 26.1671 47.2645 38.1761 45.9354C44.3471 45.2514 50.5521 44.7804 56.7411 44.2924ZM129.748 115.04C137.871 103.66 126.365 92.9574 118.814 88.3673C116.836 86.9473 118.406 82.2436 122.633 82.9706C161.03 89.5676 141.135 155.708 92.1117 119.413C86.2751 114.705 93.3431 104.334 99.6339 108.366C99.9529 108.611 100.287 108.87 100.636 109.139C107.704 114.603 120.635 124.601 129.748 115.04ZM130.466 158.065C131.041 157.555 130.43 156.623 129.736 156.811C127.323 157.463 124.665 157.129 122.201 157.654C119.792 158.168 117.487 159.054 115.268 160.113C110.239 162.516 105.743 165.796 101.728 169.649C97.1376 174.054 92.6206 179.992 92.7836 186.656C92.9906 195.127 100.433 202.25 109.107 199.635C114.178 198.106 118.674 192.027 116.532 186.557L116.469 186.393C116.253 185.814 115.959 184.932 115.584 184.039L115.832 183.407C117.086 180.274 118.642 177.324 120.253 174.363C121.69 171.721 123.265 169.223 124.899 166.699C126.617 164.046 128.112 160.154 130.466 158.065ZM113.387 180.961C114.023 181.261 114.566 181.994 115.023 182.85C114.795 182.124 114.324 181.402 113.387 180.961Z'
				transform='translate(52 55.99988)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
