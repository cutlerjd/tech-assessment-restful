import { User } from "../classes/User";

class UserStore {
    private store: User[] = [];

    public get users(): User[] {
        return this.store;
    }

    /**
     * Adds a new user. Will return an array, if array is not empty user was not added and errors
     * are strings in array.
     * @param newUser New user to be added.
     */
    public addUser(newUser: User): string[] {
        const errors: string [] = [];
        const emailIsTaken: string | null = this.checkIfEmailTaken(newUser.email);
        // Initial check if user can be added with email address.
        if (emailIsTaken !== null) {
            errors.push(emailIsTaken);
        } else {
            // All validations needed when performing an add. New requirements would follow similar pattern.
            const emailValid: string | null = this.checkEmail(newUser.email);
            if (emailValid !== null) {
                errors.push(emailValid);
            }
            const phoneValid: string | null = this.checkPhone(newUser.phone);
            if (phoneValid !== null) {
                errors.push(phoneValid);
            }
        }
        if (errors.length !== 0) {
            this.store.push(newUser);
        }
        return errors;
    }

    public editUser(userObj: User): string[] {
        const errors: string [] = [];
        const userIndex = this.store.findIndex((user: User) => {
            return user.email.toLowerCase() === userObj.email.toLowerCase();
        });
        if (userIndex === -1) {
            errors.push("User not found.");
        } else {
            const emailValid: string | null = this.checkEmail(userObj.email);
            if (emailValid !== null) {
                errors.push(emailValid);
            }
            const phoneValid: string | null = this.checkPhone(userObj.phone);
            if (phoneValid !== null) {
                errors.push(phoneValid);
            }
        }
        if (errors.length !== 0) {
            this.store[userIndex].email = userObj.email;
            this.store[userIndex].password = userObj.password;
            this.store[userIndex].phone = userObj.phone;
        }
        return errors;
    }

    public getUserByEmail(email: string | null | undefined): User | null {
        const userIndex = this.store.findIndex((user: User) => {
            return user.email.toLowerCase() === email.toLowerCase();
        });
        if (userIndex === -1) {
            return null;
        } else {
            return this.store[userIndex];
        }
    }

    private checkIfEmailTaken(email: string): string | null {
        const index = this.store.findIndex((user: User) => {
            return user.email.toLowerCase() === email.toLowerCase();
        });
        if (index !== -1) {
            return "Email address is taken.";
        } else {
            return null;
        }
    }

    private checkEmail(email: string): string | null {
        if (email.length === 0) {
            return "Email address is required.";
        } else {
            return null;
        }
    }

    private checkPhone(phone: string | null): string | null {
        if (phone === null) {
            return null;
        } else {
            const regExPhone = /\d{3}-\d{3})\d{4})/;
            if (regExPhone.test(phone) === false) {
                return "Phone is not the correct format. ###-###-####";
            } else {
                return null;
            }
        }
    }
}

export default UserStore;
