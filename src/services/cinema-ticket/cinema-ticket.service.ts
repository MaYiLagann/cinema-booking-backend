import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CinemaTicket } from '../../entities/cinema-ticket.entity';
import { EntityManager } from 'typeorm/entity-manager/EntityManager';

@Injectable()
export class CinemaTicketService {
  constructor(
    @InjectRepository(CinemaTicket)
    private cinemaTicketRepository: Repository<CinemaTicket>,
    private dataSource: DataSource,
  ) {}

  async getAll(): Promise<CinemaTicket[]> {
    return this.cinemaTicketRepository.find();
  }

  async transaction<T = void>(
    runInTransaction: (entityManager: EntityManager) => Promise<T>,
  ): Promise<T> {
    return this.dataSource.transaction('READ COMMITTED', runInTransaction);
  }
}
