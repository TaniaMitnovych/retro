import React from 'react';
import SectionHeader from '../sectionHeader/SectionHeader';
import posts from '../../posts.json';
import { useState, useEffect, useRef, useMemo } from 'react';
import _ from 'lodash';
import PostCard from './PostCard';

const BlogSection = (props) => {
  const buttonTarget = useRef(null);
  const isInViewport = useIsInViewport(buttonTarget);
  let amountOfPosts = 20;
  const [currentPage, setPage] = useState(0);
  const pageSize = 3;
  const [postsList, setPostsList] = useState([
    //...(_.slice(posts, currentPage * pageSize, currentPage * pageSize + pageSize))
  ]);
  const [shownAllPosts, setShownAll]=useState(false);
  const [buttonText, setButtonText]=useState('Show more posts');

  const loadPosts = () => {
    setPage(prev => { return prev + 1 });
    console.log(currentPage);
    setShownAll(true);
    console.log(postsList);
    
  }
  const handleButtonClick=()=>{
    if(shownAllPosts===true){
      setPostsList([]);
      setPage(0);
      console.log(currentPage);
    }
  }
  useEffect(()=>{
    setButtonText('Hide posts');
  }, [shownAllPosts]);

  useEffect(()=>{
    setPostsList(prev => [...prev, ...(_.slice(posts, currentPage * pageSize, currentPage * pageSize + pageSize))]);
  }, [currentPage]);

  useEffect(() => {
    loadPosts();
  }, [isInViewport]);


  return (
    <div className={`blog-section blog-section_${props.theme}`}>
      <SectionHeader
        theme={props.theme}
        header="My blog"
        subheader="News from my house"
      />
      <div className='blog-section__container'>
        {
          postsList.map((post) => {
            return (
              <PostCard
                theme={props.theme}
                image={post.image}
                title={post.title}
                responses={post.responses}
                info={post.date + ' // ' + post.role + ' // ' + post.tags.join(', ')}
                text={post.text}
              />
            )
          })
        }
      </div>
      <button ref={buttonTarget} type='button' onClick={handleButtonClick}>{buttonText}</button>
    </div>
  );
};

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
export default BlogSection;