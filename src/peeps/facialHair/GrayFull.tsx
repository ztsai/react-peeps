import React from 'react';
import { PieceType } from '../types';

export const GrayFull: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g>
			<path
				d='M12.6923 16.4551C12.6923 16.4551 9.79756 0.000328749 2.72979 0.000328749C0.407445 0.000328749 -0.900001 27.7255 2.0359 64.3064C4.97181 100.887 36.4767 131.39 63.968 155.469C75.2078 164.067 85.825 175.45 100.099 179.158C140.642 202.243 190.84 207.642 237.117 200.263C245.875 202.607 256.948 198.594 264.84 194.436C290.746 180.379 296.601 150.286 302.39 124.714L303.115 121.543C304.053 115.957 300.948 99.4329 300.472 100.999C291.122 109.677 283.495 120.411 272.655 127.497C261.799 135.624 248.973 132.109 236.877 128.794C234.684 128.193 232.514 127.598 230.385 127.081C217.483 123.716 210.419 128.022 203.129 132.467C198.134 135.511 193.033 138.621 185.876 139.373C146.826 136.808 113.116 113.418 78.8444 99.6846C47.9714 78.3594 30.6682 47.4509 12.6923 16.4551ZM213.952 62.5686C189.601 51.0448 158.307 46.9371 142.556 72.2307C134.388 79.5071 110.69 93.1088 106.413 91.9536C102.48 94.1813 113.548 100.441 116.25 100.703C137.253 113.61 159.457 114.985 183.574 106.705C194.36 103.975 204.29 99.3677 212.194 91.9373C219.189 85.9164 221.269 88.53 223.912 91.851C225.746 94.1547 227.85 96.7987 232.053 97.1374C246.277 106.383 277.622 113.68 292.709 101.246C295.911 99.7327 295.006 95.6097 292.728 92.5409C283.369 80.9906 273.187 68.9142 259.743 61.5592L259.745 61.5511C245.151 55.1168 227.403 53.4356 213.952 62.5686Z'
				transform='translate(-14.30119 -16.24488)'
				fill={backgroundColor || '#FFFFFF'}
				fillRule='evenodd'
				stroke='none'
			/>
			<path
				d='M3.59483 3.67269L3.60231 4.63254C2.94174 12.2569 6.80559 19.9107 10.5628 27.3532C12.3501 30.8936 14.1132 34.3861 15.3538 37.805C28.459 64.5527 39.3546 95.2841 68.5643 110.349C73.7225 113.392 79.3069 117.164 85.2283 118.67C89.187 119.676 92.5343 114.779 89.3478 112.05C46.4525 90.233 43.1558 73.6328 21.8678 35.334C16.5588 26.5383 12.3688 17.6097 7.35719 8.58731C7.03472 7.9245 6.60278 6.51299 6.14662 5.02228C4.95388 1.12457 3.59548 -3.31455 3.59483 3.67269ZM3.34009 40.9488C3.29383 39.5525 1.22854 39.6184 1.06772 40.9488C-10.0242 147.764 108.026 236.769 216.883 221.231C281.055 221.778 289.74 194.522 305.018 146.578C305.88 143.872 306.763 141.101 307.678 138.264C309.907 131.36 306.382 129.249 299.208 135.14C285.385 179.139 279.445 210.649 223.835 211.402C147.742 222.289 68.6802 190.605 29.9454 127.357C13.8273 102.3 4.29728 70.2146 3.34009 40.9488ZM154.857 64.548C172.618 56.6194 193.751 57.7382 208.585 68.7018L209.631 68.9401C212.229 69.5208 214.722 69.9628 217.642 69.6656C256.426 49.2483 282.473 84.1848 302.503 111.051C302.746 111.376 302.988 111.701 303.229 112.024C304.747 112.076 305.984 113.267 305.573 114.663L306.218 115.352C303.682 122.151 299.101 128.715 292.838 132.839C273.394 158.728 258.612 152.445 234.388 142.148C233.025 141.569 231.632 140.977 230.207 140.377C218.418 138.612 211.476 143.558 204.372 148.619C194.897 155.369 185.134 162.325 163.196 153.833L161.748 153.362C149.121 149.191 134.625 142.865 125.445 133.724C125.145 133.425 125.438 132.847 125.897 132.997C131.571 134.708 137.676 137.45 143.991 140.286C161.382 148.098 180.359 156.622 196.264 146.259C201.744 142.582 206.667 138.117 212.794 135.347C226.752 130.677 237.097 135.23 246.435 139.341C260.498 145.53 272.277 150.715 290.67 121.878C265.748 126.221 237.657 121.903 219.028 104.935C191.18 138.474 136.979 133.1 102.517 112.268C97.804 112.947 90.8299 108.285 95.1704 103.847C99.918 100.073 107.429 101.552 113.266 99.506C131.897 92.878 136.296 71.7524 154.857 64.548ZM149.158 78.7311C167.996 62.2135 197.435 64.5712 217.118 78.5731C218.333 78.5664 217.389 77.5023 216.657 76.6764C216.373 76.3566 216.122 76.0726 216.039 75.8994L216.45 75.5988C216.545 76.1018 216.864 77.0818 217.621 76.6987C251.1 56.9463 273.681 84.9128 291.234 108.929L294.535 113.466C291.063 114.548 287.503 115.389 283.898 115.981C261.531 119.823 238.563 113.165 220.606 100.636C220.113 98.3945 216.031 97.2822 215.244 99.861C190.165 129.69 143.367 129.375 110.797 110.627C129.762 107.502 137.394 90.5467 149.158 78.7311ZM297.721 120.276C297.885 120.423 298.021 120.584 298.136 120.751C298.687 120.465 299.258 120.174 299.845 119.894L299.686 119.778C299.055 119.957 298.397 120.122 297.721 120.276Z'
				transform='translate(-16.32188 -30.00034)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
