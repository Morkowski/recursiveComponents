import React from 'react';

const Recursive = ({ components: [Component, ...rest] }) => (
	Component
	? <Component>
		<Recursive components={rest} />
	  </Component>
	: null
);

export default Recursive;
