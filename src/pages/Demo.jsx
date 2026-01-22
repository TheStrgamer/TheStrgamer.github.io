import { useSearchParams } from "react-router-dom";
import "../assets/Demo.css"
import { Link } from 'react-router-dom';




export default function Demo() {
  const [params] = useSearchParams();
  const demoPath = params.get("src");

  if (!demoPath) return <p>Ingen demo valgt.</p>;

  return <div className="demoContent">
      <div className="topBar">
        <Link to="/projects" className="returnButton">← Returner</Link>
        <h1>Demo</h1>
        <div></div>
      </div>
        <iframe src={demoPath} />
    </div>;
}
