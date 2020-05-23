import React from 'react';

export default ({
	height = 20,
	width  = 20,
} = {}) => {
	const [progress,set_progress] = React.useState(0);

	const move = () => set_progress(progress+10);

	React.useEffect(_ => {
		let interval = setInterval(move,25);
		return () => clearInterval(interval);
	},[progress]);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={{height,width,transform:`rotate(${progress}deg)`}} viewBox="0 0 34 34">
			<g fill="#66f">
				<path
					d="M33.93,15.882 C33.638,9.814 29.961,4.048 24.402,1.524 C18.402,-1.201 11.126,-0.063 6.125,4.17 C1.374,8.191 -0.857,14.675 0.498,20.756 C1.843,26.793 6.449,31.691 12.447,33.294 C19.539,35.19 26.017,31.837 30,26 C26.387,30.821 20.94,34.005 14.765,32.938 C8.684,31.888 3.691,27.257 2.301,21.232 C0.82,14.815 3.782,8.091 9.507,4.837 C15.443,1.463 23.666,2.709 27.618,8.495 C28.603,9.937 29.295,11.598 29.655,13.304 C29.962,14.752 29.833,16.199 30.046,17.644 C30.234,18.915 31.359,20.685 32.826,19.733 C34.096,18.909 34.012,17.193 33.93,15.882 C33.913,15.518 33.976,16.611 33.93,15.882"
				></path>
			</g>
		</svg>
	);
}
