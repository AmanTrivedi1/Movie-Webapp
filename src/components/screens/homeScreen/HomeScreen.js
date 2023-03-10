import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import "./_homescreen.css"
import Video from '../../video/Video'
import CategoriesBar from '../../../components/categoriesBar/CategoriesBar';
import { useDispatch, useSelector , useNaviagate } from 'react-redux'
import {
   getPopularVideos,
   getVideosByCategory,
} from '../../../redux/actions/videos.action.js'

import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../../components/skeletons/SkeletonVideo'

const HomeScreen = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPopularVideos())
   }, [dispatch])

   const { videos, activeCategory, loading } = useSelector(
      state => state.homeVideos
   )

   const fetchData = () => {
      if (activeCategory === 'All') dispatch(getPopularVideos())
      else {
         dispatch(getVideosByCategory(activeCategory))
      }
   }

   return (
      <Container className='position'>
         <CategoriesBar />
         <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            className='row'>
            {!loading
               ? videos.map(video => (
                    <Col lg={3} md={4} key={video.id}>
                       <Video video={video}  />
                    </Col>
                 ))
               : [...Array(20)].map(() => (
                    <Col lg={3} md={4}>
                       <SkeletonVideo />
                    </Col>
                 ))}
         </InfiniteScroll>
      </Container>
   )
}

export default HomeScreen