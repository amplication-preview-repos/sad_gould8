import { Module } from "@nestjs/common";
import { EntryModuleBase } from "./base/entry.module.base";
import { EntryService } from "./entry.service";
import { EntryController } from "./entry.controller";
import { EntryResolver } from "./entry.resolver";

@Module({
  imports: [EntryModuleBase],
  controllers: [EntryController],
  providers: [EntryService, EntryResolver],
  exports: [EntryService],
})
export class EntryModule {}
