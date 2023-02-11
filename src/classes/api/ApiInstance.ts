import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import event from '@/classes/utilitarios/event'


const api: AxiosInstance = axios.create();
const requests = new Set<AxiosRequestConfig>();

const apiError = async (error: AxiosError) => {

    if (error.response == undefined)
        event.trigger("api-erro-conexao", error?.response);

    if (error?.response?.status == 400)
        event.trigger("api-erro-400", error?.response);

    if (error?.response?.status == 401)
        event.trigger("api-erro-401", error?.response);

    if (error?.response?.status == 403)
        event.trigger("api-erro-403", error?.response);

    if (error?.response?.status == 500)
        event.trigger("api-erro-500", error?.response);

    throw error;
};

const apiResponse = (response: AxiosResponse) => {
    event.trigger("api-response", response);

    return response;
};

const apiRequest = (request: AxiosRequestConfig) => {
    event.trigger("api-request", request);

    return request;
};

api.interceptors.response.use(apiResponse, apiError);
api.interceptors.request.use(apiRequest);

export default { current: api, requests };