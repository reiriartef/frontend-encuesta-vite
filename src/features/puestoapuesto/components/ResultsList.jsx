import { useState, useEffect } from 'react';
function ResultsList() {
  const [sedes, setSedes] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [sedeId, setSedeId] = useState();
  const [nombre, setNombre] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleSedes();
    handleFuncionarios();
  }, []);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://backend-encuesta-flask.onrender.com/api/export_employees',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Error al descargar el archivo');
      }

      // Obtener el blob del archivo
      const blob = await response.blob();

      // Crear una URL para el blob y simular la descarga
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'puesto_a_puesto.xlsx'; // Nombre del archivo a descargar
      a.click();
      window.URL.revokeObjectURL(url); // Limpiar la URL
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSedes = async () => {
    try {
      const sedes = await fetch(
        'https://backend-encuesta-flask.onrender.com/api/sedes'
      ).then((response) => response.json());
      setSedes(sedes);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleFuncionarios = async () => {
    try {
      const funcionarios = await fetch(
        'https://backend-encuesta-flask.onrender.com/api/funcionarios'
      ).then((response) => response.json());
      setFuncionarios(funcionarios);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setSedeId(value);
  };

  const handleNameChange = (e) => {
    const { value } = e.target;

    setNombre(value);
  };

  return (
    <div className="min-w-full mx-auto overflow-x-auto">
      <button
        onClick={handleDownload}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
        disabled={isLoading}
      >
        {' '}
        {isLoading ? (
          <span className="flex items-center justify-center">
            {' '}
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              {' '}
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />{' '}
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />{' '}
            </svg>{' '}
            Cargando...{' '}
          </span>
        ) : (
          'Exportar Excel con Resultados'
        )}{' '}
      </button>
      <div className="min-w-full mx-auto overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead className="min-w-full bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Cedula</th>
              <th className="py-2 px-4 text-left">Nombres y Apellidos</th>
              <th className="py-2 px-4 text-left">Cargo</th>
              <th className="py-2 px-4 text-left">Tipo de Trabajador</th>
              <th className="py-2 px-4 text-left">Tipo de Personal</th>
              <th className="py-2 px-4 text-left">Adscripción Nominal</th>
              <th className="py-2 px-4 text-left">Ubicación Física</th>
              <th className="py-2 px-4 text-left">Funciones</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.length > 0 ? (
              funcionarios.map((funcionario, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 text-left">
                    {funcionario.funcionario_id}
                  </td>
                  <td className="py-2 px-4 text-left">
                    {funcionario.nombre_funcionario}
                  </td>
                  <td className="py-2 px-4 text-left">{funcionario.cargo}</td>
                  <td className="py-2 px-4 text-left">
                    {funcionario.tipo_trabajador}
                  </td>
                  <td className="py-2 px-4 text-left">
                    {funcionario.tipo_personal}
                  </td>
                  <td className="py-2 px-4 text-left">
                    {funcionario.adscripcion_nominal}
                  </td>
                  <td className="py-2 px-4 text-left">
                    {funcionario.ubicacion_fisica}
                  </td>
                  <td className="py-2 px-4 text-left">
                    {funcionario.funciones}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                  No hay datos para mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultsList;
