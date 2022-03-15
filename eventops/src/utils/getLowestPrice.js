const getLowestPrice = (arrayTypeTickets) => {
  const lowestPrice = arrayTypeTickets.reduce((prev, curr) =>
    prev.price < curr.price ? prev : curr
  );
  return lowestPrice.price || 0;
};

export default getLowestPrice;
