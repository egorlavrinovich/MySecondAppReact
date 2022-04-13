import { useMemo } from 'react'

export const useSortedPosts = (posts,sort) =>{
    const SortedPosts = useMemo(()=>{
        if (sort){
          return [...posts].sort((a,b)=>(a[sort]).localeCompare(b[sort]))
        }
        return posts
      },[sort,posts])
      return SortedPosts
} 

export const UsePosts = (posts,sort,query)=>{
    const SearchSymbol = useSortedPosts(posts,sort)

    const sortedAndSearchedPosts = useMemo(()=>{
    return SearchSymbol.filter(item=>item.title.toLowerCase().includes(query.toLowerCase()))
    },[query,SearchSymbol])
    return sortedAndSearchedPosts
}