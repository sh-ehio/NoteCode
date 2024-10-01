import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Snippets, Prisma } from '@prisma/client';

@Injectable()
export class SnippetsService {
  constructor(private prisma: PrismaService) {}

  async snippet(
    snippetsWhereUniqueInput: Prisma.SnippetsWhereUniqueInput,
  ): Promise<Snippets | null> {
    return this.prisma.snippets.findUnique({
      where: snippetsWhereUniqueInput,
    });
  }
}
