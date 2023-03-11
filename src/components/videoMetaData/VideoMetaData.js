import React, { useEffect } from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'

import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'
import { useDispatch, useSelector } from 'react-redux'
import {
   checkSubscriptionStatus,
   getChannelDetails,
} from '../../redux/actions/channel.action'
const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
   const { channelId, channelTitle, description, title, publishedAt } = snippet
   const { viewCount, likeCount, dislikeCount } = statistics

   const dispatch = useDispatch()

   const {
      snippet: channelSnippet,
      statistics: channelStatistics,
   } = useSelector(state => state.channelDetails.channel)

   const subscriptionStatus = useSelector(
      state => state.channelDetails.subscriptionStatus
   )

   useEffect(() => {
      dispatch(getChannelDetails(channelId))
      dispatch(checkSubscriptionStatus(channelId))
   }, [dispatch, channelId])

   return (
      <div className='py-2 videoMetaData text-white'>
         <div className='videoMetaData__top'>
            <h5 className='text-white'>{title}</h5>
            <div className='py-1 d-flex  justify-content-between align-items-center'>
               <span className='text-white-50'>
                  {numeral(viewCount).format('0.a')} Views •{' '}
                  {moment(publishedAt).fromNow()}
               </span>

               <div className='d-flex gap-2 like__button '>
                  <span className='mr-3 like__button-up  text-white'>
                     <MdThumbUp size={20} /> {numeral(likeCount).format('0.a')}
                  </span>
                  <span className='mr-3 text-white like__button-down'>
                     <MdThumbDown size={20} />{' '}
                     {numeral(dislikeCount).format('0.a')}
                  </span>
               </div>
            </div>
         </div>
         <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
               <img
                  src={channelSnippet?.thumbnails?.default?.url}
                  alt=''
                  className='mr-3 rounded-circle w-10%'
               />
               <div className='d-flex flex-column align-items-center  justify-content-center '>
                  <span className='text-white channel__name '>{channelTitle}</span>
                  <span className=' subscriber__count '>
                     {numeral(channelStatistics?.subscriberCount).format(
                        '0.a'
                     )}
                     Subscribers
                  </span>
               </div>
            </div>

            <button
               className={`p-2 m-2 border-0 btn ${
                  subscriptionStatus && 'btn-gray'
               }`}>
               {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
            </button>
         </div>
         <div className='videoMetaData__description text-white description '>
            <ShowMoreText
               lines={2}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               expanded={false}>
               {description}
            </ShowMoreText>
         </div>
      </div>
   )
}

export default VideoMetaData
