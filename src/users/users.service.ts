import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto, CreateUserSettingsDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UserSettings } from 'src/schemas/user.settings.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(UserSettings.name)
    private userSettingsModel: Model<UserSettings>,
  ) {}

  // async createUser({
  //   settings,
  //   ...createUserDto
  // }: CreateUserDto): Promise<User> {
  //   if (settings) {
  //     const newSettings = new this.userSettingsModel(settings);
  //     const savedUserSettings = await newSettings.save();
  //     const newuser = new this.userModel({
  //       ...createUserDto,
  //       settings: savedUserSettings._id,
  //     });
  //     return newuser.save();
  //   }
  //   const user = new this.userModel(createUserDto);
  //   return user.save();
  // }

  async createUser({
    settings,
    ...createUserDto
  }: CreateUserDto): Promise<User> {
    if (settings) {
      const userSettings = await this.createUserSettings(settings);
      const newuser = new this.userModel({
        ...createUserDto,
        settings: userSettings,
      });
      return newuser.save();
    }
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async createUserSettings(
    createUserSettingsDto: CreateUserSettingsDto,
  ): Promise<Partial<UserSettings>> {
    const userSettings = new this.userSettingsModel(createUserSettingsDto);
    return userSettings.save();
  }
  async find(): Promise<User[]> {
    return this.userModel.find().populate(['settings']).exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async deleteUser(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id, { new: true });
  }
}
