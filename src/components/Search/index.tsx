/* eslint-disable jsx-a11y/no-autofocus */
import { InstantSearch, Hits, SearchBox, Stats } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch'
import { Hit } from './Hit'
import { SearchWrapper } from './styled'
const algolia = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
}

import { Posts } from '@/components/Posts'

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

export function Search() {
  return (
    <SearchWrapper>
      <InstantSearch
        autoFocus
        indexName={algolia.indexName}
        searchClient={searchClient}
      >
        <SearchBox translations={{ placeholder: 'Searh here...' }} />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />
        <Posts>
          <Hits hitComponent={Hit} />
        </Posts>
      </InstantSearch>
    </SearchWrapper>
  )
}
