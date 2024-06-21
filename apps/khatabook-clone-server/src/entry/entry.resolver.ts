import * as graphql from "@nestjs/graphql";
import { EntryResolverBase } from "./base/entry.resolver.base";
import { Entry } from "./base/Entry";
import { EntryService } from "./entry.service";

@graphql.Resolver(() => Entry)
export class EntryResolver extends EntryResolverBase {
  constructor(protected readonly service: EntryService) {
    super(service);
  }
}
