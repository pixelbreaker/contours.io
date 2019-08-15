import { RegisterVm } from './models/registervm-model';
import { User } from './models/user.model';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly _usersService;
    constructor(_usersService: UsersService);
    getProfile(req: any): Promise<User>;
    findOne(id: any): Promise<User | undefined>;
    register(user: RegisterVm): Promise<User>;
    login(req: any): Promise<{
        token: string;
        lastLogin: string;
    }>;
    delete(id: any, req: any): Promise<User>;
    update(updateUser: User, id: any): Promise<User>;
}
