import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSettings } from './user.settings.schema';

@Schema()
export class User {
  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    isEmail: true,
  })
  email: string;

  @Prop({
    required: true,
    minlength: 8,
  })
  password: string;

  @Prop({
    required: true,
    min: 18,
    max: 99,
  })
  age: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserSettings',
  })
  settings?: UserSettings;
}

export const UserSchema = SchemaFactory.createForClass(User);
