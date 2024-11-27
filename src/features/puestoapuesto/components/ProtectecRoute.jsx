import { useState } from 'react';
import { Outlet } from 'react-router';

const ProtectedRoute = ({ requiredPassword }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === requiredPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  if (isAuthenticated) {
    return <Outlet />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handlePasswordSubmit}
        className="bg-white p-6 rounded shadow-md"
      >
        <h2 className="text-xl mb-4">
          Ingrese la contraseña para ver los resultados
        </h2>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ProtectedRoute;
