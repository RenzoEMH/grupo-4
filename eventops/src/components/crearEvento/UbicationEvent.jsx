import { useDispatch, useSelector } from 'react-redux';
import {
  nextPage,
  prevPage,
  setAtribute,
} from '../../redux/features/singleEventSlice';
import debounce from 'lodash.debounce';
import cityDepartmentNames from '../../utils/cityDepartmentNames';
import ProgressBar from './ProgressBar';
import { useMemo } from 'react';
import { useEffect } from 'react';

const UbicactionEvent = () => {
  const evento = useSelector((state) => state.singleEvent.singleEvent);
  const dispatch = useDispatch();

  const debouncedChangeAddressHandler = useMemo(() => {
    const changeAddressHandler = (event) => {
      dispatch(setAtribute({ key: 'address', value: event.target.value }));
    };
    return debounce(changeAddressHandler, 1500);
  }, [dispatch]);

  useEffect(() => {
    return () => {
      debouncedChangeAddressHandler.cancel();
    };
  }, [debouncedChangeAddressHandler]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextPage());
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <ProgressBar />
      <div className="accordion-item">
        <h1 className="accordion-button">Ubicación del Evento</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-1">
              <div className="mb-3">
                <label htmlFor="city">Ciudad</label>
                <select
                  className="form-select d-block w-100"
                  id="city"
                  value={evento.city}
                  onChange={(e) => {
                    dispatch(
                      setAtribute({ key: 'city', value: e.target.value })
                    );
                  }}
                  //required
                >
                  <option value="">Elige una ciudad</option>
                  {cityDepartmentNames.map((cityDepartment, index) => (
                    <option
                      value={cityDepartment}
                      key={`${cityDepartment}${index}`}
                    >
                      {cityDepartment.split(',')[0].replace('+', ' ')}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Dirección del Evento</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej. Avenida Javier Prado Este 4200"
                  defaultValue={evento.address}
                  onChange={debouncedChangeAddressHandler}
                  //required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Referencia</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej. Al frente del metro de Lima"
                  value={evento.refference}
                  onChange={(e) => {
                    dispatch(
                      setAtribute({
                        key: 'refference',
                        value: e.target.value,
                      })
                    );
                  }}
                  //required
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <div className="mb-3">
                <label htmlFor="address">Mapa de ubicación del evento</label>
                <div
                  id="map-container-google-1"
                  className="z-depth-1-half map-container"
                  style={{ height: '100px' }}
                >
                  <iframe
                    title="Mapa de crear evento"
                    src={`https://maps.google.com/maps?q=${
                      evento.address.length !== 0
                        ? `${evento.address.replaceAll(' ', '+')},`
                        : ''
                    }${
                      evento.city.length !== 0 ? evento.city : 'Lima,Lima'
                    }&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    frameBorder="0"
                    style={{ border: '0' }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-12 order-md-1 container"
        style={{ marginTop: '1rem' }}
      >
        <div className="row">
          <div
            className="col-md-6 order-md-1"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <button
              type="button"
              className="btn btn-light"
              onClick={() => dispatch(prevPage())}
            >
              Atras
            </button>
          </div>
          <div
            className="col-md-6 order-md-1"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <button type="submit" className="btn btn-danger">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UbicactionEvent;
