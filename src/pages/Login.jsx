import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="min-h-screen dark:bg-darkBg dark:text-darkText font-semibold flex flex-col items-center justify-center">
      <div className="md:max-w-md w-full px-4 py-4">
        <form onSubmit={handleLogin}>
          <div>
            <label className="text-xs block mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
            />
          </div>
          <div className="mt-8">
            <label className="text-xs block mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
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
            <div className="mt-5 text-red-400 text-xs">
              Wrong email or password!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
