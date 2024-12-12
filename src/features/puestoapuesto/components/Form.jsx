import { useState } from 'react';

function Form() {
  const [responsableData, setResponsableData] = useState({
    responsableName: '',
    responsablePhone: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    sede: '',
    funcionarioID: '',
    funcionarioName: '',
    age: '',
    gender: '',
    funcionarioPhone: '',
    instagram: '',
    tiktok: '',
    facebook: '',
    estadoCivil: '',
    tieneCarnet: '',
    razonNoCarnet: '',
    tipoPersonal: '',
    shirtSize: '',
    suitSize: '',
    shoeSize: '',
    numCargaFamiliar: '',
    cargaFamiliarDetails: '',
    cargoActual: '',
    tipoTrabajador: '',
    adscripcionNominal: '',
    ubicacionFisica: '',
    funcionesLaborales: '',
    nivelAcademico: '',
    tituloEducacionSuperior: '',
    cargaFamiliarPatologias: '',
    numFasdemBeneficiarios: '',
    numHijos: '',
    cargasFamiliares: [],
    beneficiariosFasdem: [],
    hijos: [],
  });

  const sedesOptions = [
    'Palacio de Justicia',
    'Torre Mara',
    'Edificio Arauca',
    'Cabimas (CIVIL)',
    'Cabimas (PENAL)',
    'Santa Barbara (Palacio de Justicia)',
    'Santa Barbara (Ateco)',
    'Santa Barbara (Catatumbo)',
    'La Villa del Rosario de Perijá (CIVIL)',
    'La Villa del Rosario de Perijá (PENAL)',
    'El Moján (CIVIL)',
    'El Moján (PENAL)',
    'La Sierrita Mara',
    'Machiques de Perijá (CIVIL)',
    'Valmore Rodriguez (CIVIL)',
    'Miranda (CIVIL)',
    'Báralt (CIVIL)',
    'Cañada de Urdaneta (CIVIL)',
    'Mauroa (CIVIL)',
    'Dabajuro (CIVIL)',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCargaFamiliarChange = (e) => {
    const { name, value } = e.target;

    if (
      name.startsWith('nombreCarga') ||
      name.startsWith('edadCarga') ||
      name.startsWith('patologiasCarga') ||
      name.startsWith('sexoCarga')
    ) {
      const index = parseInt(name.match(/\d+/)[0]) - 1; // Extrae el índice (1 basado)
      const field = name.startsWith('nombreCarga')
        ? 'nombre'
        : name.startsWith('edadCarga')
          ? 'edad'
          : name.startsWith('patologiasCarga')
            ? 'patologias'
            : 'sexo'; // Determina el campo específico

      setFormData((prev) => {
        // Copia y actualiza cargasFamiliares
        const updatedCargas = [...prev.cargasFamiliares];

        if (!updatedCargas[index]) {
          updatedCargas[index] = {
            nombre: '',
            edad: '',
            patologias: '',
            sexo: '',
          };
        }

        updatedCargas[index][field] = value;

        return {
          ...prev,
          cargasFamiliares: updatedCargas, // Reemplaza el array actualizado
        };
      });
    }
  };

  const handleBeneficiariosFasdemChange = (e) => {
    const { name, value } = e.target;

    if (
      name.startsWith('nombreBeneficiario') ||
      name.startsWith('edadBeneficiario') ||
      name.startsWith('patologiasBeneficiario') ||
      name.startsWith('sexoBeneficiario')
    ) {
      const index = parseInt(name.match(/\d+/)[0]) - 1; // Extrae el índice (1 basado)
      const field = name.startsWith('nombreBeneficiario')
        ? 'nombre'
        : name.startsWith('edadBeneficiario')
          ? 'edad'
          : name.startsWith('patologiasBeneficiario')
            ? 'patologias'
            : 'sexo'; // Determina el campo específico

      setFormData((prev) => {
        // Copia y actualiza cargasFamiliares
        const updatedCargas = [...prev.beneficiariosFasdem];

        if (!updatedCargas[index]) {
          updatedCargas[index] = {
            nombre: '',
            edad: '',
            patologias: '',
            sexo: '',
          };
        }

        updatedCargas[index][field] = value;

        return {
          ...prev,
          beneficiariosFasdem: updatedCargas, // Reemplaza el array actualizado
        };
      });
    }
  };

  const handleHijosChange = (e) => {
    const { name, value } = e.target;

    if (
      name.startsWith('nombreHijo') ||
      name.startsWith('edadHijo') ||
      name.startsWith('patologiasHijo') ||
      name.startsWith('sexoHijo')
    ) {
      const index = parseInt(name.match(/\d+/)[0]) - 1; // Extrae el índice (1 basado)
      const field = name.startsWith('nombreHijo')
        ? 'nombre'
        : name.startsWith('edadHijo')
          ? 'edad'
          : name.startsWith('patologiasHijo')
            ? 'patologias'
            : 'sexo'; // Determina el campo específico

      setFormData((prev) => {
        // Copia y actualiza cargasFamiliares
        const updatedCargas = [...prev.hijos];

        if (!updatedCargas[index]) {
          updatedCargas[index] = {
            nombre: '',
            edad: '',
            patologias: '',
            sexo: '',
          };
        }

        updatedCargas[index][field] = value;

        return {
          ...prev,
          hijos: updatedCargas, // Reemplaza el array actualizado
        };
      });
    }
  };

  const handleResponsableChange = (e) => {
    const { name, value } = e.target;
    setResponsableData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Obtiene el archivo seleccionado
    setFormData((prevData) => ({
      ...prevData,
      fotoFuncionario: file, // Almacena el archivo como un objeto en el estado
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const dataToSubmit = new FormData();

    // Agregar todos los campos del formulario excepto el archivo
    for (const key in formData) {
      if (key !== 'fotoFuncionario') {
        if (key === 'hijos') {
          dataToSubmit.append('hijos', JSON.stringify(formData.hijos));
        }
        if (key === 'cargasFamiliares') {
          dataToSubmit.append(
            'cargasFamiliares',
            JSON.stringify(formData.cargasFamiliares)
          );
        }
        if (key === 'beneficiariosFasdem') {
          dataToSubmit.append(
            'beneficiariosFasdem',
            JSON.stringify(formData.beneficiariosFasdem)
          );
        }

        dataToSubmit.append(key, formData[key]);
      }
    }

    // Agregar el archivo al FormData
    if (formData.fotoFuncionario) {
      dataToSubmit.append('fotoFuncionario', formData.fotoFuncionario);
    }

    // Agregar los datos del responsable
    for (const key in responsableData) {
      dataToSubmit.append(key, responsableData[key]);
    }
    console.log(dataToSubmit);

    try {
      const response = await fetch(
        'https://backend-encuesta-flask.onrender.com/api/submit',
        {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          body: dataToSubmit,
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error en la solicitud');
      }

      const responseData = await response.json();
      console.log(responseData);

      alert(responseData.message || 'Datos enviados correctamente');

      // Restablece el formulario
      setFormData({
        funcionarioID: '',
        funcionarioName: '',
        age: '',
        gender: '',
        funcionarioPhone: '',
        instagram: '',
        tiktok: '',
        facebook: '',
        estadoCivil: '',
        tieneCarnet: '',
        razonNoCarnet: '',
        shirtSize: '',
        suitSize: '',
        shoeSize: '',
        numCargaFamiliar: '',
        tipoPersonal: '',
        cargaFamiliarDetails: '',
        cargaFamiliarPatologias: '',
        numFasdemBeneficiarios: '',
        cargoActual: '',
        tipoTrabajador: '',
        adscripcionNominal: '',
        ubicacionFisica: '',
        funcionesLaborales: '',
        nivelAcademico: '',
        tituloEducacionSuperior: '',
        numHijos: '',
        cargasFamiliares: [],
        beneficiariosFasdem: [],
        hijos: [],
        sede: '',
        fotoFuncionario: null,
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert(error.message || 'Error al enviar los datos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">
        Formulario de Puesto a Puesto
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Información del Responsable (Persistente) */}
        <h3 className="text-lg font-semibold mb-2">
          Información del Responsable
        </h3>
        <input
          type="text"
          name="responsableName"
          placeholder="Nombres y Apellidos del Responsable"
          value={responsableData.responsableName}
          onChange={(e) => {
            handleResponsableChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con el nombre del responsable.'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="tel"
          name="responsablePhone"
          placeholder="Número Telefónico del Responsable"
          value={responsableData.responsablePhone}
          onChange={(e) => {
            handleResponsableChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con el número telefónico del responsable.'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        />

        {/* Sede ComboBox */}
        <select
          name="sede"
          value={formData.sede}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la sede donde está siendo realizada la encuesta.'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="">Seleccione la Sede</option>
          {sedesOptions.map((sede, index) => (
            <option key={index} value={sede}>
              {sede}
            </option>
          ))}
        </select>

        {/* Datos del Funcionario */}
        <h3 className="text-lg font-semibold mb-2">Datos del Funcionario</h3>
        <input
          type="text"
          name="funcionarioID"
          placeholder="Cédula de Identidad"
          value={formData.funcionarioID}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la Cedula de Identidad del Funcionario'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="funcionarioName"
          placeholder="Nombres y Apellidos"
          value={formData.funcionarioName}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con los nombres y apellidos del Funcionario'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="number"
          name="age"
          placeholder="Edad"
          value={formData.age}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la edad del Funcionario'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con el sexo del Funcionario'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="">Sexo</option>
          <option value="Femenino">Femenino</option>
          <option value="Masculino">Masculino</option>
        </select>
        <input
          type="tel"
          name="funcionarioPhone"
          placeholder="Teléfono Celular"
          value={formData.funcionarioPhone}
          required
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con el número telefónico del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="instagram"
          placeholder="Instagram"
          value={formData.instagram}
          onChange={handleChange}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="tiktok"
          placeholder="TikTok"
          value={formData.tiktok}
          onChange={handleChange}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="facebook"
          placeholder="Facebook"
          value={formData.facebook}
          onChange={handleChange}
          className="mb-4 p-2 border rounded w-full"
        />
        <h6 className="text-sm font-semibold mb-2">Estado Civil</h6>
        <select
          name="estadoCivil"
          value={formData.estadoCivil}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con el estado civil del Funcionario'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="">Seleccione una opción</option>
          <option value="Casado">Casado</option>
          <option value="Soltero">Soltero</option>
          <option value="Divorciado">Divorciado</option>
          <option value="Viudo">Viudo</option>
          <option value="Concubinato">Concubinato</option>
        </select>

        <h3 className="text-lg font-semibold mb-2">Detalles Laborales</h3>

        <label className="block text-sm font-semibold mb-2">
          ¿Tiene Carnet?
        </label>
        <select
          name="tieneCarnet"
          value={formData.tieneCarnet}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo el estado de carnetización del Funcionario'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="">Seleccione una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>

        {/* Campo de explicación si no tiene carnet */}
        {formData.tieneCarnet === 'No' && (
          <>
            <input
              type="text"
              name="razonNoCarnet"
              placeholder="Explicación del por qué no tiene carnet"
              value={formData.razonNoCarnet}
              onChange={(e) => {
                handleChange(e);
                e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
              }}
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  'Por favor, complete este campo con la razón por la cual el funcionario no tiene carnet'
                )
              }
              required
              className="mb-4 p-2 border rounded w-full"
            />
            <label className="block text-lg font-semibold mb-2">
              Adjuntar Imagen (Archivo o Cámara)
            </label>
            <input
              accept="image/*"
              type="file"
              capture="environment"
              name="fotoFuncionario"
              onChange={(e) => {
                handleFileChange(e);
                e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
              }}
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  'Por favor, complete este campo con la foto del funcionario que seria usada para el carnet'
                )
              }
              required
              className="mb-4 p-2 border rounded w-full"
            />
          </>
        )}

        <input
          type="text"
          name="cargoActual"
          placeholder="Cargo Actual"
          value={formData.cargoActual}
          required
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con el cargo del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />
        <h6 className="text-sm font-semibold mb-2">Tipo de Personal</h6>
        <select
          name="tipoPersonal"
          value={formData.tipoPersonal}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con el tipo de personal del Funcionario'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="">Seleccione una opción</option>
          <option value="Administrativo">Administrativo</option>
          <option value="Judicial">Judicial</option>
        </select>
        <h6 className="text-sm font-semibold mb-2">Tipo de Trabajador</h6>
        <select
          name="tipoTrabajador"
          value={formData.tipoTrabajador}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo tipo de trabajador del Funcionario'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="">Seleccione una opción</option>
          <option value="Empleado">Empleado</option>
          <option value="Obrero">Obrero</option>
        </select>
        <input
          type="text"
          name="adscripcionNominal"
          placeholder="Adscripción Nominal"
          value={formData.adscripcionNominal}
          required
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la adscripción nominal del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="ubicacionFisica"
          placeholder="Ubicación Física"
          value={formData.ubicacionFisica}
          required
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la ubicación física del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="funcionesLaborales"
          placeholder="Funciones Laborales"
          value={formData.funcionesLaborales}
          required
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con las funciones laborales del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />

        <h6 className="text-sm font-semibold mb-2">Nivel Académico</h6>
        <select
          name="nivelAcademico"
          value={formData.nivelAcademico}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con el nivel academico del Funcionario'
            )
          }
          required
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="">Seleccione una opción</option>
          <option value="Bachiller">Bachiller</option>
          <option value="TSU">TSU</option>
          <option value="Licenciado">Licenciado</option>
          <option value="Ingeniero">Ingeniero</option>
          <option value="Magister">Magister</option>
          <option value="Doctorado">Doctorado</option>
        </select>
        {(formData.nivelAcademico == 'TSU' ||
          formData.nivelAcademico == 'Licenciado' ||
          formData.nivelAcademico == 'Ingeniero' ||
          formData.nivelAcademico == 'Magister' ||
          formData.nivelAcademico == 'Doctorado') && (
          <input
            type="text"
            name="tituloEducacionSuperior"
            placeholder="Titulo Obtenido en Educación Superior"
            value={formData.tituloEducacionSuperior}
            required
            onChange={(e) => {
              handleChange(e);
              e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
            }}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                'Por favor, complete este campo con el titulo de educación superior obtenido por el Funcionario'
              )
            }
            className="mb-4 p-2 border rounded w-full"
          />
        )}
        {/* Detalles Personales */}
        <h3 className="text-lg font-semibold mb-2">Detalles Personales</h3>
        <input
          type="text"
          name="shirtSize"
          placeholder="Talla de Camisa"
          value={formData.shirtSize}
          required
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la talla de camisa del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="suitSize"
          placeholder="Talla de Traje"
          value={formData.suitSize}
          required
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la talla de traje del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="number"
          name="shoeSize"
          placeholder="Talla de Calzado"
          value={formData.shoeSize}
          required
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la talla de zapatos del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />
        <h3 className="text-lg font-semibold mb-2">Información Familiar</h3>

        <input
          type="number"
          name="numCargaFamiliar"
          placeholder="Número de Personas en Carga Familiar"
          required
          value={formData.numCargaFamiliar}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la cantidad de personas en la carga familiar del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />

        {formData.numCargaFamiliar > 0 && (
          <>
            {Array.from({ length: formData.numCargaFamiliar }, (_, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-sm font-semibold mb-2">
                  Carga Familiar #{index + 1}
                </h3>
                <input
                  type="text"
                  name={`nombreCarga${index + 1}`}
                  placeholder="Nombre"
                  required
                  value={
                    formData.cargasFamiliares[index]?.nombre || '' // Mapea el valor del array
                  }
                  onChange={handleCargaFamiliarChange}
                  className="mb-4 p-2 border rounded w-full"
                />
                <input
                  type="number"
                  name={`edadCarga${index + 1}`}
                  placeholder="Edad"
                  required
                  value={
                    formData.cargasFamiliares[index]?.edad || '' // Mapea el valor del array
                  }
                  onChange={handleCargaFamiliarChange}
                  className="mb-4 p-2 border rounded w-full"
                />
                <input
                  type="text"
                  name={`patologiasCarga${index + 1}`}
                  placeholder="Patologías"
                  required
                  value={
                    formData.cargasFamiliares[index]?.patologias || '' // Mapea el valor del array
                  }
                  onChange={handleCargaFamiliarChange}
                  className="mb-4 p-2 border rounded w-full"
                />
              </div>
            ))}
          </>
        )}

        {/* Información Familiar */}
        <input
          type="number"
          name="numFasdemBeneficiarios"
          placeholder="Número de Beneficiarios en FASDEM"
          required
          value={formData.numFasdemBeneficiarios}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la cantidad de beneficiarios de FASDEM del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />
        {formData.numFasdemBeneficiarios > 0 && (
          <>
            {Array.from(
              { length: formData.numFasdemBeneficiarios },
              (_, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-sm font-semibold mb-2">
                    Beneficiario FASDEM #{index + 1}
                  </h3>
                  <input
                    type="text"
                    name={`nombreBeneficiario${index + 1}`}
                    placeholder="Nombre"
                    required
                    value={
                      formData.beneficiariosFasdem[index]?.nombre || '' // Mapea el valor del array
                    }
                    onChange={handleBeneficiariosFasdemChange}
                    className="mb-4 p-2 border rounded w-full"
                  />
                  <input
                    type="number"
                    name={`edadBeneficiario${index + 1}`}
                    placeholder="Edad"
                    required
                    value={
                      formData.beneficiariosFasdem[index]?.edad || '' // Mapea el valor del array
                    }
                    onChange={handleBeneficiariosFasdemChange}
                    className="mb-4 p-2 border rounded w-full"
                  />
                  <input
                    type="text"
                    name={`patologiasBeneficiario${index + 1}`}
                    placeholder="Patologías"
                    required
                    value={
                      formData.beneficiariosFasdem[index]?.patologias || '' // Mapea el valor del array
                    }
                    onChange={handleBeneficiariosFasdemChange}
                    className="mb-4 p-2 border rounded w-full"
                  />
                </div>
              )
            )}
          </>
        )}
        <input
          type="number"
          name="numHijos"
          placeholder="Número de Hijos"
          required
          value={formData.numHijos}
          onChange={(e) => {
            handleChange(e);
            e.target.setCustomValidity(''); // Limpia el mensaje de error si el campo se llena
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              'Por favor, complete este campo con la cantidad de hijos del Funcionario'
            )
          }
          className="mb-4 p-2 border rounded w-full"
        />
        {formData.numHijos > 0 && (
          <>
            {Array.from({ length: formData.numHijos }, (_, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-sm font-semibold mb-2">
                  Hijo #{index + 1}
                </h3>
                <input
                  type="text"
                  name={`nombreHijo${index + 1}`}
                  placeholder="Nombre"
                  required
                  value={
                    formData.hijos[index]?.nombre || '' // Mapea el valor del array
                  }
                  onChange={handleHijosChange}
                  className="mb-4 p-2 border rounded w-full"
                />
                <select
                  name={`sexoHijo${index + 1}`}
                  value={
                    formData.hijos[index]?.sexo || '' // Mapea el valor del array
                  }
                  onChange={handleHijosChange}
                  required
                  className="mb-4 p-2 border rounded w-full"
                >
                  <option value="">Sexo</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
                <input
                  type="number"
                  name={`edadHijo${index + 1}`}
                  placeholder="Edad"
                  required
                  value={
                    formData.hijos[index]?.edad || '' // Mapea el valor del array
                  }
                  onChange={handleHijosChange}
                  className="mb-4 p-2 border rounded w-full"
                />
                <input
                  type="text"
                  name={`patologiasHijo${index + 1}`}
                  placeholder="Patologías"
                  required
                  value={
                    formData.hijos[index]?.patologias || '' // Mapea el valor del array
                  }
                  onChange={handleHijosChange}
                  className="mb-4 p-2 border rounded w-full"
                />
              </div>
            ))}
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 my-4 rounded-md hover:bg-blue-600 transition"
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
              Enviando...{' '}
            </span>
          ) : (
            'Enviar'
          )}{' '}
        </button>
      </form>
    </div>
  );
}

export default Form;
