import { useEffect } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nextPage, setAtribute } from '../../redux/features/singleEventSlice';
import categoryNames from '../../utils/categoriesNames';
import { SesionContext } from '../../utils/SesionContext';
import EventDate from './EventDate';
import EventoImgModal from './EventoImgModal';
import ProgressBar from './ProgressBar';

const DetailsEvent = () => {
  const evento = useSelector((state) => state.singleEvent.singleEvent);
  const { sesion } = useContext(SesionContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!evento.idOwner) {
      dispatch(setAtribute({ key: '_id', value: Date.now() }));
      dispatch(setAtribute({ key: 'idOwner', value: sesion.id }));
    }
  }, [dispatch, evento.idOwner, sesion.id]);

  const handleAddDate = () => {
    dispatch(
      setAtribute({
        key: 'dates',
        value: [
          ...evento.dates,
          {
            _id: Math.floor(Math.random() * 100000) + 1,
            date: '',
            startHour: '',
            endHour: '',
            isEditable: true,
            ticketCategories: [],
          },
        ],
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextPage());
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProgressBar />
      <div className="accordion-item">
        <h1 className="accordion-button">Detalles del Evento</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 order-lg-1">
              <div className="mb-3">
                <label htmlFor="address">Nombre del Evento</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ponle un nombre llamativo "
                  value={evento.title}
                  onChange={(e) =>
                    dispatch(
                      setAtribute({ key: 'title', value: e.target.value })
                    )
                  }
                  //required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Categoría del Evento</label>
                <select
                  className="form-select d-block"
                  value={evento.category}
                  onChange={(e) =>
                    dispatch(
                      setAtribute({ key: 'category', value: e.target.value })
                    )
                  }
                  //required
                >
                  <option value="">Elige una categoría para tu Evento</option>
                  {categoryNames.map((category, index) => (
                    <option value={category} key={`${category}${index}`}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Descripción del Evento</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  rows="3"
                  placeholder="Escribe un parráfo corto que describa lo mejor posible tu evento. "
                  value={evento.description}
                  onChange={(e) =>
                    dispatch(
                      setAtribute({
                        key: 'description',
                        value: e.target.value,
                      })
                    )
                  }
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Información Adicional</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  rows="4"
                  placeholder="Detalla toda la información extra de tu evento. "
                  value={evento.infoExtra}
                  onChange={(e) =>
                    dispatch(
                      setAtribute({ key: 'infoExtra', value: e.target.value })
                    )
                  }
                ></textarea>
              </div>
              <div className="mb-3">
                <div className="row border-bottom py-3">
                  <button
                    onClick={handleAddDate}
                    type="button"
                    className="btn btn-primary"
                  >
                    Agregar Fecha
                  </button>
                </div>
                {evento.dates.map((dateItem, index) => (
                  <EventDate
                    dateItem={dateItem}
                    index={index}
                    allDates={evento.dates}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-5 order-lg-2">
              <EventoImgModal property={evento.img} type={'Evento'} />
              <EventoImgModal property={evento.ticketImg} type={'Ticket'} />
            </div>
          </div>
          <div className="mb-1">
            <label>Restriccion de Edad </label>
            <div className="d-block my-2">
              <div className="custom-control custom-radio">
                <input
                  id="allAges"
                  name="ageRestriction"
                  type="radio"
                  className="custom-control-input"
                  value="allAges"
                  checked={evento.ageRestriction === 'allAges'}
                  //required
                  onChange={(e) =>
                    dispatch(
                      setAtribute({
                        key: 'ageRestriction',
                        value: e.target.value,
                      })
                    )
                  }
                />
                <label className="custom-control-label" htmlFor="allAges">
                  Apto para todo público
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="withAdult"
                  name="ageRestriction"
                  type="radio"
                  className="custom-control-input"
                  value="withAdult"
                  checked={evento.ageRestriction === 'withAdult'}
                  //required
                  onChange={(e) =>
                    dispatch(
                      setAtribute({
                        key: 'ageRestriction',
                        value: e.target.value,
                      })
                    )
                  }
                />
                <label className="custom-control-label" htmlFor="withAdult">
                  Apto para menores de 18 años en compañia de un adulto
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="adultOnly"
                  name="ageRestriction"
                  type="radio"
                  className="custom-control-input"
                  value="adultOnly"
                  checked={evento.ageRestriction === 'adultOnly'}
                  //required
                  onChange={(e) =>
                    dispatch(
                      setAtribute({
                        key: 'ageRestriction',
                        value: e.target.value,
                      })
                    )
                  }
                />
                <label className="custom-control-label" htmlFor="adultOnly">
                  Apto solo para mayores de 18 años
                </label>
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
              onClick={() => navigate('/')}
              className="btn btn-light"
            >
              Cancelar
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

export default DetailsEvent;
