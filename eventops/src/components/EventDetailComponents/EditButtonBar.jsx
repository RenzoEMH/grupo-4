import { useNavigate, useParams } from 'react-router-dom';

const EditButtonBar = () => {
  const navigate = useNavigate();
  const { eventoId } = useParams();

  const handleClick = () => {
    navigate(`/editar-evento/${eventoId}`);
  };

  return (
    <div className="d-grid mb-4">
      <button
        className="btn btn-primary d-flex justify-content-center align-items-center"
        type="button"
        onClick={() => handleClick()}
      >
        <span className="me-1 me-sm-2">
          <i className="bi bi-pencil-fill"></i>
        </span>
        <span> Editar </span>
      </button>
    </div>
  );
};

export default EditButtonBar;
