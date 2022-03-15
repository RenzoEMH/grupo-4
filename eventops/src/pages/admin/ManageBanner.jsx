import { useSelector } from 'react-redux';
import { selectSlides } from '../../redux/features/slidesSlice';
import AdminBannerSlide from '../../components/AdminBannerSlide/AdminBannerSlide';
import SlideCreatorModal from '../../components/SlideCreatorModal/SlideCreatorModal';
import SlideEditorModal from '../../components/SlideCreatorModal/SlideEditorModal';

const ManageBanner = () => {
  const slides = useSelector(selectSlides);

  return (
    <main className="eventops__main d-flex flex-grow-1 container">
      <div className="mt-3 d-flex flex-column col-12 col-lg-8 mx-auto">
        <h2 className="text-center mt-4">Gestionar Banner</h2>
        <SlideCreatorModal />
        <SlideEditorModal />
        <div>
          {[...slides]
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((slide) => {
              return <AdminBannerSlide slide={slide} key={slide.id} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default ManageBanner;
