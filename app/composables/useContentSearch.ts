import type { ListPageContent } from '@/types'

export const useContentSearch = () => {
  const perPage = 2

  const fetchAllContents = async (
    searchTarget: string
  ): Promise<ListPageContent[]> => {
    const articles = await queryCollection('content')
      .where('path', 'LIKE', `${searchTarget}/%`)
      .select('title', 'date', 'path')
      .all()
    return articles
  }

  const getPageContents = (
    articles: ListPageContent[],
    page: number
  ): [ListPageContent[], boolean] => {
    const offset = (page - 1) * perPage
    const slicedArticles = articles.slice(offset, offset + perPage)
    const hasNext = articles.length > offset + perPage
    return [slicedArticles, hasNext]
  }

  return {
    fetchAllContents,
    getPageContents
  }
}
