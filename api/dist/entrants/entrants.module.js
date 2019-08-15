"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrant_model_1 = require("./models/entrant.model");
const entrants_service_1 = require("./entrants.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let EntrantsModule = class EntrantsModule {
};
EntrantsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: entrant_model_1.Entrant.modelName, schema: entrant_model_1.Entrant.model.schema },
            ]),
        ],
        controllers: [],
        providers: [entrants_service_1.EntrantsService],
        exports: [entrants_service_1.EntrantsService],
    })
], EntrantsModule);
exports.EntrantsModule = EntrantsModule;
//# sourceMappingURL=entrants.module.js.map