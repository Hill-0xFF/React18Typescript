type TypeUsers = {
  id: string,
  name: string,
  email: string,
  address: object,
  phone: string,
  website: string,
  company: object
}

type TypePosts = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

type TypeComments = {
  postId: number,
  name: string,
  email: string,
  body: string
}

export const TypeUsers = () => {
  return (
    TypeUsers
  )
}

export const TypePosts = () => {
  return (
    TypePosts
  )
}

export const TypeComments = () => {
  return (
    TypeComments
  )
}
