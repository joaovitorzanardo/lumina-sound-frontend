import { LabelDTO } from "../dtos/label.dto";
import { SuccessResponse } from "../types/successResponse.type";
import http from "./http.service";

const ENDPOINT = "/labels";

export const create = (data: LabelDTO) => http.post<SuccessResponse>(ENDPOINT, data);

export const getById = (id: number) => http.get<LabelDTO>(`${ENDPOINT}/${id}`);

export const update = (data: LabelDTO) => http.put<SuccessResponse>(ENDPOINT, data);

export const get = (page: number = 0, perPage: number = 25) => http.get<Array<LabelDTO>>(`${ENDPOINT}?page=${page}&per_page=${perPage}`);

export const follow = (id: number) => http.post<SuccessResponse>(`${ENDPOINT}/${id}/follow`);

export const unfollow = (id: number) => http.delete<SuccessResponse>(`${ENDPOINT}/${id}/unfollow`);

export const getUserLabels = () => http.get<Array<LabelDTO>>("/users/library/labels");

export default {
    create,
    getById,
    update,
    get,
    follow,
    unfollow,
    getUserLabels
};
