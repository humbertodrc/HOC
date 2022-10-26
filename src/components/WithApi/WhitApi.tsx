import { ComponentType, useEffect, useState } from "react";

export default function WithApi<T extends {}>(
	Component: ComponentType<T>,
	url: string
) {
	return function ComponentWraper(props: T) {
		const [data, setData] = useState([]);

		useEffect(() => {
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					setData(res);
				});
		}, []);

		return <Component data={data} {...props} />;
	};
}
