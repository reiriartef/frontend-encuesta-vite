import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './index.css';
import './App.css';
import PuestoAPuestoLayout from './features/puestoapuesto/PuestoAPuestoLayout.jsx';
import Form from './features/puestoapuesto/components/Form.jsx';
import ResultsList from './features/puestoapuesto/components/ResultsList.jsx';
import ProtectedRoute from './features/puestoapuesto/components/ProtectecRoute.jsx';

const root = document.getElementById('root');

const requiredPassword = 'OatiDev';

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/puestoapuesto" replace />} />
      <Route path="auth" element={<>Hola</>}>
        <Route index path="login" element={<>Login</>} />
        <Route path="register" element={<>Registro</>} />
      </Route>
      <Route path="/puestoapuesto" element={<PuestoAPuestoLayout />}>
        <Route index path="registro" element={<Form />} />
        <Route element={<ProtectedRoute requiredPassword={requiredPassword} />}>
          <Route path="resultados" element={<ResultsList />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
