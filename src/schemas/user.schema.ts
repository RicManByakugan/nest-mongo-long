import { Prop, Schema } from '@nestjs/mongoose';

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
}
