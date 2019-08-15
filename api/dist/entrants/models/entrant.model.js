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
var Entrant_1;
const basemodel_model_1 = require("../../common/models/basemodel.model");
const typegoose_1 = require("typegoose");
const types_1 = require("../../common/types");
const entrant_status_enum_1 = require("./entrant-status.enum");
const mongoose_1 = require("mongoose");
let Entrant = Entrant_1 = class Entrant extends basemodel_model_1.BaseModel {
    static get model() {
        return new Entrant_1().getModelForClass(Entrant_1, { schemaOptions: basemodel_model_1.schemaOptions });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(props) {
        return new this.model(props);
    }
};
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Object)
], Entrant.prototype, "user", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Object)
], Entrant.prototype, "event", void 0);
__decorate([
    typegoose_1.prop({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Entrant.prototype, "approved", void 0);
__decorate([
    typegoose_1.prop({ required: true, enum: entrant_status_enum_1.EntrantStatus, default: entrant_status_enum_1.EntrantStatus.PreRace }),
    __metadata("design:type", String)
], Entrant.prototype, "status", void 0);
__decorate([
    typegoose_1.mapProp({ of: types_1.RecordedPoint }),
    __metadata("design:type", Map)
], Entrant.prototype, "points", void 0);
Entrant = Entrant_1 = __decorate([
    typegoose_1.pre('save', function (next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof this.user === 'string') {
                this.user = mongoose_1.Types.ObjectId(this.user);
            }
            if (typeof this.event === 'string') {
                this.event = mongoose_1.Types.ObjectId(this.event);
            }
            next();
        });
    }),
    typegoose_1.index({ user: 1, event: 1 }, { unique: true })
], Entrant);
exports.Entrant = Entrant;
//# sourceMappingURL=entrant.model.js.map