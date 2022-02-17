import { useNavigate, useParams } from 'react-router-dom';

const EditButtonBar = () => {
  const navigate = useNavigate();
  const { eventoId } = useParams();

  return (
    <section className="filter-menu bg-primary my-4 py-3">
      <div className="d-flex justify-content-center gap-5">
        <div className="btn-group">
          <button
            className="btn btn-primary d-flex align-items-center"
            type="button"
            onClick={() => navigate(`/editar-evento/${eventoId}`)}
          >
            <span className="me-1 me-sm-2">
              <i className="bi bi-pencil-fill"></i>
            </span>
            <span> Editar </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditButtonBar;
