import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Grid, Tooltip, Card, CardActionArea, CardHeader, CardContent, CardActions, CardMedia, IconButton, Typography } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import { IPost } from 'types';
import './styles.css';

function Post(props: IPost) {
  console.log("carre")
  const { id, title, author, image_url, body } = props;
  console.log("image_url ", image_url)
  return (
    <Grid container spacing={10} justify='center' >
      <Grid item >
      
          <Card
            classes={{
              root: 'card-root',
            }}
          >
              <CardActionArea>
            <CardHeader
              classes={{
                root: 'card-header-root',
                title: 'card-header-title',
                //  subheader: 'card-header-subheader',
                // action: 'card-header-action',
              }}

              title={title}
              subheader={author}
            />
            <CardMedia

            >
              <img src={image_url}
                // className='media' 
                alt=''
              />
            </CardMedia >
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {body}
              </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add comments">
                <CommentIcon />
              </IconButton>             
              <IconButton
                // className={clsx(classes.expand, {
                //   [classes.expandOpen]: expanded,
                // })}
                // onClick={handleExpandClick}
                // aria-expanded={expanded}
                // aria-label="show more"
              >
             
              </IconButton>
            </CardActions>
          </Card>
       
      </Grid>
    </Grid>
  )
}

export default Post;