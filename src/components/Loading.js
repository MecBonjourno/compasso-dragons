import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
	return (
		<div>
			<BounceLoader size={64} color='green' />
		</div>
	);
};

export default Loading;
