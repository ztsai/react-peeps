import React from 'react';
import { PieceType } from '../types';

export const SmileBig: React.FC<PieceType> = ({ strokeColor }) => {
	return (
		<g>
			<path
				d='M15.9252 11.6746C25.7472 1.65261 51.3592 -8.04539 58.0782 10.4616C59.3582 13.9866 56.6332 18.7396 52.9632 19.4706C49.6471 20.1305 46.5373 19.632 43.413 19.1311C40.8749 18.7243 38.3271 18.3158 35.6512 18.5256C30.8182 18.9066 25.7772 20.5216 21.9132 23.5156C11.2112 31.8076 8.85721 45.8326 1.40021 56.3866C1.03721 56.9006 0.332206 56.6846 0.265206 56.0786C-1.43279 40.7136 5.16721 22.6506 15.9252 11.6746ZM164.471 1.74571C157.919 -0.296292 150.538 -0.493292 144.02 1.80871C140.872 2.92071 138.005 4.40171 135.378 6.45171C132.79 8.47171 131.676 10.5267 129.743 13.0307C129.356 13.5327 129.994 14.2247 130.537 14.0637C140.738 11.0477 154.631 13.0867 163.104 19.4867C166.689 22.1957 169.646 25.8837 171.372 30.0517C173.985 36.3617 174.902 42.3067 182.45 44.4907C185.823 45.4677 189.549 44.4077 192.02 41.9617L192.635 41.3517L192.843 41.141C197.439 36.3352 195.245 29.5801 190.11 26.6157C189.161 24.8407 188.283 21.8597 187.448 20.4167C185.876 17.6937 183.916 15.1357 181.798 12.8177C177.13 7.71171 171.071 3.80371 164.471 1.74571ZM156.036 44.5815C172.692 43.8015 183.053 61.9875 179.223 76.8885C178.561 79.4595 175.685 81.9835 172.909 81.6945L172.209 81.6301C171.854 81.596 171.497 81.5511 171.169 81.4605C168.533 80.7305 166.17 77.9885 166.362 75.1465L166.413 74.3184C166.801 67.2793 166.038 59.1692 157.673 57.4645C150.578 56.0185 146.617 62.8475 146.533 69.1335C146.517 70.2495 145.263 71.0285 144.276 70.4285C139.147 67.3075 138.259 61.0985 140.218 55.7515C142.701 48.9765 148.915 44.9145 156.036 44.5815ZM63.4997 61.6149C57.6307 50.8989 44.5537 44.4379 32.4327 48.4819C25.8267 50.6849 20.5927 56.2799 17.8997 62.5709C15.8467 67.3649 14.8117 75.7409 20.5707 78.5239C21.3347 78.8929 22.0987 78.8039 22.7357 78.2449C28.1577 73.4889 27.9337 65.3249 35.6637 62.6269C42.2807 60.3169 49.5447 64.6709 51.3347 71.2699L51.4015 71.5005C52.9774 76.6056 60.0783 78.726 63.8697 74.5789C66.2937 71.9279 66.9157 69.7239 67.3287 66.2279C67.6147 63.7979 65.5587 62.2109 63.4997 61.6149ZM150.214 87.9682C148.264 65.8832 117.473 73.0662 105.201 80.0942C104.352 80.5802 104.675 82.0962 105.722 82.0162C108.163 81.8301 110.587 81.5015 113.011 81.173C117.151 80.612 121.287 80.0515 125.495 80.2022C129.964 80.3642 137.1 81.2762 138.777 86.2682C140.672 91.9112 134.562 96.2222 129.979 97.5692L129.713 97.6467C125.466 98.8763 117.455 100.78 113.649 98.1962C106.243 93.1662 98.3377 104.175 104.298 110.315C111.459 117.692 126.126 113.85 134.401 110.448L134.732 110.309C143.555 106.552 151.11 98.1312 150.214 87.9682ZM43.3465 121.477C56.0075 119.94 68.3817 122.402 80.7379 124.859C85.1111 125.729 89.4821 126.598 93.8627 127.29C102.711 128.686 111.57 129.728 120.523 130.116C122.324 130.194 124.127 130.24 125.929 130.277C126.096 128.691 126.984 127.234 128.908 126.361C132.852 124.574 136.008 123.768 140.338 123.94C144.301 124.097 148.278 124.504 152.181 125.218C159.268 126.518 166.386 129.466 171.57 134.589C183.567 146.442 181.741 165.481 172.471 178.391C153.319 205.069 118.364 206.307 88.4261 205.959L85.6634 205.923C82.6154 205.879 79.4206 205.891 76.1327 205.904L76.121 205.904C50.0058 206.004 18.0177 206.126 7.01977 178.584C2.46558 167.179 3.09822 153.96 8.67421 143.021C15.3249 129.974 29.3247 123.179 43.3465 121.477ZM81.4794 137.485L78.0689 137.102C77.7892 137.07 77.5094 137.038 77.2297 137.006C68.0368 135.957 58.8485 134.909 49.6549 135.539C48.2839 135.634 46.8919 135.783 45.4969 135.988C47.1713 142.03 47.0306 149.126 47.7301 155.107C48.0005 157.42 48.3418 159.714 48.7199 161.999L50.3634 161.922C60.5285 161.371 70.7036 161.032 80.8767 160.628C80.8759 158.718 80.8864 156.807 80.9169 154.895L80.9545 152.983C80.9884 151.554 80.9853 150.072 80.9822 148.563C80.9748 144.913 80.9669 141.102 81.4794 137.485ZM99.1274 138.664C108.873 138.652 119.127 138.311 129.049 136.71C129.463 137.009 129.9 137.27 130.361 137.459L130.753 137.601C130.23 142.195 129.86 146.809 129.523 151.424L129.029 158.345L127.265 158.439C114.764 159.074 102.261 159.687 89.7565 160.254L89.3311 156.653C88.8541 152.537 88.4152 148.417 88.0313 144.292C87.8407 142.25 87.709 140.155 87.4555 138.085C91.3441 138.43 95.2347 138.669 99.1274 138.664ZM22.3597 149.574C26.3002 142.485 33.6324 138.61 41.3798 136.776C39.4864 142.644 39.3956 149.948 39.2149 155.765L39.1128 158.814C39.0769 160.004 39.0488 161.196 39.0268 162.39C32.3981 162.629 25.7374 162.918 19.1896 163.68C18.992 158.767 20.0208 153.781 22.3597 149.574ZM133.358 138.428C133.904 144.953 134.207 151.505 134.609 158.042L142.85 157.602C144.224 157.527 145.597 157.45 146.97 157.371C148.454 157.286 150.056 157.099 151.708 156.906C156.003 156.406 160.64 155.865 164.453 156.955C164.856 152.155 163.484 147.479 159.152 144.255C151.547 138.591 141.864 140.608 133.358 138.428ZM162.585 164.278C159.359 165.039 155.772 165.031 152.353 165.023C150.839 165.02 149.358 165.017 147.956 165.08C143.678 165.275 139.399 165.444 135.121 165.617C135.322 168.538 135.519 171.457 135.733 174.376C136.008 178.148 136.034 182.135 136.756 185.891C145.366 182.953 153.08 178.241 158.868 170.706C160.31 168.829 161.601 166.626 162.585 164.278ZM128.251 165.905L128.495 165.895C128.318 168.393 128.136 170.89 127.967 173.389C127.697 177.412 127.761 181.732 127.061 185.787C126.359 186.373 125.83 187.229 125.649 188.501L125.629 188.717C115.677 190.492 105.17 190.681 95.4074 190.604C95.2976 190.367 95.1879 190.129 95.0362 189.893C94.6001 189.21 94.0144 188.74 93.3688 188.448L93.4296 188.028C93.5443 187.307 93.3051 186.307 93.0891 185.404C92.9875 184.979 92.891 184.576 92.8389 184.233C92.4547 181.703 92.0855 179.17 91.7413 176.635C91.3022 173.412 90.918 170.182 90.5419 166.953C103.117 166.73 115.683 166.39 128.251 165.905ZM21.2471 173.269C20.3321 171.062 19.7204 168.691 19.4061 166.269C25.8672 166.917 32.448 167.056 38.9849 167.117C39.0069 172.956 39.2992 178.802 40.1125 184.552C40.4388 186.865 41.731 188.215 43.3585 188.777C33.9787 186.944 25.1138 182.593 21.2471 173.269ZM80.9375 167.124C71.8788 167.278 62.8162 167.397 53.7594 167.286L49.6479 167.223C50.5161 171.881 51.461 176.523 52.2463 181.212C53.0656 186.099 48.7639 189.206 45.0409 189.081C45.459 189.149 45.8761 189.22 46.2942 189.279C55.9646 190.647 65.9434 190.576 75.817 190.505C77.8197 190.491 79.8181 190.477 81.8087 190.475C81.3529 187.814 81.3567 184.909 81.3601 182.337L81.3601 182.337C81.3614 181.325 81.3627 180.365 81.3358 179.491L81.3177 179.012C81.1371 175.047 81.0104 171.086 80.9375 167.124Z'
				transform='translate(50.00019 64.99949)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
