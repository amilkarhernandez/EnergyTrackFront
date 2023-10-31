import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { BsDatabaseAdd } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Constantes from '../../utils/Constantes';
import Modalconsumos from './ModalConsumos';

const ConsumptionList = () => {
  const [data, setData] = useState([]);
  const MySwal = withReactContent(Swal);

  const [selected, setSelected] = useState({});

  const [sortBy, setSortBy] = useState('asc');
  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [isUpdating, setIsUpdating] = useState(false); //definir que la accion NO es actualizar

  const handleShow = (elemento) => {
    setIsUpdating(true); //esta función es la de actualizar, entonces se cambia a true
    setShow(true);
    setSelected(elemento);
  };

  const handleAgregarShow = (elemento) => {
    setIsUpdating(false); //esta función es la de crear, entonces se deja en false
    setShow(true);
    setSelected(elemento);
  };

  const handleConsumos = async () => {
    const endPoint = Constantes.URL_BASE + '/consumos/listar';
    await axios
      .get(endPoint)
      .then((resp) => {
        console.log(resp);
        setData(resp.data.result);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          Swal.fire('Información!', err.response.data.message, 'error');
        } else if (err.response.status == 401) {
          Swal.fire('Información!', err.response.data.message, 'error');
        } else {
          Swal.fire('Información!', 'Ocurrio un error!', 'error');
        }
      });
  };

  useEffect(() => {
    handleConsumos();
  }, []);

  const handleDelete = (element) => {
    const endPoint = Constantes.URL_BASE + '/consumos/delete/';
    MySwal.fire({
      title: `¿Está seguro de Eliminar al consumo ${element._id}?, Esta acción es irreversible!`,
      showCancelButton: true,
      confirmButtonText: 'Si',
    }).then(async (result) => {
      if (result.isConfirmed) {
        //Accion en caso de que elijan el SI
        await axios
          .delete(endPoint + element._id)
          .then((resp) => {
            Swal.fire('Información!', resp.data.message, 'success');
            handleConsumos();
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status == 400) {
              Swal.fire('Información!', err.response.data.message, 'error');
            } else if (err.response.status == 401) {
              Swal.fire('Información!', err.response.data.message, 'error');
            } else {
              Swal.fire('Información!', 'Ocurrio un error!', 'error');
            }
          });
      }
    });
  };

  const findMaxMinConsumo = (consumo) => {
    if (consumo.length > 0) {
      const sortedConsumo = [...consumo];
      if (sortBy === 'asc') {
        sortedConsumo.sort(
          (a, b) => a.consumo_energetico - b.consumo_energetico
        );
        setSortBy('desc'); // cambiar el orden a descendente
      } else {
        sortedConsumo.sort(
          (a, b) => b.consumo_energetico - a.consumo_energetico
        );
        setSortBy('asc'); // cambiar el orden a ascendente
      }
      setData(sortedConsumo);
    }
  };

  const findNewOldConsumo = (consumo) => {
    if (consumo.length > 0) {
      const sortedConsumo = [...consumo];
      if (sortBy === 'asc') {
        sortedConsumo.sort((a, b) =>
          moment(a.fecha).isBefore(b.fecha) ? -1 : 1
        );
        setSortBy('desc'); // Cambiar el orden a descendente
      } else {
        sortedConsumo.sort((a, b) =>
          moment(b.fecha).isBefore(a.fecha) ? -1 : 1
        );
        setSortBy('asc'); // Cambiar el orden a ascendente
      }
      setData(sortedConsumo);
    }
  };

  return (
    <div className="p-2">
      <Table striped bordered hover variant="dark" size="lg">
        <thead>
          <tr>
            <th>Dato</th>
            <th className="flex items-center justify-center gap-2">
              Fecha De Registro
              <div className="flex items-center justify-center">
                <button
                  variant="warning"
                  className="btn btn-warning w-10"
                  onClick={() => findNewOldConsumo(data)}
                >
                  <FiFilter />
                </button>
              </div>
            </th>
            <th>Número De Piso</th>
            <th className="flex items-center justify-center gap-2">
              Consumo
              <div className="flex items-center justify-center">
                <button
                  variant="warning"
                  className="btn btn-warning w-10"
                  onClick={() => findMaxMinConsumo(data)}
                >
                  <FiFilter />
                </button>
              </div>
            </th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((consumo, index) => {
            return (
              <tr key={consumo._id}>
                <td>{index + 1}</td>
                <td>{moment(consumo.fecha).format('DD-MM-YYYY')}</td>
                <td>{consumo.numero_de_piso}</td>
                <td>{consumo.consumo_energetico} KWH</td>
                <td>
                  <div className="flex items-center justify-center">
                    <button
                      className="btn btn-primary w-10 mr-1"
                      onClick={() => handleShow(consumo)}
                    >
                      <FaUserEdit />
                    </button>
                    <button
                      className="btn btn-danger w-10"
                      onClick={() => handleDelete(consumo)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="flex items-center justify-center">
        <button
          className="btn btn-success flex items-center justify-center gap-2"
          onClick={() => handleAgregarShow()}
        >
          Agregar un consumo
          <BsDatabaseAdd />
        </button>
      </div>
      <Modalconsumos
        show={show}
        handleClose={handleClose}
        consumo={selected}
        getConsumo={handleConsumos}
        isUpdating={isUpdating} //se define isUpdating
      />
    </div>
  );
};

export default ConsumptionList;
