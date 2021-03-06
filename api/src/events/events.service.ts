import { BaseService } from '../common/base.service'
import { Entrant } from '../entrants/models/entrant.model'
import { EventModel } from './models/event.model'
import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ModelType } from 'typegoose'
import { User } from '../users/models/user.model'

@Injectable()
export class EventsService extends BaseService<EventModel> {
  constructor(
    @InjectModel(EventModel.modelName)
    private readonly _eventModel: ModelType<EventModel>
  ) {
    super()
    this._model = this._eventModel
  }

  async findOne(filter = {}, selectFields = ''): Promise<EventModel> {
    let result
    try {
      result = await this._model
        .findOne(filter)
        .populate('organiser', 'username firstname lastname')
        .populate({
          path: 'entrants',
          populate: {
            path: 'user',
            model: User,
            select: 'username firstname lastname',
          },
        })
        .select(selectFields.trim())
        .exec()
    } catch (e) {
      throw new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
    if (!result) {
      throw new HttpException('No results', HttpStatus.NO_CONTENT)
    } else {
      return result
    }
  }

  async addEntrant(id: string, entrant: Entrant): Promise<EventModel> {
    await this._model.findOneAndUpdate(
      { _id: id },
      { $push: { entrants: entrant._id } }
    )
    return await this._model
      .findOne({ _id: id })
      .populate('organiser', 'username firstname lastname')
      .populate({
        path: 'entrants',
        populate: {
          path: 'user',
          model: User,
          select: 'username firstname lastname',
        },
      })
  }
}
