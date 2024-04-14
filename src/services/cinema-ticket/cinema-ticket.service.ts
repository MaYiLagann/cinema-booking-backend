import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CinemaTicket } from '../../entities/cinema-ticket.entity';

@Injectable()
export class CinemaTicketService {
  constructor(
    @InjectRepository(CinemaTicket)
    private cinemaTicketRepository: Repository<CinemaTicket>,
  ) {}
}
