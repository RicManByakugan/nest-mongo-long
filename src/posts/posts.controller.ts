import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ValidObjectId } from 'src/decorators/valid.objectid.decorator';
import { CreatePostDto } from './dto/create.post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async findAll() {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@ValidObjectId() id: string) {
    return await this.postsService.findOne(id);
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return await this.postsService.create(createPostDto);
  }
}
