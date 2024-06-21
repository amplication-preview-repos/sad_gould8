import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EntryService } from "./entry.service";
import { EntryControllerBase } from "./base/entry.controller.base";

@swagger.ApiTags("entries")
@common.Controller("entries")
export class EntryController extends EntryControllerBase {
  constructor(protected readonly service: EntryService) {
    super(service);
  }
}
