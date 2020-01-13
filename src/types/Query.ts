import { idArg, queryType, stringArg } from 'nexus'
import { getUserId } from '../utils'

export const Query = queryType({
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        return ctx.photon.users.findOne({
          where: {
            id: userId,
          },
        })
      },
    })

    t.list.field('feed', {
      type: 'Pet',
      resolve: (parent, args, ctx) => {
        return ctx.photon.pets.findMany({
          where: { published: true },
        })
      },
    })

    t.list.field('filterPets', {
      type: 'Pet',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.photon.pets.findMany({
          where: {
            OR: [
              {
                name: {
                  contains: searchString,
                },
              },
              {
                breed: {
                  contains: searchString,
                },
              },
            ],
          },
        })
      },
    })

    t.field('pet', {
      type: 'Pet',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.photon.pets.findOne({
          where: {
            id,
          },
        })
      },
    })
  },
})
