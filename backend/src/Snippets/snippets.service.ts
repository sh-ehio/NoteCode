import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Snippets } from '@prisma/client';
import { CreateSnippetDTO } from './dto/create-snippet.dto';

@Injectable()
export class SnippetsService {
  constructor(private prisma: PrismaService) {}

  async snippet(id: number): Promise<Snippets | null> {
    return this.prisma.snippets.findUnique({
      where: { id },
    });
  }

  async createSnippet(value: CreateSnippetDTO) {
    const snippet = await this.prisma.snippets.create({
      data: {
        content: value.content,
      },
    });

    return snippet;
  }
}
