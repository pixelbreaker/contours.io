import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { BadRequestFilter } from '../common/filters/bad-request'
import { Entrant } from '../entrants/models/entrant.model'
import { EntrantsService } from '../entrants/entrants.service'
import { EventModel } from './models/event.model'
import { EventOrganiser } from '../common/guards/eventorganiser.decorator'
import { EventOrganiserGuard } from '../common/guards/eventorganiser.guard'
import { EventsService } from './events.service'
import { MongoFilter } from '../common/filters/mongo'
import { Roles } from '../common/guards/roles.decorator'
import { RolesGuard } from '../common/guards/roles.guard'
import { UserRole } from '../users/models/user-role.enum'
import { Types } from 'mongoose'

@Controller('events')
export class EventsController {
  constructor(
    private readonly _eventsService: EventsService,
    private readonly _entrantsService: EntrantsService
  ) {}

  @Post()
  @UseFilters(BadRequestFilter, MongoFilter)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.Admin)
  async create(@Body() event: EventModel): Promise<EventModel> {
    const newEvent = await this._eventsService.create(event)
    return this._eventsService.findOne({ _id: newEvent._id })
  }

  @Put(':id/entrant')
  @UseFilters(BadRequestFilter, MongoFilter)
  @UseGuards(AuthGuard('jwt'), RolesGuard, EventOrganiserGuard)
  @EventOrganiser(UserRole.Admin) // Only Admin and the event owner can edit this event
  @Roles(UserRole.Admin, UserRole.Organiser)
  async addEntrant(
    @Param('id') id: string,
    @Body() entrant: Entrant
  ): Promise<EventModel> {
    entrant.event = id
    const newEntrant = await this._entrantsService.create(entrant)
    return await this._eventsService.addEntrant(id, newEntrant)
  }

  @Get(':idOrSlug')
  @UseFilters(BadRequestFilter, MongoFilter)
  async get(@Param('idOrSlug') idOrSlug: string): Promise<EventModel> {
    const q: any = Types.ObjectId.isValid(idOrSlug)
      ? { _id: Types.ObjectId(idOrSlug) }
      : { slug: idOrSlug }

    return this._eventsService.findOne(q)
  }
}
