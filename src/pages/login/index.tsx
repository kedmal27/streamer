import { useRouter } from "next/router";
import background from "./../../img/login_background.png";

export default function Home() {
  const router = useRouter();

  return (
    <section>
      <header>
        <nav>
          <button
            className="link"
            type="button"
            onClick={() => router.push("/")}
          >
            Library
          </button>
        </nav>
      </header>

      <div className="loginBody">
        <div className="loginCard">
          <h2>Log In</h2>
          <form className="loginForm" name="login">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </section>
  );
}
