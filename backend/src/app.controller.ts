import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SnippetsService } from './snippets/snippets.service';
import { CreateSnippetDTO } from './Snippets/dto/create-snippet.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly snippetsService: SnippetsService,
  ) {}

  @Get(':id')
  getSnippet(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ id: number; content: string }> {
    return this.snippetsService.snippet(id);
  }

  @Post('create')
  async createSnippet(
    @Body() body: CreateSnippetDTO,
  ): Promise<{ id: number; content: string }> {
    return this.snippetsService.createSnippet(body);
  }
}
