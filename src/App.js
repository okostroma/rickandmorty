import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Menu} from 'antd';
import EpisodesBlock from "./EpisodesBlock";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import CharactersBlock from "./CharactersBlock";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;


const App = (props) => {
    return (<div className='App'>
            <BrowserRouter>
                <Layout>
                    <Header style={{color: '#fff'}}>Rick and Morty</Header>
                    <Layout>
                        <Sider>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', borderRight: 0}}
                            >
                                <SubMenu key="sub1" title="Menu">
                                    <Menu.Item key="1">

                                            <NavLink to={'/characters'} activeClassName='active'>Characters</NavLink>

                                    </Menu.Item>
                                    <Menu.Item key="2"><NavLink to={'/episodes'} activeClassName='active'>Episodes </NavLink> </Menu.Item>
                                </SubMenu>

                            </Menu>
                        </Sider>

                        <Content style={{
                            padding: 24,
                            margin: 0,
                            height: '100vh'
                        }}>
                            <Route path='/characters' render={() => <CharactersBlock />}/>
                            <Route path='/episodes' render={() => <EpisodesBlock/>}/>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
