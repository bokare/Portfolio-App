import { Link } from "react-router-dom";
export default function Notfound() {
  return (
    <section className="container nf m-5 text-center p-5">
      <div className="not-found">
        <h1>404 | Not Found</h1>
        <p>
          <Link to="/" className="underline">Go to Home</Link>
        </p>
      </div>
    </section>
  );
}
