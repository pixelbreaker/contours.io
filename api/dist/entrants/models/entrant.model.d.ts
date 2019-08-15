import { BaseModel } from '../../common/models/basemodel.model';
import { Ref, ModelType, InstanceType } from 'typegoose';
import { User } from '../../users/models/user.model';
import { RecordedPoint } from '../../common/types';
import { EntrantStatus } from './entrant-status.enum';
import { EventModel } from '../../events/models/event.model';
export declare class Entrant extends BaseModel<Entrant> {
    user: Ref<User>;
    event: Ref<EventModel>;
    approved: boolean;
    status: EntrantStatus;
    points?: Map<any, RecordedPoint>;
    static readonly model: ModelType<Entrant>;
    static readonly modelName: string;
    static createModel(props: Entrant): InstanceType<Entrant>;
}
