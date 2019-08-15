import { Strategy } from 'passport-jwt';
import { UsersService } from '../users.service';
declare const JwtStrategy_base: new (...args: any[]) => typeof Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly _userService;
    constructor(_userService: UsersService);
    validate(payload: any): Promise<import("../models/user.model").User>;
}
export {};
