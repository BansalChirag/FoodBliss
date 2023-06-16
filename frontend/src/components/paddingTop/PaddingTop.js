import React from 'react';

const PaddingTop = props => {
	return (
		<div
			style={{
				paddingTop: '95px',
				background: '#fff',
			}}>
			{props.children}
		</div>
	);
};

export default PaddingTop;
