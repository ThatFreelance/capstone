import API_URL from "./index"

const AllUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    return data;
}

export default AllUsers;



  

