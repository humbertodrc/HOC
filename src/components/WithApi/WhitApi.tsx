import {ComponentType, useEffect, useState} from "react";
import { getData } from '../../service/getData';
import {Spinner} from "../Spinner";

export default function WithApi<T extends {}>(
	Component: ComponentType<T>,
	url: string
) {
	return function ComponentWraper(props: T) {
		const [data, setData] = useState([]);

		useEffect(() => {
			getData(url).then((data) => setData(data));
		}, []);

		if (data.length === 0) return <Spinner />;

		return <Component data={data} {...props} />;
	};
}
