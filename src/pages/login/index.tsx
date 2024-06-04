import router, { useRouter } from "next/router";
import loginBk from "../../img/login_background.jpg";

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

      <div className="loginContainer">
        <form className="loginForm" name="login">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={loginBk} alt="Background image" />
          <section>
            <h2>Log In</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </section>

          <button type="submit">Log in</button>
        </form>
      </div>
    </section>
  );
}
