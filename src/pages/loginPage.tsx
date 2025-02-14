import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) {
      setError("❌ Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkBg text-neon font-pixel">
      <div className="p-8 bg-black border-4 border-neon rounded-lg shadow-lg text-center">
        <h2 className="text-3xl mb-4 glow">Game Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg">👤 Email</label>
            <input
              type="email"
              className="w-full p-2 border-2 border-neon bg-black text-neon rounded-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-lg">🔑 Password</label>
            <input
              type="password"
              className="w-full p-2 border-2 border-neon bg-black text-neon rounded-md focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full p-3 bg-btnBg text-white font-bold rounded-md btn-glow hover:scale-105 transition-transform"
          >
            Start Game
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
