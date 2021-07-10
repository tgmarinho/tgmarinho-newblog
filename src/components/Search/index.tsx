/* eslint-disable jsx-a11y/no-autofocus */
import { useState } from 'react'
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
  // maybe change some color when hasFocos
  const [setHasFocus] = useState(false)
  const [search, setSearch] = useState(null)

  console.log(search)

  return (
    <SearchWrapper>
      <InstantSearch
        autoFocus
        indexName={algolia.indexName}
        searchClient={searchClient}
      >
        <SearchBox
          aria-label="Search here"
          onFocus={() => {
            setHasFocus(true)
          }}
          onBlur={() => {
            setHasFocus(false)
          }}
          onChange={(e) => setSearch(e.target.value)}
          translations={{ placeholder: 'Search here...' }}
        />
        {!!search && (
          <Stats
            translations={{
              stats(nbHits, timeSpentMs) {
                return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
              },
            }}
          />
        )}
        <Posts>{!!search && <Hits hitComponent={Hit} />}</Posts>
      </InstantSearch>
    </SearchWrapper>
  )
}
