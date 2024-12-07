import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/post.schema';
import { CreatePostDto } from './dto/create.post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    return this.postModel.findById(id).exec();
  }

  async create(post: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(post);
    return newPost.save();
  }

  async update(id: string, post: Post): Promise<Post> {
    return this.postModel.findByIdAndUpdate(id, post, { new: true }).exec();
  }

  async remove(id: string): Promise<Post> {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
