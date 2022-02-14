import AdminBannerSlide from '../../components/AdminBannerSlide/AdminBannerSlide';
import SlideCreatorModal from '../../components/SlideCreatorModal/SlideCreatorModal';
import slides from '../../utils/adminBannerSlides';

const ManageBanner = () => {
  return (
    <main className="eventops__main d-flex flex-grow-1 container">
      <div className="mt-3 d-flex flex-column col-12 col-lg-8 mx-auto">
        <h2 className="text-center mt-4">Gestionar Banner</h2>
        <SlideCreatorModal />
        <div>
          {slides
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
