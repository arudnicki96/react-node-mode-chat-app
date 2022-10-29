import axios from "axios";

export type CreateUserRequest = {
    name: string;
    birthDate: string;
    emailAddress: string;
    gender: string;
    password: string

}
export const createUser = (data: CreateUserRequest) => {
    return axios.request({
        method: "POST",
        url: "/users",
        data
    })
}
