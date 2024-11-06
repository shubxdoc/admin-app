import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("test2@mail.com");
  const [password, setPassword] = useState("abc123");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        setError(false);

        navigate("/");
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-semibold dark:bg-darkBg dark:text-darkText">
      <div className="w-full px-4 py-4 md:max-w-md">
        <form onSubmit={handleLogin}>
          <div>
            <label className="block mb-2 text-xs">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full px-2 py-3 text-sm border-b border-gray-300 outline-none focus:border-blue-600"
            />
          </div>
          <div className="mt-8">
            <label className="block mb-2 text-xs">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-2 py-3 text-sm border-b border-gray-300 outline-none focus:border-blue-600"
            />
          </div>
          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-2.5 text-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Login
            </button>
          </div>
          {error && (
            <div className="mt-5 text-xs text-red-400">
              Wrong email or password!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
