import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Post {
  @Prop({
    required: true,
    type: String,
  })
  title: string;

  @Prop({
    required: true,
    type: String,
  })
  content: string;

//   @Prop({
//     required: true,
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//   })
//   userId: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
