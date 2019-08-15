import { BaseModelVm } from '../../common/models/basemodel-vm.model';
export declare class LoginVm extends BaseModelVm {
    email: string;
    password: string;
    static map(props: any, extraFields?: any[]): LoginVm;
}
