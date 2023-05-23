import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Roles } from 'src/auth/guards/roles/roles.decorator';
import { Base } from 'src/schemas/base.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User extends Base{
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false})
  password: string;

  @Prop({ enum: Roles, default: 'user',})
  role: string

}

export const UserSchema = SchemaFactory.createForClass(User);