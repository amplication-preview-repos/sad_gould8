import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntryServiceBase } from "./base/entry.service.base";

@Injectable()
export class EntryService extends EntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
