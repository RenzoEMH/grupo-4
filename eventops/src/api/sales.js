import axios from 'axios';

const EPAYCO_API_SERVER = 'https://secure.epayco.co/validation/v1/reference/';

export const getEpaycoSale = async (id) => {
  const url = `${EPAYCO_API_SERVER}${id}`;

  try {
    const response = await axios.get(url);
    if (!response.data.success)
      throw new Error('Codigo de transacción no valido');
    return { ...response.data.data, token: id };
  } catch (error) {}
};
