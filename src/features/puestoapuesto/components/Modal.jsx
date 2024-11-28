/* eslint-disable react/prop-types */
import React from 'react';

const Modal = ({ isOpen, onClose, funcionario }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Número de Beneficiarios Fasdem
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.num_fasdem_beneficiarios}
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium text-gray-900">
                Número de Hijos
              </dt>
              <dd className="mt-1 text-sm text-gray-700">
                {funcionario.num_hijos}
              </dd>
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
