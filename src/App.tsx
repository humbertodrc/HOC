import "./App.css";
import {CardComents, CardPost, Navbar} from "./components";
import WithApi from "./components/WithApi/WhitApi";
import {useShowData} from "./hooks/useShowData";

const WhitApiPost = WithApi(
	CardPost,
	"https://jsonplaceholder.typicode.com/posts"
);
const WhitApiComents = WithApi(
	CardComents,
	"https://jsonplaceholder.typicode.com/comments"
);

function App() {
	const {showData, handleShowData} = useShowData();

	return (
		<>
			<div>
				<Navbar handleShowData={handleShowData} />
			</div>
			<div className="App">
				<h1>Como puedo envolver esto en un HOC 🤔</h1>
				{/* {showData ? <CardPost post={post} /> : <CardComents coments={coments} />} */}
				{showData ? <WhitApiPost /> : <WhitApiComents />}
			</div>
		</>
	);
}

export default App;
