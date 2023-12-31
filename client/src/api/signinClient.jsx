import axios from 'axios';

const signIn = async (id,pw,ph) => {
    console.log(id);
    const ifIdExists = async(id) => {
        const res = await axios.get(`http://localhost:4000/auth/exists?id=${id}`);
        console.log("ifIdExists:",res);
        return res;
    }
    const GetResult = await ifIdExists(id);
    console.log("GetResult:",GetResult, "End");
    if (GetResult){
        const response = await axios.post("http://localhost:4000/auth/signin",{
            id: id,
            pw: pw,
            ph: ph,
        });
        console.log(response.data);
        return response.data;
    }
    else{
        return null;
    }
    
}

export default signIn;