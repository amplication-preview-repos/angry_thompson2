/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  InternalMessage as PrismaInternalMessage,
} from "@prisma/client";

export class InternalMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InternalMessageCountArgs, "select">
  ): Promise<number> {
    return this.prisma.internalMessage.count(args);
  }

  async internalMessages<T extends Prisma.InternalMessageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InternalMessageFindManyArgs>
  ): Promise<PrismaInternalMessage[]> {
    return this.prisma.internalMessage.findMany<Prisma.InternalMessageFindManyArgs>(
      args
    );
  }
  async internalMessage<T extends Prisma.InternalMessageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InternalMessageFindUniqueArgs>
  ): Promise<PrismaInternalMessage | null> {
    return this.prisma.internalMessage.findUnique(args);
  }
  async createInternalMessage<T extends Prisma.InternalMessageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InternalMessageCreateArgs>
  ): Promise<PrismaInternalMessage> {
    return this.prisma.internalMessage.create<T>(args);
  }
  async updateInternalMessage<T extends Prisma.InternalMessageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InternalMessageUpdateArgs>
  ): Promise<PrismaInternalMessage> {
    return this.prisma.internalMessage.update<T>(args);
  }
  async deleteInternalMessage<T extends Prisma.InternalMessageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InternalMessageDeleteArgs>
  ): Promise<PrismaInternalMessage> {
    return this.prisma.internalMessage.delete(args);
  }
}