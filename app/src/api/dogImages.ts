import axios from "axios";

const getDogs = async (number: Number) => {
    try {
        const { data: resp } = await axios({ url: `https://dog.ceo/api/breeds/image/random/${number}`})

        return resp
    } catch (e) {
        console.error(e)
    }
}

export default getDogs;