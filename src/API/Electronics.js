import API_URL from "./index";


export const getElectronics = async () => {
const response = await fetch(`${API_URL}/products/category/electronics`);
const data = await response.json();
return data;
}
