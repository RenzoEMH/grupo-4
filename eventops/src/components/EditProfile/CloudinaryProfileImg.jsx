import { useDispatch } from 'react-redux';
import { setAtribute } from '../../redux/features/singleUserSlice';

const CloudinaryProfileImg = ({ property }) => {
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
            setAtribute({
              key: 'userImg',
              value: secure_url,
            })
          );
        }
      }
    );
  };
  return (
    <>
      <div className="col-md-3 col-right">
        <div className="text-center mb-4">
          <div className="mb-6 class-imagen">
            {!property ? (
              <i
                className="bi bi-person-square"
                style={{ fontSize: '10rem' }}
              ></i>
            ) : (
              <img
                className="img-fluid"
                style={{ borderRadius: '50%' }}
                src={property}
                alt="preview"
              />
            )}
          </div>
          <div className="class-button">
            <button
              type="button"
              className="btn btn-danger btn-sm rounded-50"
              onClick={showWidgetCloudinary}
            >
              Cambiar / subir imagen
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudinaryProfileImg;
