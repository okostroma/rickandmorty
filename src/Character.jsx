import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import classes from './Character.module.css'
import {Modal} from "antd";


const Character = (props) => {


    const [visible, setVisibility] = useState(false);

    const showModal = useCallback(()=> setVisibility(true), [setVisibility])

    const handleOk = useCallback((e) => setVisibility(false), [])

    const handleCancel = useCallback((e) => setVisibility(false),[])


    return (
        <div onClick={showModal} className={classes.character}>
            <img className={classes.avatar} src={props.image}/>
            <div className={classes.charInfo}>
                <p> <b>Name:</b> {props.name}</p>
                <p> <b>Status:</b> {props.status}</p>
                <p> <b>Gender: </b>{props.gender} - {props.species}</p>
                <p><b>Last known location:</b> <a href={props.location.url}> {props.location.name}</a></p>
            </div>
            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

        </div>
    );
}

export default Character;
