import { Test, TestingModule } from '@nestjs/testing';
import { CinemaTicketService } from './cinema-ticket.service';

describe('CinemaTicketService', () => {
  let service: CinemaTicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CinemaTicketService],
    }).compile();

    service = module.get<CinemaTicketService>(CinemaTicketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
