import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getCharactersThunk} from "./mainPageReduer";
import classes from './ContentBlock.module.css'
import Character from "./Character";
import { Row, Col } from 'antd';


const CharactersBlock = () => {

    useEffect(() => {
        dispatch(getCharactersThunk())

    })

    const characters = useSelector(state => state.mainPage.characters)
    const dispatch = useDispatch();

    const allCharacters = characters.map(char => <Row key={char.id} gutter={16}>
        <Col className="gutter-row">
            <Character
            key={char.id} species={char.species} status={char.status}
            gender={char.gender} name={char.name} image={char.image}
            location={char.location}/>
        </Col>
    </Row>)


    return (<div className={classes.contentBlock}>
            {allCharacters}

        </div>
    );
}

export default CharactersBlock;
