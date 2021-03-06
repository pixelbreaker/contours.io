import { SetMetadata } from '@nestjs/common'

// roles argument allows overriding of owner, e.g by Admin users
export const EventOrganiser = (...roles: Array<string>) =>
  SetMetadata('organiser', { organiser: true, roles })
