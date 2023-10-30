import axios from "axios";
import { baseUrl } from "../baseUrl";

export let client=axios.create({
    baseURL:baseUrl
})