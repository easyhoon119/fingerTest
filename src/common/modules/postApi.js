import axios from "axios";

export async function postMatter(id, data) {
    const res = await axios.post(`/quest/change/${id}`, {
        new: data,
    });
    return res.data;
}
