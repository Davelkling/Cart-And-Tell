"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantModule = void 0;
const common_1 = require("@nestjs/common");
const merchant_service_1 = require("./merchant.service");
const merchant_controller_1 = require("./merchant.controller");
const prisma_module_1 = require("../db/prisma/prisma.module");
const supabase_module_1 = require("../microservices/supabase/supabase.module");
const merchant_products_module_1 = require("./merchant-products/merchant-products.module");
const jwt_service_1 = require("../authentication/jwt/jwt.service");
const livestream_module_1 = require("./livestream/livestream.module");
const nest_mailer_service_1 = require("../nest-mailer/nest-mailer.service");
let MerchantModule = class MerchantModule {
};
exports.MerchantModule = MerchantModule;
exports.MerchantModule = MerchantModule = __decorate([
    (0, common_1.Module)({
        controllers: [merchant_controller_1.MerchantController],
        providers: [merchant_service_1.MerchantService, jwt_service_1.JwtService, nest_mailer_service_1.NestMailerService],
        imports: [prisma_module_1.PrismaModule, supabase_module_1.SupabaseModule, merchant_products_module_1.MerchantProductsModule, livestream_module_1.LivestreamModule]
    })
], MerchantModule);
//# sourceMappingURL=merchant.module.js.map