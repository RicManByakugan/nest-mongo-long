import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserSettings {
  @Prop({
    required: false,
    default: false,
  })
  darkMode?: boolean;
  @Prop({
    required: false,
    default: false,
  })
  notifications?: boolean;
  @Prop({
    required: false,
    default: false,
  })
  compactMode?: boolean;
}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSettings);
