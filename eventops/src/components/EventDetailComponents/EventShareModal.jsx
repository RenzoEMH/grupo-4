import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const EventShareModal = ({ evento: { title, description, img } }) => {
  const currentPath = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentPath);
  };

  return (
    <>
      <div className="col-md-2">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target={'#shareModal'}
        >
          <i className="bi bi-share"></i>
        </button>
      </div>
      <div
        className="modal fade"
        id="shareModal"
        tabIndex={'-1'}
        aria-labelledby="shareModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header text-danger flex-column">
              <h4 className="modal-title text-center fw-bold" id="shareModal">
                Compartir en:
              </h4>
            </div>
            <div className="modal-body text-dark py-5">
              <div className="d-flex flex-column flex-md-row flex-wrap flex-md-nowrap justify-content-center justify-content-md-around">
                <FacebookShareButton
                  className="d-flex flex-column align-items-center"
                  url={currentPath}
                  quote={description}
                >
                  <FacebookIcon size={70} />
                  <span className="mt-2">Facebook</span>
                </FacebookShareButton>
                <WhatsappShareButton
                  className="d-flex flex-column align-items-center"
                  url={currentPath}
                  title={title}
                >
                  <WhatsappIcon size={70} />
                  <span className="mt-2">WhatsApp</span>
                </WhatsappShareButton>
                <TwitterShareButton
                  className="d-flex flex-column align-items-center"
                  url={currentPath}
                  title={title}
                >
                  <TwitterIcon size={70} />
                  <span className="mt-2">Twitter</span>
                </TwitterShareButton>
                <button
                  className="btn btn-light d-flex flex-column align-items-center"
                  onClick={copyToClipboard}
                >
                  <i
                    style={{ fontSize: '47px' }}
                    className="bi bi-link-45deg"
                  ></i>
                  <span className="mt-2">Copiar link</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventShareModal;
