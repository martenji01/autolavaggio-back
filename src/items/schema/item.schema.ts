import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { hasOwner } from '../../schemas/hasOwner.shema';
export type ItemDocument = HydratedDocument<Item>;

@Schema({timestamps: true})
export class Item extends hasOwner{
  @Prop({ required: true, unique: true })
  name: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);