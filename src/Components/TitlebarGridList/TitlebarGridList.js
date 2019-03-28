import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const  TitlebarGridList = (props)=>  {
  const { classes } = props;

  return (
    <div className={styles.root}>
      <GridList cellHeight={180} className={styles.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {props.data.map(tile => (
          <GridListTile key={'http://image.tmdb.org/t/p/w185'+tile.poster_path}>
            <img src={'http://image.tmdb.org/t/p/w500'+tile.poster_path} alt={tile.title} style ={{
                border: "none",
                width: '100%'
            }} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: ME</span>}
              
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}



export default withStyles(styles)(TitlebarGridList);