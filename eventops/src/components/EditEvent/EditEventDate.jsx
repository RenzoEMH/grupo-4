import { useDispatch } from 'react-redux';
import { setAtribute } from '../../redux/features/singleEventSlice';

const EditEventDate = ({
  dateItem: { date, startHour, endHour },
  index,
  allDates,
}) => {
  const dispatch = useDispatch();

  const handleOnChangeDateProperty = (e) => {
    dispatch(
      setAtribute({
        key: 'dates',
        value: allDates.map((dateElement, i) =>
          i === index
            ? { ...dateElement, [`${e.target.name}`]: e.target.value }
            : dateElement
        ),
      })
    );
  };

  const handleOnClickDeleteDate = () => {
    console.log(index);
    dispatch(
      setAtribute({
        key: 'dates',
        value: allDates.filter((dateElement, i) => index !== i),
      })
    );
  };

  return (
    <div className="row border-bottom py-3">
      <div className="col-lg-4">
        <div className="mb-3">
          <label htmlFor="address">Fecha</label>
          <input
            className="form-control"
            type="text"
            placeholder="Ingrese la fecha del evento"
            onFocus={(e) => {
              e.target.type = 'date';
            }}
            onBlur={(e) => {
              e.target.type = 'text';
            }}
            value={date}
            name={'date'}
            onChange={handleOnChangeDateProperty}
          />
        </div>
      </div>
      <div className="col-lg-3">
        <div className="mb-3">
          <label htmlFor="address">Hora de Inicio</label>
          <input
            type="time"
            className="form-control"
            value={startHour}
            name={'startHour'}
            onChange={handleOnChangeDateProperty}
          />
        </div>
      </div>
      <div className="col-lg-3">
        <div className="mb-3">
          <label htmlFor="address">Hora de Fin</label>
          <input
            type="time"
            className="form-control"
            value={endHour}
            name={'endHour'}
            onChange={handleOnChangeDateProperty}
          />
        </div>
      </div>
      <div className="col-lg-2 d-flex justify-content-center align-items-center">
        {allDates.length > 1 ? (
          <span onClick={handleOnClickDeleteDate}>
            <i className="bi bi-trash-fill"></i>
          </span>
        ) : (
          <span>
            <i style={{ color: 'grey' }} className="bi bi-trash-fill"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default EditEventDate;
