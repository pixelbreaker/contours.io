import { Typegoose, ModelType, InstanceType } from 'typegoose';
export declare abstract class BaseService<T extends Typegoose> {
    protected _model: ModelType<T>;
    findAll(filter?: {}, selectFields?: string): Promise<Array<InstanceType<T>>>;
    findOne(filter?: {}, selectFields?: string): Promise<InstanceType<T>>;
    findById(id: string): Promise<InstanceType<T>>;
    create(item: InstanceType<T>, selectFields?: string): Promise<InstanceType<T>>;
    update(id: string, item: InstanceType<T>, newModel?: boolean): Promise<InstanceType<T>>;
    delete(id: string): Promise<InstanceType<T>>;
    clearAll(filter?: {}): Promise<void>;
    private toObjectId;
}
