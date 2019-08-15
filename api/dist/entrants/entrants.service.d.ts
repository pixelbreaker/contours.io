import { BaseService } from '../common/base.service';
import { Entrant } from './models/entrant.model';
import { ModelType } from 'typegoose';
export declare class EntrantsService extends BaseService<Entrant> {
    private readonly _entrantModel;
    constructor(_entrantModel: ModelType<Entrant>);
}
