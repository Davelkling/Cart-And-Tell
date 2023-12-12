import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './authentication/auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './db/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { MerchantModule } from './merchant/merchant.module';
import { PaymongoModule } from './microservices/paymongo/paymongo.module';
import { SupabaseService } from './microservices/supabase/supabase.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './db/prisma/prisma.module';
import { CartModule } from './user/cart/cart.module';
import { SupabaseModule } from './microservices/supabase/supabase.module';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { CategoryModule } from './category/category.module';
import { ShoesModule } from './shoes/shoes.module';
@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, PaymongoModule, MerchantModule, ProductsModule, PrismaModule, SupabaseModule, NodemailerModule, CategoryModule, ShoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
