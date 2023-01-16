import axios from "axios";

const api=axios.create({
    baseURL: 'https://c1b71fa3-5be9-4253-b403-2074631732c0.mock.pstmn.io',
    timeout: 5000
})

export default api;