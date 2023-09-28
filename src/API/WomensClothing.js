import API_URL from "./index";


export const getWomensClothing = async () => {
const response = await fetch(`${API_URL}/products/category/women's clothing`);
const data = await response.json();
return data;
}