import { objectType } from 'nexus'

export const Pet = objectType({
  name: 'Pet',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.published()
    t.model.name()
    t.model.age()
    t.model.color()
    t.model.breed()
    t.model.owner()
  },
})