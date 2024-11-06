import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubItemService } from './sub-item.service';
import { CreateSubItemDto } from './dto/create-sub-item.dto';
import { UpdateSubItemDto } from './dto/update-sub-item.dto';

@Controller('sub-item')
export class SubItemController {
  constructor(private readonly subItemService: SubItemService) {}

  @Post()
  create(@Body() createSubItemDto: CreateSubItemDto) {
    return this.subItemService.create(createSubItemDto);
  }

  @Get()
  findAll() {
    return this.subItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubItemDto: UpdateSubItemDto) {
    return this.subItemService.update(+id, updateSubItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subItemService.remove(+id);
  }
}
