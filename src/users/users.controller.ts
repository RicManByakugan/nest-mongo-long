import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user.dto';
import { ValidObjectId } from './decorators/valid.objectid.decorator';
import { UpdateUserDto } from './dto/update.user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Get('findall')
  async getAllUsers() {
    return this.usersService.find();
  }

  @Get('findone/:id')
  async getUserById(@ValidObjectId() id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new HttpException('User not found', 404);
    return user;
  }

  @Patch('update/:id')
  async updateUser(@ValidObjectId() id: string, @Body() user: UpdateUserDto) {
    const updatedUser = await this.usersService.updateUser(id, user);
    if (!updatedUser) throw new HttpException('User not found', 404);
    return updatedUser;
  }

  @Put('update/:id')
  async replaceUser(@ValidObjectId() id: string, @Body() user: CreateUserDto) {
    const updatedUser = await this.usersService.updateUser(id, user);
    if (!updatedUser) throw new HttpException('User not found', 404);
    return updatedUser;
  }

  @Delete('delete/:id')
  async deleteUser(@ValidObjectId() id: string) {
    const deletedUser = await this.usersService.deleteUser(id);
    if (!deletedUser) throw new HttpException('User not found', 404);
    return deletedUser;
  }
}
