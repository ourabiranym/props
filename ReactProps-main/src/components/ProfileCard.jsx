import React, { Children } from 'react'

import { Card, Icon, Image, Button } from "semantic-ui-react";
import PropTypes from "prop-types"; 

function ProfileCard(props) {
 
  return (
    <div className='card'>
      <Card className='card1'>
        <Image
          src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/316189240_3274647742773449_4435125456492300457_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oxRFP2v3lD0AX_1CzmX&tn=AT2qMkd58P7ZMEBN&_nc_ht=scontent.ftun16-1.fna&oh=00_AfD0j785qrXKodrwt1jOnuQZ7Xm46dzwD9XFsfFg35-bXg&oe=63925B41"
          wrapped
          ui={false}
        /> {props.Children}
        <Card.Content>
          <Card.Header className="name"
         >
            {props.data.fullName}
          </Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description>{props.data.Bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="music" />
            {props.data.Profession}
          </a>
        </Card.Content>
      </Card>

      <button
        class="ui purple inverted button"
        onClick = {()=> props.ProfileFn(props.data.fullName)
      }
      >
        Submit
      </button>
    </div>
  );
}
ProfileCard.propTypes = {
    Profession: PropTypes.string,
};
ProfileCard.defaultProps = {
  Profession: "invalid",
};
export default ProfileCard