import axios from "axios";
import endPoints from "@services/api";

const addproduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.postProduct, body, config);
  return response.data;
}

const deleteProduct =  async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};

export { addproduct, deleteProduct };