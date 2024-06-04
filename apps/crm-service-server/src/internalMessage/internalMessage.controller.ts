import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InternalMessageService } from "./internalMessage.service";
import { InternalMessageControllerBase } from "./base/internalMessage.controller.base";

@swagger.ApiTags("internalMessages")
@common.Controller("internalMessages")
export class InternalMessageController extends InternalMessageControllerBase {
  constructor(protected readonly service: InternalMessageService) {
    super(service);
  }
}
