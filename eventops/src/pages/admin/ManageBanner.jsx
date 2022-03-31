import { useDispatch, useSelector } from 'react-redux';
import {
  getAllSlidesAsync,
  selectCreatedSlide,
  selectDeleteResponse,
  selectIsLoading,
  selectSlides,
  selectUpdateResponse,
} from '../../redux/features/slidesSlice';
import AdminBannerSlide from '../../components/AdminBannerSlide/AdminBannerSlide';
import SlideCreatorModal from '../../components/SlideCreatorModal/SlideCreatorModal';
import SlideEditorModal from '../../components/SlideCreatorModal/SlideEditorModal';
import { useEffect } from 'react';
import { getAllEventsAsync } from '../../redux/features/eventsSlice';

const ManageBanner = () => {
  const slides = useSelector(selectSlides);
  const createdSlide = useSelector(selectCreatedSlide);
  const updateResponse = useSelector(selectUpdateResponse);
  const deleteResponse = useSelector(selectDeleteResponse);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSlidesAsync());
  }, [dispatch]);

  useEffect(() => {
    !!createdSlide && dispatch(getAllSlidesAsync());
  }, [createdSlide, dispatch]);

  useEffect(() => {
    !!updateResponse && dispatch(getAllSlidesAsync());
  }, [updateResponse, dispatch]);

  useEffect(() => {
    !!deleteResponse && dispatch(getAllSlidesAsync());
  }, [deleteResponse, dispatch]);

  useEffect(() => {
    dispatch(getAllEventsAsync());
  }, [dispatch]);

  return (
    <main className="eventops__main d-flex flex-grow-1 container">
      <div className="mt-3 d-flex flex-column col-12 col-lg-8 mx-auto">
        <h2 className="text-center mt-4">Gestionar Banner</h2>
        <SlideCreatorModal />
        <SlideEditorModal />
        <div data-test-id="banner-list">
          {isLoading && <h3 className="text-center">Cargando...</h3>}
          {!!slides &&
            [...slides].map((slide) => {
              return <AdminBannerSlide slide={slide} key={slide._id} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default ManageBanner;
