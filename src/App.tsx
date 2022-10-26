import {useEffect, useState} from "react";
import "./App.css";
import {CardComents, CardPost, Navbar} from "./components";
import {getComents} from "./service";
import {getPost} from "./service/getPost";
import { useShowData } from './hooks/useShowData';

function App() {
	const [post, setPost] = useState([]);
  const [coments, setComents] = useState([]);
  
  const {showData, handleShowData} = useShowData()

	useEffect(() => {
		getComents().then((res) => {
			setComents(res);
		});
		getPost().then((res) => {
			setPost(res);
		});
	}, []);

	return (
    <>
      <div>
        <Navbar handleShowData={handleShowData} />
      </div>
			<div className="App">
				<h1>Como puedo envolver esto en un HOC 🤔</h1>
				{showData ? <CardPost post={post} /> : <CardComents coments={coments} />}
			</div>
		</>
	);
}

export default App;
