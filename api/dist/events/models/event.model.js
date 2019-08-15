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
var EventModel_1;
const basemodel_model_1 = require("../../common/models/basemodel.model");
const entrant_model_1 = require("../../entrants/models/entrant.model");
const event_type_enum_1 = require("./event-type.enum");
const typegoose_1 = require("typegoose");
const types_1 = require("../../common/types");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const user_model_1 = require("../../users/models/user.model");
let EventModel = EventModel_1 = class EventModel extends basemodel_model_1.BaseModel {
    static get model() {
        return new EventModel_1().getModelForClass(EventModel_1, { schemaOptions: basemodel_model_1.schemaOptions });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(props) {
        return new this.model(props);
    }
};
__decorate([
    typegoose_1.prop({ required: true, ref: user_model_1.User }),
    __metadata("design:type", Object)
], EventModel.prototype, "organiser", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    class_validator_1.Length(8, 200),
    __metadata("design:type", String)
], EventModel.prototype, "title", void 0);
__decorate([
    typegoose_1.prop({ select: false, unique: true }),
    __metadata("design:type", String)
], EventModel.prototype, "slug", void 0);
__decorate([
    typegoose_1.prop({ required: true, enum: event_type_enum_1.EventType, default: event_type_enum_1.EventType.UltraBike }),
    __metadata("design:type", String)
], EventModel.prototype, "type", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", types_1.LatLon)
], EventModel.prototype, "startLocation", void 0);
__decorate([
    typegoose_1.arrayProp({ itemsRef: entrant_model_1.Entrant }),
    __metadata("design:type", Array)
], EventModel.prototype, "entrants", void 0);
EventModel = EventModel_1 = __decorate([
    typegoose_1.pre('save', function (next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof this.organiser === 'string') {
                this.organiser = mongoose_1.Types.ObjectId(this.organiser);
            }
            if (!this.slug) {
                this.slug = this.title
                    .toLowerCase()
                    .replace(/["']/g, '')
                    .replace(/[\s_@~]/g, '-');
            }
            next();
        });
    })
], EventModel);
exports.EventModel = EventModel;
//# sourceMappingURL=event.model.js.map