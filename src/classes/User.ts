interface IUser {
    id: number;
    email?: string;
    password?: string;
    phone?: string;
}

class User implements IUser {
    public id: number;
    public email: string;
    public password: string;
    public phone?: string | null;

    /* Due to working with Vue reactivity and undefined, I instinctively now avoid
        'undefined' properties and will set nulls. Bad or good habit... unknown. */
    constructor(u: IUser) {
        this.id = -1;
        this.email = u.email !== undefined ? u.email : "";
        this.password = u.password !== undefined ? u.password : "";
        this.phone = u.phone !== undefined ? u.phone : null;
    }
}

export {IUser, User};
