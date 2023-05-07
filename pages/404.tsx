import Link from "next/link";
import router from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      // router.go(1);
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
