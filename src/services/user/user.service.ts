import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async getByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User | null> {
    return this.userRepository.findOneBy({
      email: email,
      password: password,
    });
  }

  create(): User {
    return this.userRepository.create();
  }

  async update(entity: User): Promise<User> {
    return this.userRepository.save(entity);
  }

  async remove(entity: User): Promise<User> {
    return this.userRepository.softRemove(entity);
  }
}
