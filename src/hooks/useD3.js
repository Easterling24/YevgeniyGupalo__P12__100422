import React, { useEffect } from 'react';
import * as d3 from 'd3';

export const useD3 = (renderChartFn, dependenices) => {
	const ref = React.useRef();

	useEffect(
		() => {
			renderChartFn(d3.select(ref.current));
			return () => {};
		},
		[ dependenices ]
	);

	return ref;
};
