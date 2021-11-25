import React, { useEffect, useState } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import Spinner from '../../components/Spinner/Spinner';
import ImageCategory from './ImageCategory';
import ImageComponent from './ImageComponent';

const Gallery = () => {
  const [images, setImages] = useState('loading');
  const [result, setResult] = useState('');
  const imageApi = () => {
    fetch(`https://safe-sea-78341.herokuapp.com/gallery`)
    .then(res => res.json())
    .then(data => setImages(data))
  }
  useEffect(() => {
    imageApi();
  }, [])
  const handleSearch = e => {
    e.preventDefault();
    if (e.target.search.value === '') {
      setResult('');
      return
    }
    fetch(`https://safe-sea-78341.herokuapp.com/search/${e.target.search.value}`)
      .then((res) => res.json())
      .then((data) => setResult(data))
  }
  return (
    <section className="text-gray-600 body-font text-center">
      <Searchbar handleSearch={handleSearch} />
      {
        result === '' ? <div>
          <div className="container p-5 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              {
                images ==='loading' ? <Spinner /> : images.map(image => <ImageComponent key={image._id} image={image} />)
              }
              {/* category section */}
              <ImageCategory />
            </div>
          </div>
        </div> :
          <div className="flex flex-wrap -m-4 justify-center my-4">
            {
              result && result.map(image => <ImageComponent key={image._id} image={image} />)
            }
            {
              result.length === 0 && <p className="text-red-700 text-2xl my-20 font-semibold">No match found !</p>
            }
          </div>
      }
    </section>
  );
};

export default Gallery;