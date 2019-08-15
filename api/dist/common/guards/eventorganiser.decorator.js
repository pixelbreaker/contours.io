"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.EventOrganiser = (...roles) => common_1.SetMetadata('organiser', { organiser: true, roles });
//# sourceMappingURL=eventorganiser.decorator.js.map