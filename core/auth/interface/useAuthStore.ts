export interface User {
    id: string;
    email: string;
    user_name: string;
    nickname: string;
}

// DTOs para las requests
export interface LoginUserDto {
    user_email: string;
    password: string;
}

export interface RegisterUserDto {
    user_email: string;
    user_name: string;
    password: string;
}

// Response del backend
export interface LoginResponse {
    access_token: string;
    user: User;
}