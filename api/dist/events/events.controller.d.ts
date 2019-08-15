import { Entrant } from '../entrants/models/entrant.model';
import { EntrantsService } from '../entrants/entrants.service';
import { EventModel } from './models/event.model';
import { EventsService } from './events.service';
export declare class EventsController {
    private readonly _eventsService;
    private readonly _entrantsService;
    constructor(_eventsService: EventsService, _entrantsService: EntrantsService);
    create(event: EventModel): Promise<EventModel>;
    addEntrant(id: string, entrant: Entrant): Promise<EventModel>;
    get(id: string): Promise<EventModel>;
}
