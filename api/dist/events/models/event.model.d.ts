import { BaseModel } from '../../common/models/basemodel.model';
import { Entrant } from '../../entrants/models/entrant.model';
import { EventType } from './event-type.enum';
import { InstanceType, ModelType, Ref } from 'typegoose';
import { LatLon } from '../../common/types';
import { User } from '../../users/models/user.model';
export declare class EventModel extends BaseModel<EventModel> {
    organiser: Ref<User>;
    title: string;
    slug: string;
    type: EventType;
    startLocation: LatLon;
    entrants: Array<Ref<Entrant>>;
    static readonly model: ModelType<EventModel>;
    static readonly modelName: string;
    static createModel(props: EventModel): InstanceType<EventModel>;
}
