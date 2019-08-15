"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_model_1 = require("./models/event.model");
const events_controller_1 = require("./events.controller");
const events_service_1 = require("./events.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const roles_guard_1 = require("../common/guards/roles.guard");
const entrants_module_1 = require("../entrants/entrants.module");
let EventsModule = class EventsModule {
};
EventsModule = __decorate([
    common_1.Module({
        imports: [
            entrants_module_1.EntrantsModule,
            mongoose_1.MongooseModule.forFeature([
                { name: event_model_1.EventModel.modelName, schema: event_model_1.EventModel.model.schema },
            ]),
        ],
        controllers: [events_controller_1.EventsController],
        providers: [events_service_1.EventsService, roles_guard_1.RolesGuard],
        exports: [events_service_1.EventsService],
    })
], EventsModule);
exports.EventsModule = EventsModule;
//# sourceMappingURL=events.module.js.map