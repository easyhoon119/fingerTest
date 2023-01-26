import axios from "axios";

export async function getMatters() {
    const res = await axios.get("/quest");
    return res.data;
}

export async function getMatter(id) {
    const res = await axios.get(`/quest/${id}`);
    return res.data;
}
