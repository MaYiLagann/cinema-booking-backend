import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { CinemaTicketService } from './cinema-ticket/cinema-ticket.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { CinemaTicket } from '../entities/cinema-ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, CinemaTicket])],
  providers: [UserService, CinemaTicketService],
  exports: [UserService, CinemaTicketService],
})
export class ServiceModule {}
