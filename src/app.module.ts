import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { EmpresasModule } from './empresas/empresas.module';
import { EmpleosModule } from './empleos/empleos.module';
import { FinanciacionModule } from './financiacion/financiacion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration]
    }),
    ServeStaticModule. forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    AuthModule,
    //MongooseModule.forRoot(process.env.MONGO_DB),
     MongooseModule.forRoot(process.env.MONGODB),
    EmpresasModule,
    EmpleosModule,
    FinanciacionModule,
        
  ],
  controllers: [],
  providers: [],

})
export class AppModule {
  
}
