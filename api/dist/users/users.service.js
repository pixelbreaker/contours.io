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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const base_service_1 = require("../common/base.service");
const bcryptjs_1 = require("bcryptjs");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const user_model_1 = require("./models/user.model");
let UsersService = class UsersService extends base_service_1.BaseService {
    constructor(_userModel, _jwtService) {
        super();
        this._userModel = _userModel;
        this._jwtService = _jwtService;
        this._model = this._userModel;
    }
    findAll(filter = {}, selectFields = '') {
        const _super = Object.create(null, {
            findAll: { get: () => super.findAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let results;
            try {
                results = yield _super.findAll.call(this, filter, selectFields);
            }
            catch (e) {
                throw new common_1.HttpException('Internal error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (results.length === 0) {
                throw new common_1.HttpException('No results', common_1.HttpStatus.NO_CONTENT);
            }
            else {
                return results;
            }
        });
    }
    findOne(filter = {}, selectFields = '') {
        const _super = Object.create(null, {
            findOne: { get: () => super.findOne }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            try {
                result = yield _super.findOne.call(this, filter, selectFields);
            }
            catch (e) {
                throw new common_1.HttpException('Internal error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!result) {
                throw new common_1.HttpException('No results', common_1.HttpStatus.NO_CONTENT);
            }
            else {
                return result;
            }
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.create(user, '+email');
            return newUser;
        });
    }
    validateUser(email, candidatePassword) {
        const _super = Object.create(null, {
            findOne: { get: () => super.findOne }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield _super.findOne.call(this, { email }, '+password +roles +email'));
            if (user) {
                const match = yield bcryptjs_1.compare(candidatePassword, user.password);
                if (match) {
                    return user;
                }
                return null;
            }
            return null;
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = { username: user.email, sub: user._id, roles: user.roles };
            return {
                token: this._jwtService.sign(payload),
                lastLogin: new Date().toISOString(),
            };
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_model_1.User.modelName)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map