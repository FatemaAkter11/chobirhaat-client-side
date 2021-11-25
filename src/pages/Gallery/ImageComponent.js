import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { useHistory } from 'react-router-dom';

const ImageComponent = ({image}) => {
  const { title,imgurl,description,views,comments,_id } = image;
  const history = useHistory();
  const handleRedirect = (id) => {
    fetch(`https://safe-sea-78341.herokuapp.com/views/${id}`, {
                method: 'PATCH',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({views: views+1})
            })
            .then(res => res.json())
            .then(data => {})
    history.push(`/image/${id}`)
  }
    return (
        <div className="p-4 md:w-1/3">
        <Zoom left>
        <div onClick={() => handleRedirect(_id)} className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer img-class">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imgurl} alt="blog" />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
            <p className="leading-relaxed mb-3">{description.slice(0,60)}</p>
            <div className="flex items-center flex-wrap ">
              <p className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-purple-700" href="/#">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </p>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>{views}
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>{comments.length}
              </span>
            </div>
          </div>
        </div>
        </Zoom>
      </div>
    );
};

export default ImageComponent;