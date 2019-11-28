export interface AuthData {
    username: string,
    password: string
}

export interface SignUpData extends AuthData {
    email: string
}