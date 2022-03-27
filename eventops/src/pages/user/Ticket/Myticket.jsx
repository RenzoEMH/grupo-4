import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './_Myticket.scss';
import { TicketBanner } from '../../../components/FilterAndSearchBar/general/TicketBanner';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTicketsAsync,
  selectTickets,
} from '../../../redux/features/ticketsSlice';
import { useParams } from 'react-router-dom';
import {
  getAllEventsAsync,
  selectEvents,
} from '../../../redux/features/eventsSlice';
import CarouselItemTicket from '../../../components/ticketComponents/CarouselItemTicket';
import parseJwt from '../../../utils/ParseJwt';
import {
  getAllUsersAsync,
  selectUsers,
} from '../../../redux/features/usersSlice';

function Myticket() {
  const dispatch = useDispatch();
  const { id: idEvento } = useParams();
  const tickets = useSelector(selectTickets);
  const eventos = useSelector(selectEvents);
  const users = useSelector(selectUsers);
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);

  useEffect(() => {
    dispatch(getAllTicketsAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllEventsAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);

  const getUniqueTickets = (dbTickets) => {
    const uniqueTickets = [];

    dbTickets
      .filter((ticketElement) => ticketElement.idEvento === idEvento)
      .forEach((item) => {
        const foundIndex = uniqueTickets.findIndex(
          (unit) => unit.idCategory === item.idCategory
        );
        if (foundIndex >= 0) {
          uniqueTickets[foundIndex].quantity += item.quantity;
        } else {
          uniqueTickets.push({ ...item });
        }
      });

    return uniqueTickets.map((ticketElement, index) => {
      const owner = users?.find((userElement) => userElement._id === sesion.id);
      const evento = eventos?.find(
        (eventoElement) => eventoElement._id === idEvento
      );
      const ticketDate = evento?.dates.find(
        (dateElement) => dateElement._id === ticketElement.idDate
      );
      const tickeCategory = ticketDate?.ticketCategories.find(
        (categoryElement) => categoryElement._id === ticketElement.idCategory
      );
      const ownerName = `${owner?.name} ${owner?.lastname}`;
      const datosTicket = {
        ownerName,
        eventName: evento?.title,
        eventDate: ticketDate?.date,
        ticketQuantity: ticketElement.quantity,
        eventAddress: evento?.address,
        ticketCategory: tickeCategory?.type,
      };
      return (
        <Carousel.Item key={`${index}0`}>
          <CarouselItemTicket datosTicket={datosTicket} key={index} />
        </Carousel.Item>
      );
    });
  };

  return (
    <div>
      <TicketBanner />
      <div className="box">
        <Carousel className="carouselTicket" interval={null}>
          {!!tickets && getUniqueTickets(tickets)}
        </Carousel>
      </div>
    </div>
  );
}

export default Myticket;
