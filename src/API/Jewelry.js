import API_URL from "./index";


export const getJewelry = async () => {
const response = await fetch(`${API_URL}/products/category/jewelery`);
const data = await response.json();
return data;
}
