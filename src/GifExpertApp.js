import React, {useState} from 'react';

import './index.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from '../src/components/GifGrid';
const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          )
          )
        }
      </ol>
    </>
  )
}



export default GifExpertApp