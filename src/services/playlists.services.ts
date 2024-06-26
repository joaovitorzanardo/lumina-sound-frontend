import { PlaylistDTO } from "../dtos/playlist.dto";
import { PlaylistTrackDTO } from "../dtos/playlistTrack.dto";
import { PlaylistResponse } from "../types/playlistResponse.type";
import { SuccessResponse } from "../types/successResponse.type";
import http from "./http.service";

const ENDPOINT = "/playlists";

export type PlaylistRequest = {
    id?: number;
    name: string;
    description?: string;
    userId: number;
    createdAt?: string;
    coverImageUrl?: string;
    public?: boolean;
};

export const update = (data: PlaylistRequest) => http.put<SuccessResponse>(ENDPOINT, data); 

export const getById = (id: number) => http.get<PlaylistResponse>(`${ENDPOINT}/${id}`);

export const create = (data: PlaylistRequest) => http.post<SuccessResponse>(ENDPOINT, data);

export const deleteById = (id: number) => http.delete<SuccessResponse>(`${ENDPOINT}/${id}`);

// export const getAllByUserId = (username: string) => http.get<Array<PlaylistDTO>>(`/users/${username}/playlists`);

export const addTrack = (data: PlaylistTrackDTO) => http.post<SuccessResponse>(`${ENDPOINT}/track`, data)

export const removeTrack = (data: PlaylistTrackDTO) => http.delete<SuccessResponse>(`${ENDPOINT}/track`, {data});

// export const follow = (data: FollowDTO) => http.post<SuccessResponse>(`${ENDPOINT}/follow`, data);

// export const unfollow = (data: FollowDTO) => http.delete<SuccessResponse>(`${ENDPOINT}/unfollow`, {data});

export const getUserPlaylists = () => http.get<Array<PlaylistDTO>>("/users/library/playlists");

export default {
    updateById: update,
    getById,
    create,
    deleteById,
    addTrack,
    removeTrack,
    getUserPlaylists
};
