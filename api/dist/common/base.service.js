"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class BaseService {
    findAll(filter = {}, selectFields = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model
                .find(filter)
                .select(selectFields.trim())
                .exec();
        });
    }
    findOne(filter = {}, selectFields = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model
                .findOne(filter)
                .select(selectFields.trim())
                .exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findById(this.toObjectId(id)).exec();
        });
    }
    create(item, selectFields = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const newItem = yield this._model.create(item);
            return this._model.findOne({ _id: newItem._id }).select(selectFields);
        });
    }
    update(id, item, newModel = true) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model
                .findByIdAndUpdate(this.toObjectId(id), item, { new: newModel })
                .exec();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findByIdAndRemove(this.toObjectId(id)).exec();
        });
    }
    clearAll(filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.deleteMany(filter).exec();
        });
    }
    toObjectId(id) {
        return mongoose_1.Types.ObjectId(id);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map