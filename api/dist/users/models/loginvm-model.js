"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basemodel_vm_model_1 = require("../../common/models/basemodel-vm.model");
const lodash_1 = require("lodash");
class LoginVm extends basemodel_vm_model_1.BaseModelVm {
    static map(props, extraFields = []) {
        return lodash_1.pick(props, ['email', ...extraFields]);
    }
}
exports.LoginVm = LoginVm;
//# sourceMappingURL=loginvm-model.js.map