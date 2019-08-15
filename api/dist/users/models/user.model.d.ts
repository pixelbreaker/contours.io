import { BaseModel } from '../../common/models/basemodel.model';
import { InstanceType, ModelType } from 'typegoose';
import { UserRole } from './user-role.enum';
export declare class User extends BaseModel<User> {
    username: string;
    firstname: string;
    lastname?: string;
    readonly fullname: string;
    password: string;
    email: string;
    roles?: Array<UserRole>;
    static readonly model: ModelType<User>;
    static readonly modelName: string;
    static createModel(props: User): InstanceType<User>;
}
