import API_URL from "./index";



export const SortProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products?sort=desc`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {

      console.error("Error fetching and sorting products:", error);

      throw error; // I could also throw a custom error here
      
    }
  };
  
 

// export const SortProductsByCategory = async (category) => {

//     try {
//         const response = await fetch(`${API_URL}/products/${category}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         const data = await response.json();
//         return data;
//     }
//     catch (error) {
//         console.log(error);
//     }

// }

// export const SortProductsByPrice = async (price) => {

//     try {
//         const response = await fetch(`${API_URL}/products/${price}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         const data = await response.json();
//         return data;
//     }
//     catch (error) {
//         console.log(error);
//     }

// }

// export const SortProductsByRating = async (rating) => {
    
//         try {
//             const response = await fetch(`${API_URL}/products/${rating}`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });
//             const data = await response.json();
//             return data;
//         }
//         catch (error) {
//             console.log(error);
//         }
    
//     }

