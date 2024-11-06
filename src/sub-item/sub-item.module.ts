import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccionModule } from 'src/accion/accion.module';
import { SubItem } from './entities/sub-item.entity';
import { SubItemController } from './sub-item.controller';
import { SubItemService } from './sub-item.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubItem]), AccionModule],
  controllers: [SubItemController],
  providers: [SubItemService],
})
export class SubItemModule { }
