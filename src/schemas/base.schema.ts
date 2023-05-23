import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../users/schema/user.schema';

export type BaseDocument = HydratedDocument<Base>;

@Schema()
export class Base {
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false, default: null })
  lastUpdatedBy: User;

  @Prop({ required: true, default: false })
  isActive: boolean
}

export const BaseSchema = SchemaFactory.createForClass(Base);