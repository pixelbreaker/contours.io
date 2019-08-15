import { Typegoose } from 'typegoose';
export declare class BaseModel<T> extends Typegoose {
    _id?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const schemaOptions: object;
