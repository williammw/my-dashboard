import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import './MyDrawer.css';
import {  HashRouter as Router, Switch, Route, Link, useRouteMatch, useParam } from "react-router-dom";
import About from './About';
import Topics from './Topics';
import { useDispatch, useSelector } from 'react-redux';
import { selectPath, updateCurrentPath } from './features/routeSlice'
const useStyles = makeStyles({
  listItem: {
    color:'#333',
  },
  list: {
    color:'#fff',
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MyDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const dispatch = useDispatch();
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleListItemClick = (event, text) => { 

    // if (text === 'Inbox') {
    //   dispatch(updateCurrentPath('/'))
    // }
    // if (text === 'Starred') {
    //   dispatch(updateCurrentPath('/about'))
    // }
    
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.listItem} >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button
              key={text}
              component={Link}
              to={`/${text}`}
              // onClick={(event) => handleListItemClick(event, text)}
            >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button
              key={text}
              component={Link}
              to={`/${text}`}
              // onClick={(event) => handleListItemClick(event, text)}
            >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </List>
        </div>
    </div>
  );

  return (
    <Router> 
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon onClick={toggleDrawer(anchor, true)} />
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}      
      </div>
      {/* <Switch>
          <Route path="/dbc">
            <About />
        </Route>
        <Route path="/db">
            <Topics />
        </Route>
      </Switch> */}
    </Router>
  );
}