import { BaseService } from '../common/base.service';
import { JwtService } from '@nestjs/jwt';
import { ModelType } from 'typegoose';
import { RegisterVm } from './models/registervm-model';
import { User } from './models/user.model';
export declare class UsersService extends BaseService<User> {
    private readonly _userModel;
    private readonly _jwtService;
    constructor(_userModel: ModelType<User>, _jwtService: JwtService);
    findAll(filter?: {}, selectFields?: string): Promise<Array<User>>;
    findOne(filter?: {}, selectFields?: string): Promise<User>;
    register(user: RegisterVm): Promise<User>;
    validateUser(email: string, candidatePassword: string): Promise<User>;
    login(user: User): Promise<{
        token: string;
        lastLogin: string;
    }>;
}
