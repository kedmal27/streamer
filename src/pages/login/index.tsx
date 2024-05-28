import router, { useRouter } from "next/router";

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
          <h2>Log In</h2>
          <section>
            <label>Email:</label>
            <input type="email" />
          </section>

          <section>
            <label>Password:</label>
            <input type="password" />
          </section>

          <button type="submit">Log in</button>
        </form>
      </div>
    </section>
  );
}
