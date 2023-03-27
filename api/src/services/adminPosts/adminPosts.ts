import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { ForbiddenError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

const validateOwnership = async ({ id }) => {
  if (await adminPosts({ id })) {
    return true
  } else {
    throw new ForbiddenError("You don't have access to this post")
  }
}

export const adminPosts: QueryResolvers['posts'] = () => {
  return db.post.findMany({ where: { userId: context.currentUser.id } })
}

export const adminPost: QueryResolvers['post'] = ({ id }) => {
  return db.post.findFirst({
    where: { id, userId: context.currentUser.id },
  })
}

export const createPost: MutationResolvers['createPost'] = ({ input }) => {
  return db.post.create({
    data: { ...input, userId: context.currentUser.id },
  })
}

export const updatePost: MutationResolvers['updatePost'] = async ({
  id,
  input,
}) => {
  await validateOwnership({ id })

  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost: MutationResolvers['deletePost'] = async ({ id }) => {
  await validateOwnership({ id })

  return db.post.delete({
    where: { id },
  })
}

export const Post = {
  user: (_obj, { root }) =>
    db.post.findFirst({ where: { id: root.id } }).user(),
}
