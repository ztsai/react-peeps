import React from 'react';
import { PieceType } from '../types';

export const LoveGrin: React.FC<PieceType> = ({ strokeColor }) => {
	return (
		<g>
			<path
				d='M56.7076 7.03523C59.6286 10.8272 56.5096 17.0242 52.2446 18.0042C46.9626 19.2192 41.6266 18.4802 36.4406 19.9872C31.6886 21.3682 27.1366 24.1352 23.0636 26.8932C18.4186 30.0372 14.1406 33.5472 10.2096 37.5462C7.87162 39.9252 4.92562 45.5612 1.31962 45.6662C-2.12513 45.7671 2.18297 35.4201 2.87841 33.7498C2.90672 33.6818 2.92905 33.6282 2.94462 33.5902C5.77162 26.6852 9.74262 20.3312 14.7096 14.7652C24.5106 3.78223 45.2676 -7.80677 56.7076 7.03523ZM168.606 4.67983L166.159 4.00017C160.478 2.4459 154.972 1.27558 149.328 3.90583C145.209 5.82583 144.141 10.9048 144.859 14.8888L144.967 15.4928L145.023 15.7785C146.27 21.6092 152.739 22.8987 157.529 21.3418C164.341 21.138 172.171 23.3794 178.5 25.5113L179.706 25.9218C186.241 28.1698 190.796 33.5438 196.94 36.2348C197.484 36.4728 198.16 36.4148 198.479 35.8318C203.097 27.3697 193.874 17.6698 187.353 12.8086L186.725 12.3487L186.317 12.0598C181.123 8.43083 174.66 6.36283 168.606 4.67983ZM138.809 50.659C146.971 43.6949 157.208 48.8273 163.217 55.8808L164.277 57.1419C165.479 58.5809 166.81 60.257 167.61 62.049C174.269 56.379 183.299 52.389 191.94 54.979C200.32 57.5 205.099 65.5 203.66 74.089C202.027 83.8562 194.637 90.4211 186.696 95.4975L184.444 96.9274C174.902 103.01 165.973 109.138 158.12 117.5C156.839 118.859 154.07 118.679 153.23 116.87L152.553 115.414L151.87 113.959C146.299 102.08 140.33 90.279 135.429 78.12C131.799 69.109 130.62 57.639 138.809 50.659ZM47.0091 55.5295L45.7657 56.9673C44.4729 58.4814 43.1041 60.212 42.3091 62.0495C35.6391 56.3695 26.6291 52.4095 17.9691 54.9785C9.57912 57.4695 4.82912 65.5195 6.24912 74.0895C7.90912 84.0195 15.5391 90.6295 23.6101 95.7495L26.3858 97.5156C35.5809 103.406 44.19 109.4 51.7991 117.5C53.0701 118.86 55.8491 118.68 56.6901 116.87C57.1391 115.9 57.5891 114.93 58.0491 113.96L59.143 111.634C64.2645 100.786 69.5951 89.9695 74.1591 78.9095C77.9491 69.7395 79.6191 57.8495 71.1101 50.6595C63.1191 43.9095 52.9891 48.5695 47.0091 55.5295ZM116.634 95.3201C112.406 94.5932 110.836 99.2969 112.815 100.717C120.366 105.307 131.872 116.01 123.748 127.389C115.142 136.419 103.13 128.004 95.868 122.438L93.6344 120.716C87.3437 116.684 80.2757 127.054 86.1122 131.763C135.136 168.058 155.031 101.917 116.634 95.3201ZM57.0077 163.771C47.9377 162.302 38.3897 164.202 38.2851 175.22C38.2037 185.246 45.8167 194.491 53.0797 200.588C57.7897 204.54 63.1177 207.758 68.8297 210.335C86.3987 218.262 107.664 220.104 125.956 218.402C134.584 217.598 142.919 215.184 150.473 211.104C151.336 211.011 152.083 210.556 152.595 209.903C154.227 208.947 155.813 207.898 157.364 206.779C165.035 201.195 174.641 192.299 175.668 182.25C176.784 171.398 167.026 166.678 157.779 165.783L157.177 165.73C151.739 165.303 146.193 165.574 140.694 165.842C138.542 165.947 136.396 166.052 134.268 166.115C125.594 166.371 116.781 166.22 108.154 167.152C107.174 167.257 106.452 167.735 106.02 168.365L103.338 168.318C87.7747 168.003 72.3627 166.255 57.0077 163.771ZM110.357 197.067C103.024 196.846 95.7027 197.872 88.7187 200.134C83.9857 201.661 79.6717 204.598 75.1367 206.639C90.4207 212.468 108.177 213.739 123.857 212.678C130.736 212.212 137.405 210.626 143.619 207.898C142.651 207.199 141.671 206.488 140.645 205.869C137.545 203.992 134.303 202.395 130.922 201.124C124.336 198.653 117.387 197.289 110.357 197.067Z'
				transform='translate(57.99978 43.65027)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
