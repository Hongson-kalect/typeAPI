import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';

@Controller('reports')
export class ReportController {
  constructor(private readonly userService: ReportService) {}

  @Post()
  async createReport(@Body() createReportDto: CreateReportDto) {
    return this.userService.createReport(createReportDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
