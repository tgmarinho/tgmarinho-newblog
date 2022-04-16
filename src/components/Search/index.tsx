import {
  InstantSearch,
  Configure,
  InfiniteHits,
  SearchBox,
  Stats,
} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch'
import { Hit } from './Hit'
import { SearchWrapper } from './styled'
const algolia = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
}

import { Posts } from '@/components/Posts'
import React from 'react'

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

export function Search() {
  // force focus on search input
  React.useEffect(() => {
    const searchInput = document.querySelector('.ais-SearchBox-input')

    if (searchInput) {
      searchInput.autoFocus = true
      searchInput.focus()
      setTimeout(() => {
        searchInput.focus()
      }, 500)
    }
  }, [])

  return (
    <SearchWrapper>
      <InstantSearch indexName={algolia.indexName} searchClient={searchClient}>
        <Configure hitsPerPage={100} />
        <SearchBox
          aria-label="Search here"
          translations={{ placeholder: 'Search here...' }}
        />

        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `🚀 ${nbHits} results in ${timeSpentMs}ms`
            },
          }}
        />

        <Posts>
          <InfiniteHits
            translations={{
              loadPrevious: 'Load previous',
              loadMore: 'Load more',
            }}
            hitComponent={Hit}
          />
        </Posts>
      </InstantSearch>
    </SearchWrapper>
  )
}
