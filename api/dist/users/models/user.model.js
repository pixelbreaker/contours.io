"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1;
const basemodel_model_1 = require("../../common/models/basemodel.model");
const constants_1 = require("../../constants");
const bcryptjs_1 = require("bcryptjs");
const typegoose_1 = require("typegoose");
const user_role_enum_1 = require("./user-role.enum");
let User = User_1 = class User extends basemodel_model_1.BaseModel {
    get fullname() {
        return `${this.firstname} ${this.lastname || ''}`.trim();
    }
    static get model() {
        return new User_1().getModelForClass(User_1, { schemaOptions: basemodel_model_1.schemaOptions });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(props) {
        return new this.model(props);
    }
};
__decorate([
    typegoose_1.prop({ required: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], User.prototype, "fullname", null);
__decorate([
    typegoose_1.prop({ required: true, select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typegoose_1.prop({ required: true, index: true, unique: true, select: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typegoose_1.arrayProp({
        items: String,
        enum: user_role_enum_1.UserRole,
        default: user_role_enum_1.UserRole.User,
        select: false,
    }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
User = User_1 = __decorate([
    typegoose_1.pre('save', function (next) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcryptjs_1.genSalt(constants_1.BCRYPT_SALT_ROUNDS);
            const hashed = yield bcryptjs_1.hash(this.password, salt);
            this.password = hashed;
            next();
        });
    })
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map