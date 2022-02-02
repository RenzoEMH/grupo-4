import { useDispatch } from 'react-redux';

const ActiveFilterPill = (prop) => {
  const dispatch = useDispatch();

  return (
    <span
      className="
              badge
              rounded-pill
              bg-primary
              ms-2
              px-3
              py-2
              border border-2
              d-flex
              align-items-center
            "
    >
      {prop.texto}
      <span
        onClick={() => {
          dispatch(prop.action(prop.payload));
        }}
        type="button"
        className="ms-2"
      >
        <i className="bi bi-x-lg"></i>
      </span>
    </span>
  );
};

export default ActiveFilterPill;
