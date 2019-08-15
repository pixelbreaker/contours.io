import { EventsService } from '../../events/events.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class EventOrganiserGuard implements CanActivate {
    private readonly reflector;
    private readonly _eventsService;
    constructor(reflector: Reflector, _eventsService: EventsService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
