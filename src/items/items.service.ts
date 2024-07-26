import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async findOne(id: number): Promise<Item> {
    return this.itemRepository.findOne({ where: { id } });
  }

  async create(createItemDto: CreateItemDto): Promise<void> {
    const item = this.itemRepository.create(createItemDto);
    await this.itemRepository.save(item);
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<void> {
    await this.itemRepository.update(id, updateItemDto);
  }

  async remove(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }
}
