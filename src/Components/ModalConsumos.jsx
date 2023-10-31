import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import Constantes from '../../utils/Constantes';

const Modalconsumos = ({
  show,
  handleClose,
  consumo,
  getConsumo,
  isUpdating,
}) => {
  const [ConsuEnergi, setConsuEnergi] = useState('');
  const [NumPiso, setNumPiso] = useState('');
  const [fecha, setFecha] = useState('');
  const endPoint = isUpdating //si isUpdating se va al consumo de update, sino al de create
    ? Constantes.URL_BASE + '/consumos/actualizar/'
    : Constantes.URL_BASE + '/consumos/nuevos';

  const handleActualizar = async () => {
    const data = {
      id: consumo._id,
      numero_de_piso: NumPiso,
      consumo_energetico: ConsuEnergi,
    };
    await axios
      .put(endPoint + consumo._id, data)
      .then((resp) => {
        console.log(resp);
        Swal.fire('Información!', 'Actualizado Correctamente!', 'success');
        getConsumo();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          Swal.fire('Información!', err.response.data.message, 'error');
        } else {
          Swal.fire('Información!', 'Ocurrio un error!', 'error');
        }
      });
  };

  const handleAgregar = async () => {
    const data = {
      numero_de_piso: NumPiso,
      consumo_energetico: ConsuEnergi,
    };
    await axios
      .post(endPoint, data)
      .then((resp) => {
        console.log(resp);
        Swal.fire('Información!', 'Agregado Correctamente!', 'success');
        getConsumo();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          Swal.fire('Información!', err.response.data.message, 'error');
        } else {
          Swal.fire('Información!', 'Ocurrió un error!', 'error');
        }
      });
  };

  useEffect(() => {
    if (isUpdating) {
      if (consumo._id) {
        setConsuEnergi(consumo.consumo_energetico);
        setNumPiso(consumo.numero_de_piso);
      } else {
        setConsuEnergi('');
        setNumPiso('');
      } //si es isUpdating, deja editar los datos, sino solo se añaden
    } else {
      setFecha('Fecha hoy');
      setConsuEnergi('');
      setNumPiso('');
    }
  }, [show, isUpdating]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isUpdating ? 'Actualizar Datos' : 'Agregar Datos'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label className="form-label">Fecha</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="consumoHelp"
              onChange={(e) => {
                setFecha(e.target.value);
              }}
              value={fecha}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Consumo Energético</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="consumoHelp"
              onChange={(e) => {
                setConsuEnergi(e.target.value);
              }}
              value={ConsuEnergi}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Número de Piso</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="pisoHelp"
              onChange={(e) => {
                setNumPiso(e.target.value);
              }}
              value={NumPiso}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          Close
        </button>
        <button
          className="btn btn-primary"
          onClick={isUpdating ? handleActualizar : handleAgregar} // si isUpdating elige handleActualizar sino  handleAgregar | si isUpdating elige Actualizar sino Agregar
        >
          {isUpdating ? 'Actualizar' : 'Agregar'}
        </button>{' '}
      </Modal.Footer>
    </Modal>
  );
};

export default Modalconsumos;
