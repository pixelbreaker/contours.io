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
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const bad_request_1 = require("../common/filters/bad-request");
const entrant_model_1 = require("../entrants/models/entrant.model");
const entrants_service_1 = require("../entrants/entrants.service");
const event_model_1 = require("./models/event.model");
const eventorganiser_decorator_1 = require("../common/guards/eventorganiser.decorator");
const eventorganiser_guard_1 = require("../common/guards/eventorganiser.guard");
const events_service_1 = require("./events.service");
const mongo_1 = require("../common/filters/mongo");
const roles_decorator_1 = require("../common/guards/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
const user_role_enum_1 = require("../users/models/user-role.enum");
let EventsController = class EventsController {
    constructor(_eventsService, _entrantsService) {
        this._eventsService = _eventsService;
        this._entrantsService = _entrantsService;
    }
    create(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEvent = yield this._eventsService.create(event);
            return this._eventsService.findOne({ _id: newEvent._id });
        });
    }
    addEntrant(id, entrant) {
        return __awaiter(this, void 0, void 0, function* () {
            entrant.event = id;
            const newEntrant = yield this._entrantsService.create(entrant);
            return yield this._eventsService.addEntrant(id, newEntrant);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._eventsService.findOne({ _id: id });
        });
    }
};
__decorate([
    common_1.Post(),
    common_1.UseFilters(bad_request_1.BadRequestFilter, mongo_1.MongoFilter),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), roles_guard_1.RolesGuard),
    roles_decorator_1.Roles(user_role_enum_1.UserRole.Admin),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [event_model_1.EventModel]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "create", null);
__decorate([
    common_1.Put(':id/entrant'),
    common_1.UseFilters(bad_request_1.BadRequestFilter, mongo_1.MongoFilter),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), roles_guard_1.RolesGuard, eventorganiser_guard_1.EventOrganiserGuard),
    eventorganiser_decorator_1.EventOrganiser(user_role_enum_1.UserRole.Admin),
    roles_decorator_1.Roles(user_role_enum_1.UserRole.Admin, user_role_enum_1.UserRole.Organiser),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entrant_model_1.Entrant]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "addEntrant", null);
__decorate([
    common_1.Get(':id'),
    common_1.UseFilters(bad_request_1.BadRequestFilter, mongo_1.MongoFilter),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "get", null);
EventsController = __decorate([
    common_1.Controller('events'),
    __metadata("design:paramtypes", [events_service_1.EventsService,
        entrants_service_1.EntrantsService])
], EventsController);
exports.EventsController = EventsController;
//# sourceMappingURL=events.controller.js.map