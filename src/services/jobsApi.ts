import axios from "axios";
import {IJobsModel} from "../models/jobs.model";

const token = process.env.REACT_APP_API_TOKEN

const instance = axios.create({
    baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy',
    headers: {
        Authorization: 'Bearer ' + "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    }
})


export const jobsApi = {
    async getJobsList() {
        try {
            const data = instance.get<IJobsModel[]>('/data')
            return data
        } catch (error) {
            console.log(error)
        }

    },
}