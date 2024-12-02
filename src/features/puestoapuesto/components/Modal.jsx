/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react';

const Modal = ({ isOpen, onClose, funcionario }) => {
  const [hijos, setHijos] = useState([]);
  const [cargas, setCargas] = useState([]);
  const [beneficiarios, setBeneficiarios] = useState([]);

  const handleHijos = useCallback(async () => {
    try {
      const hijos = await fetch(
        `https://backend-encuesta-flask.onrender.com/api/hijos?funcionario=${funcionario.funcionario_id}`
      ).then((response) => response.json());
      setHijos(hijos);
    } catch (error) {
      console.log(error);
      return [];
    }
  }, [funcionario]);
  const handleCargas = useCallback(async () => {
    try {
      const cargas = await fetch(
        `https://backend-encuesta-flask.onrender.com/api/cargas?funcionario=${funcionario.funcionario_id}`
      ).then((response) => response.json());
      setCargas(cargas);
    } catch (error) {
      console.log(error);
      return [];
    }
  }, [funcionario]);

  const handleBeneficiarios = useCallback(async () => {
    try {
      const beneficiarios = await fetch(
        `https://backend-encuesta-flask.onrender.com/api/beneficiarios?funcionario=${funcionario.funcionario_id}`
      ).then((response) => response.json());
      setBeneficiarios(beneficiarios);
    } catch (error) {
      console.log(error);
      return [];
    }
  }, [funcionario]);

  useEffect(() => {
    if (funcionario) {
      handleBeneficiarios();
      handleCargas();
      handleHijos();
    }
  }, [funcionario, handleHijos, handleBeneficiarios, handleCargas]);

  if (!isOpen) return null;
  if (!funcionario) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-h-[80vh] overflow-y-auto">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-semibold text-gray-900">
            Detalles del Funcionario
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Información personal y laboral.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100 grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">Cédula</dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.funcionario_id}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Nombres y Apellidos
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.nombre_funcionario}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">Edad</dt>
              <dd className="mt-1 text-sm text-gray-700">{funcionario.age}</dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">Género</dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.gender}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Estado Civil
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.estado_civil}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">Cargo</dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.cargo}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Tipo de Trabajador
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.tipo_trabajador}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Tipo de Personal
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.tipo_personal}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Adscripción Nominal
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.adscripcion_nominal}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Ubicación Física
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.ubicacion_fisica}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">Funciones</dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.funciones}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">Teléfono</dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.phone}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">Sede</dt>
              <dd className="mt-1 text-sm text-gray-700">{funcionario.sede}</dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Nivel Académico
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.nivel_academico}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Título de Educación Superior
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.titulo_educacion_superior}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Nombre del Responsable
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.nombre_responsable}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Teléfono del Responsable
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.telefono_responsable}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Número de Cargas Familiares
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.num_carga_familiar}
              </dd>
              <div>
                {' '}
                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                  Cargas Familiares
                </h4>{' '}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {' '}
                  {cargas.map((carga, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md space-y-2"
                    >
                      {' '}
                      <p className="text-sm font-medium text-gray-900">
                        Nombre: {carga.nombre}
                      </p>{' '}
                      <p className="text-sm font-medium text-gray-700">
                        Edad: {carga.edad}
                      </p>{' '}
                      <p className="text-sm text-gray-700">
                        Patologías: {carga.patologias}
                      </p>{' '}
                    </div>
                  ))}{' '}
                </div>{' '}
              </div>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Número de Beneficiarios Fasdem
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.num_fasdem_beneficiarios}
              </dd>
              <div>
                {' '}
                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                  Beneficiarios de Fasdem
                </h4>{' '}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {' '}
                  {beneficiarios.map((beneficiario, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md space-y-2"
                    >
                      {' '}
                      <p className="text-sm font-medium text-gray-900">
                        Nombre: {beneficiario.nombre}
                      </p>{' '}
                      <p className="text-sm text-gray-700">
                        Edad: {beneficiario.edad}
                      </p>{' '}
                      <p className="text-sm text-gray-700">
                        Patologías: {beneficiario.patologias}
                      </p>{' '}
                    </div>
                  ))}{' '}
                </div>{' '}
              </div>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Número de Hijos
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.num_hijos}
              </dd>
              <div>
                {' '}
                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                  Hijos
                </h4>{' '}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {' '}
                  {hijos.map((hijo, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md space-y-2"
                    >
                      {' '}
                      <p className="text-sm font-medium text-gray-900">
                        Nombre: {hijo.nombre}
                      </p>{' '}
                      <p className="text-sm text-gray-700">Edad: {hijo.edad}</p>{' '}
                      <p className="text-sm text-gray-700">
                        Género: {hijo.sexo}
                      </p>{' '}
                      <p className="text-sm text-gray-700">
                        Patologías: {hijo.patologias}
                      </p>{' '}
                    </div>
                  ))}{' '}
                </div>{' '}
              </div>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Talla de Camisa
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.shirt_size}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Talla de Zapatos
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.shoe_size}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Talla de Traje
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.suit_size}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">Carnet</dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.tiene_carnet ? 'Sí' : 'No'}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">Facebook</dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.facebook || 'N/A'}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">Instagram</dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.instagram || 'N/A'}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">TikTok</dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.tiktok || 'N/A'}
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
