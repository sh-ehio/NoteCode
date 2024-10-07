import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SnippetsService } from './snippets/snippets.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly snippetsService: SnippetsService,
  ) {}

  @Get(':id')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create')
  async createSnippet(): Promise<{ id: number; content: string }> {
    return this.snippetsService.createSnippet('Hello world!');
  }
}
