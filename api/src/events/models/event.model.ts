import { BaseModel, schemaOptions } from '../../common/models/basemodel.model'
import { Entrant } from '../../entrants/models/entrant.model'
import { EventType } from './event-type.enum'
import {
  InstanceType,
  prop,
  pre,
  ModelType,
  Ref,
  arrayProp,
  post,
} from 'typegoose'
import { LatLon } from '../../common/types'
import { Length } from 'class-validator'
import { Types } from 'mongoose'
import { User } from '../../users/models/user.model'
import { netlifyBuild } from '../../utils/netlify'

@pre<EventModel>('save', function(next) {
  if (typeof this.organiser === 'string') {
    this.organiser = Types.ObjectId(this.organiser)
  }

  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/["']/g, '')
      .replace(/[\s_@~]/g, '-')
  }

  /*
    TODO add get/set for featured once Typegoose 6.0.0 is released
    so that we can tigger a rebuild on Netlify via webhooks
  */

  if (this.featured === true) {
    netlifyBuild()
  }

  next()
})
@pre('findOneAndUpdate', function() {
  if (this._update.featured !== undefined) {
    netlifyBuild()
  }
})
export class EventModel extends BaseModel<EventModel> {
  @prop({ required: true, ref: User })
  organiser: Ref<User>

  @prop({ required: true })
  @Length(8, 200)
  title: string

  @prop({ unique: true })
  slug: string

  @prop({ required: true, enum: EventType, default: EventType.UltraBike })
  type: EventType

  @prop({ required: true })
  startsAt: Date

  @prop({ required: true })
  startLocation: LatLon

  @prop({ default: false, select: true })
  featured: boolean

  @arrayProp({ itemsRef: Entrant })
  entrants: Array<Ref<Entrant>>

  static get model(): ModelType<EventModel> {
    return new EventModel().getModelForClass(EventModel, { schemaOptions })
  }

  static get modelName(): string {
    return this.model.modelName
  }

  static createModel(props: EventModel): InstanceType<EventModel> {
    return new this.model(props)
  }
}
