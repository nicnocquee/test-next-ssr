import Link from "next/link";
import { useState } from "react";

export default function IndexPage() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/day">
        <a
          onClick={() => {
            setLoading(true);
          }}
        >
          Cats
        </a>
      </Link>
      {loading && <p>Loading...</p>}
    </div>
  );
}
