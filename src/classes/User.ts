interface IUser {
    email?: string;
    password?: string;
    phone?: string;
}

class User implements IUser {
    public email: string;
    public password: string;
    public phone?: string | null;

    constructor(u: IUser) {
        this.email = u.email !== undefined ? u.email : "";
        this.password = u.password !== undefined ? u.password : "";
        this.phone = u.phone !== undefined ? u.phone : null;
    }
}

export {IUser, User};
