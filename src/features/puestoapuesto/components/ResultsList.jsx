import { useState, useEffect } from 'react';
function ResultsList() {
  const [sedes, setSedes] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [sedeId, setSedeId] = useState();
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    handleSedes();
    handleFuncionarios();
  }, []);

  const handleDownload = async () => {
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
      >
        Exportar Excel con Resultados
      </button>
      <div className="flex flex-row min-w-full mx-auto my-2 space-x-2">
        <select
          name="id_transaccion"
          value={sedeId}
          onChange={handleChange}
          required
          className="mb-4 p-2 border rounded w-1/4"
        >
          <option value="">Todas las Sedes</option>
          {sedes.map((sede, index) => (
            <option key={index} value={sede.id}>
              {sede.nombre}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="monto"
          placeholder="Filtrar por nombre"
          value={nombre}
          onChange={handleNameChange}
          required
          className="mb-4 p-2 border rounded w-full"
        />
      </div>
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
              <th className="py-2 px-4 text-left">Acciones</th>
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
                  <td className="py-2 px-4 text-left">
                    <button
                      onClick={handleDownload}
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
                    >
                      Ver Funcionario
                    </button>
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
