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
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("../common/base.service");
const entrant_model_1 = require("./models/entrant.model");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let EntrantsService = class EntrantsService extends base_service_1.BaseService {
    constructor(_entrantModel) {
        super();
        this._entrantModel = _entrantModel;
        this._model = this._entrantModel;
    }
};
EntrantsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(entrant_model_1.Entrant.modelName)),
    __metadata("design:paramtypes", [Object])
], EntrantsService);
exports.EntrantsService = EntrantsService;
//# sourceMappingURL=entrants.service.js.map