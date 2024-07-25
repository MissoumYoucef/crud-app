// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  async findOne(id: number): Promise<Item> {
    return this.itemsRepository.findOneBy({ id });
  }

  async create(item: Item): Promise<void> {
    await this.itemsRepository.save(item);
  }

  async update(id: number, updatedItem: Item): Promise<void> {
    await this.itemsRepository.update(id, updatedItem);
  }

  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
