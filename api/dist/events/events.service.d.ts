import { BaseService } from '../common/base.service';
import { Entrant } from '../entrants/models/entrant.model';
import { EventModel } from './models/event.model';
import { ModelType } from 'typegoose';
export declare class EventsService extends BaseService<EventModel> {
    private readonly _eventModel;
    constructor(_eventModel: ModelType<EventModel>);
    findOne(filter?: {}, selectFields?: string): Promise<EventModel>;
    addEntrant(id: string, entrant: Entrant): Promise<EventModel>;
}
