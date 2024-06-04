import { Module } from "@nestjs/common";
import { InternalMessageModuleBase } from "./base/internalMessage.module.base";
import { InternalMessageService } from "./internalMessage.service";
import { InternalMessageController } from "./internalMessage.controller";
import { InternalMessageResolver } from "./internalMessage.resolver";

@Module({
  imports: [InternalMessageModuleBase],
  controllers: [InternalMessageController],
  providers: [InternalMessageService, InternalMessageResolver],
  exports: [InternalMessageService],
})
export class InternalMessageModule {}
