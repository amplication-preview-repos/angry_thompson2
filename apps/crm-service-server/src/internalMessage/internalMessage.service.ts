import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InternalMessageServiceBase } from "./base/internalMessage.service.base";

@Injectable()
export class InternalMessageService extends InternalMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
