import { useDispatch } from 'react-redux';
import { setEditAtribute } from '../../redux/features/singleEventSlice';

/**
 * se debe enviar la propiedad img o ticketImg del stado de eventoSingle y el tipo de imagen ('Evento' o 'Ticket')
 * @param {*} param0
 * @returns componente de modal
 */
const EditCloudinaryImgModal = ({ property, type }) => {
  const dispatch = useDispatch();

  const showWidgetCloudinary = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'dqihgaxhf',
        uploadPreset: 'pq0akefe',
        sources: ['local'],
        showAdvancedOptions: false,
        cropping: true,
        multiple: false,
        defaultSource: 'local',
        styles: {
          palette: {
            window: '#21262A',
            sourceBg: '#21262A',
            windowBorder: '#FFFFFF',
            tabIcon: '#FFFFFF',
            inactiveTabIcon: '#8E9FBF',
            menuIcons: '#FFFFFF',
            link: '#9F2D30',
            action: '#336BFF',
            inProgress: '#00BFFF',
            complete: '#33ff00',
            error: '#EA2727',
            textDark: '#000000',
            textLight: '#FFFFFF',
          },
          fonts: {
            default: null,
            "'Space Mono', monospace": {
              url: 'https://fonts.googleapis.com/css?family=Space+Mono',
              active: true,
            },
          },
        },
        language: 'es',
        text: {
          es: {
            menu: {
              files: 'Mis archivos',
            },
            crop: {
              title: 'Recorte su imagen',
              crop_btn: 'Recortar',
              skip_btn: 'Saltar',
              reset_btn: 'Restablecer',
              close_btn: 'Si',
              close_prompt:
                'Si cierra la ventana se cancelaran las subidas de imágenes, ¿Está seguro?',
              image_error: 'Hubo un error al subir la imagen',
              corner_tooltip:
                'Arrastre la esquina para cambiar el tamaño del cuadro',
              handle_tooltip:
                'Arrastre el filo para cambiar el tamaño del cuadro',
            },
            local: {
              browse: 'Buscar',
              dd_title_single: 'Arrastre y suelte su imágen aquí',
              drop_title_single: 'Arrastre y suelte la imágen a subir',
            },
          },
        },
      },
      (err, result) => {
        if (!err && result?.event === 'success') {
          const { secure_url } = result.info;
          dispatch(
            setEditAtribute({
              key: type === 'Evento' ? 'img' : 'ticketImg',
              value: secure_url,
            })
          );
        }
      }
    );
  };

  return (
    <>
      <div
        style={type !== 'Evento' ? { paddingTop: '14px' } : null}
        className="form-element"
      >
        <label>Imagen del {type}</label>
        <div className="image-picker">
          {property === '' ? (
            <div className="image-event" />
          ) : (
            <img className="img-fluid rounded-3" src={property} alt="preview" />
          )}
          <button
            style={{ position: 'absolute', margin: '0.5rem' }}
            type="button"
            className="btn btn-danger"
            onClick={showWidgetCloudinary}
          >
            + Subir
          </button>
        </div>
      </div>
    </>
  );
};

export default EditCloudinaryImgModal;
