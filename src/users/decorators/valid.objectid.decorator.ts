import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
} from '@nestjs/common';
import mongoose from 'mongoose';

export const ValidObjectId = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const id = request.params.id;
    if (!id) throw new HttpException('ID is required', 400);
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    return id;
  },
);
