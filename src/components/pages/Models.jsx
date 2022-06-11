import React, { Component } from 'react';
import { Link } from "react-router-dom";


import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  SortBy
} from 'react-instantsearch-hooks-web';
import { algoliaSearchCred } from '../../creds/algoliaSearchCred';
import "./theme.css";



const searchClient = algoliasearch(algoliaSearchCred.appId, algoliaSearchCred.apiKey);


export default function Models() {

  return (
      <div className="container relative flex flex-col lg:grid lg:space-y-0 w-full lg:grid-cols-10 md:flex-1 md:grid-rows-full md:gap-6">
        <InstantSearch indexName="models" searchClient={searchClient}>
          <section className="pt-8 border-gray-100 bg-white lg:static lg:px-0 lg:col-span-4 xl:col-span-3 lg:border-r lg:bg-gradient-to-l from-gray-50-to-white hidden lg:block ">
            {/* Refinements / Filters */}
            <div> 
              <div className="mb-4">
                <div className="flex items-baseline mb-3">
                  <h3 className='font-medium'>license</h3>
                  <ClearRefinements includedAttributes={['license']} className="p-0 text-gray-400 text-sm underline ml-4" /> 
                </div>
                <RefinementList attribute="license" />
              </div>
              <div className="mb-4">
                <div className="flex items-baseline mb-3">
                  <h3 className='font-medium'>progLang</h3>
                  <ClearRefinements includedAttributes={['progLang']} className="p-0 text-gray-400 text-sm underline ml-4" /> 
                </div>
                <RefinementList attribute="progLang" />
              </div>
              <div className="mb-4">
                <div className="flex items-baseline mb-3">
                  <h3 className='font-medium'>language</h3>
                  <ClearRefinements includedAttributes={['language']} className="p-0 text-gray-400 text-sm underline ml-4" /> 
                </div>
                <RefinementList attribute="language" />
              </div>
            </div>
            {/* End of Refinements / Filters */}
          </section>
          {/* Right hand side */}
          <section className="pt-8 border-gray-100 col-span-full lg:col-span-6 xl:col-span-7 pb-12">
            {/* Top Bar */}
            <div className="md:flex items-center align-top mb-4 lg:mb-6 space-y-3 md:space-y-0">
              <div className="flex items-center text-lg"><h1>Models</h1> {/* TODO: Count of results for algolia */} </div>
              <div className="flex-1 md:mx-4">
                  <SearchBox placeholder="Search Models" classNames={{root:'w-full md:max-w-xs', input:"dark:bg-gray-950 form-input h-8 pl-8 pr-3 focus:shadow-xl rounded-full", reset:"invisible", submit:"invisible", loadingIndicator:'invisible', form:"mb-0"}}/>
              </div>
              {/* <SortBy /> */}
            </div>
            <div className="grid gap-5 grid-cols-1 2xl:grid-cols-2">
              <Hits hitComponent={Hit} classNames={{list: 'space-y-4'}}/>
            </div>
            <footer className="container-footer">
              <Pagination 
                padding={2}
                showFirst={false}
                showLast={false}
                classNames={{item:'bg-rose-400'}}
              />
            </footer>
          </section>
        </InstantSearch>
      </div>
    );
}

function Hit({hit}) {
  return (
    <div>
      <article className='border-2 border-gray-200 rounded-lg leading-6 hover:bg-gray-200 hover:border-black border-2 py-2 px-3'>
        <Link to={`/model/${hit.owner}/${hit.repo}`}>
          <header className='flex items-center mb-0.5'>
            {/* Owner image? #TODO */}
            <h4 className='font-mono text-md truncate text-black dark:group-hover:text-yellow-500 group-hover:text-indigo-600'>
              <Highlight attribute="owner" hit={hit} />{"/"}<Highlight attribute="repo" hit={hit} />
            </h4>
          </header>
          <div className='flex items-center text-sm text-gray-400 leading-tight whitespace-nowrap overflow-hidden mr-1'>
            <div className='inline-flex items-center'>
              <Highlight attribute="authors" hit={hit} />
            </div> 

          </div>
        </Link>
      </article>
    </div>
  );
}

// Hit.propTypes = {
//   hit: PropTypes.object.isRequired,
// };