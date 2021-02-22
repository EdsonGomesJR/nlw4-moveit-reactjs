import React from 'react';

 import { Container, Header, CurrentExperience } from './styles';

function ExperienceBar()  {
  return (
<Container>
    <Header >
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <CurrentExperience  style={{left: '50%'}}>
              300 xp
          </CurrentExperience>
      </div>
      <span>600 xp</span>
    </Header>
</Container>
  );
}

export default ExperienceBar;