"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let MongoFilter = class MongoFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        if (exception.code === 11000) {
            const field = exception.errmsg.split('index: ')[1].split(/_\d/)[0];
            response
                .status(422)
                .json({ message: `Item already exists with that ${field}.` });
        }
        else {
            response.status(500).json({ message: 'Internal error.' });
        }
    }
};
MongoFilter = __decorate([
    common_1.Catch(mongodb_1.MongoError)
], MongoFilter);
exports.MongoFilter = MongoFilter;
//# sourceMappingURL=mongo.js.map