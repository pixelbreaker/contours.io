import { Strategy } from 'passport-local';
import { UsersService } from '../users.service';
import { User } from '../models/user.model';
declare const LocalStrategy_base: new (...args: any[]) => typeof Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly _userService;
    constructor(_userService: UsersService);
    validate(username: string, password: string): Promise<User>;
}
export {};
