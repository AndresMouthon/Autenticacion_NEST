import { Injectable } from '@nestjs/common';
import { CreateSubItemDto } from './dto/create-sub-item.dto';
import { UpdateSubItemDto } from './dto/update-sub-item.dto';

@Injectable()
export class SubItemService {
  create(createSubItemDto: CreateSubItemDto) {
    return 'This action adds a new subItem';
  }

  findAll() {
    return `This action returns all subItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subItem`;
  }

  update(id: number, updateSubItemDto: UpdateSubItemDto) {
    return `This action updates a #${id} subItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} subItem`;
  }
}
