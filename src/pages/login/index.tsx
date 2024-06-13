import { LoginForm } from "@/Components/LoginForm";
import { useRouter } from "next/router";
// import background from "./../../img/login_background.png";

export default function Home() {
  const router = useRouter();

  return (
    <>
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
          <LoginForm />
        </div>
      </div>
    </>
  );
}
