import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getVideosByChannel } from "../../../redux/actions/videos.action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import VideoHorizontal from "../../../components/VideoHorizontal/VideoHorizontal";
const SubscriptionScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel());
  }, [dispatch]);
  const { loading, videos } = useSelector(
    (state) => state.subscriptionsChannel
  );
  return (
    <>
      <h1>All your Subscribed Channel is here</h1>
      <Container fluid>
        {!loading ? (
          videos?.map((video) => (
            <video>
              {" "}
              video={video} key={video.id} subScreen{" "}
            </video>
          ))
        ) : (
          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="160px" count={20} />
          </SkeletonTheme>
        )}
      </Container>
    </>
  );
};

export default SubscriptionScreen;
