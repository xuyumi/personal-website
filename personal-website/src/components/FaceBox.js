import React, {useState, useEffect}from 'react';
import {makeStyles, Grid, List} from '@material-ui/core/';
import LiItem from './LiItem';
import DetailBox from './DetailBox'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    body: {
        backgroundColor: '#282828', 
        width:'30vw',
        height: '80vh',
        margin:50,
        marginTop: 20,
        borderRadius: '5px',
        border: '1.5px solid #181818',
        paddingTop: "15px"
    },
    header: {
        color: "white",
        margin: "10px"
    },
    detailView: {
        backgroundColor: '#282828', 
        width:'55vw',
        height: '80vh',
        margin:50,
        marginTop: 20,
        borderRadius: '5px',
        border: '1.5px solid #181818',
        paddingTop:"15px"
    }
}));

export default function Facebox(props) {
    const classes = useStyles();
    const [selected, setSelected] = useState(props.newsData[0]);
    const handleSelect = (info) => {
        console.log("Handling select: " + info);
        setSelected(info);
    }
    
    console.log(props.newsData);
    return (
        <Grid container spacing={2}  style={{marginTop: "20px",width: '100%', margin: 0}}>
            <Grid item xs={4}>
            <div id="Facebox" className={classes.body}>
                <h1 className={classes.header}>News</h1>
                <List style={{color: "white"}}> 
                    {(props.newsData.length) ? (props.newsData.map((item) => 
                    <LiItem key={item["id"]} info={item} title={item["title"]} sel={handleSelect}/>)) : <div>No News here!</div>}
                </List>
            </div>
            </Grid>
            <Grid item xs={8}>
                <div id="detailView" className={classes.detailView}>
                    <DetailBox info={selected}/>
                </div>
            </Grid>
        </Grid>
    );
}