import React from 'react'
import articlesContent from '../data/article-content'
import { Link } from 'react-router-dom'
export const ArticlesListe = () => {
  return (
    <div>
      <h1 className='sm:text-4xl text-center font-bold text-2xl my-5'> 
      ArticlesListe
      </h1>
      <div className=' container mx-auto py-4'>
        <div className='flex flex-wrap m-4'>

        {articlesContent.map((article, index) =>
       <div key={index} className=' p-4 md:w-1/2'>
        <div className=' border-2 border-gray-200 border-opacity-40 rounded-lg overflow-hidden'> 
        <Link to={`/articles/${article.name}`}>
        <img
        className=' lg:h-48 md:h-36 w-full object-center'
        src={article.thumbnail} 
        alt="imgblog"/>
        </Link>
        <div className='p-6'>
          <Link key={index} to={`/articles/${article.name}`}>
          <h3 className='text-lg font-medium text-gray-900 mb-3'> 
          {article.title} 
          </h3>
          </Link>
          <p className=' leading-relaxed mb-3'>
            {article.content[0].substring(0, 115)}...
          </p>
          <div className=' my-3'>
          <Link 
          className=' text-indigo-500 '
          to={`/articles/${article.name}`}
          >
            Learn more
          </Link>
          </div>
        </div>
        </div>
       </div>
        )}
        </div>
      </div>
    </div>
  )
}
