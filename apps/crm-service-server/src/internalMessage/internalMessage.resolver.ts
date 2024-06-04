import * as graphql from "@nestjs/graphql";
import { InternalMessageResolverBase } from "./base/internalMessage.resolver.base";
import { InternalMessage } from "./base/InternalMessage";
import { InternalMessageService } from "./internalMessage.service";

@graphql.Resolver(() => InternalMessage)
export class InternalMessageResolver extends InternalMessageResolverBase {
  constructor(protected readonly service: InternalMessageService) {
    super(service);
  }
}
