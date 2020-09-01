import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getEpisodesThunk} from "./mainPageReduer";
import classes from './ContentBlock.module.css'



const EpisodesBlock = () => {

    useEffect(() => {
        dispatch(getEpisodesThunk())
    })

    const episodes = useSelector(state => state.mainPage.episodes)
    const dispatch = useDispatch();

    const allEpisodes = episodes.map(ep => <div>
        <video src={ep.url}> {ep.url}</video> <p>{ep.name} <p> {ep.air_date}</p></p>
    </div>)



  return (<div className={classes.contentBlock}>
          {allEpisodes}





      </div>
  );
}

export default EpisodesBlock;
