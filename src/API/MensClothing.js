import API_URL from "./index";


export const getMensClothing = async () => {
const response = await fetch(`${API_URL}/products/category/men's clothing`);
const data = await response.json();
return data;
}