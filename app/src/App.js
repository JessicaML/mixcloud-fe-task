import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchData } from './services/fetchData';
import NotificationContainer from './components/NotificationContainer';
import './App.css';

const Colors = {
  lightGrey: '#E5E5E5',
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.lightGrey};
`;

function App() {
//   const [data, setData] = useState(null);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData('https://api.mixcloud.com/spartacus/following?limit=10', setData, setError);
//   }, []);

  const data = {
    "data": [
      {
          "url": "https://www.mixcloud.com/recommends/", 
          "username": "recommends", 
          "name": "Mixcloud Recommends", 
          "key": "/recommends/", 
          "pictures": {
              "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/f/c/5/b/bfd1-7a83-41c5-bbaf-1c6253f7966b", 
              "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/f/c/5/b/bfd1-7a83-41c5-bbaf-1c6253f7966b", 
              "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/f/c/5/b/bfd1-7a83-41c5-bbaf-1c6253f7966b", 
              "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/f/c/5/b/bfd1-7a83-41c5-bbaf-1c6253f7966b", 
              "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/f/c/5/b/bfd1-7a83-41c5-bbaf-1c6253f7966b", 
              "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/f/c/5/b/bfd1-7a83-41c5-bbaf-1c6253f7966b", 
              "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/f/c/5/b/bfd1-7a83-41c5-bbaf-1c6253f7966b", 
              "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/f/c/5/b/bfd1-7a83-41c5-bbaf-1c6253f7966b"
          }
      }, 
      {
          "url": "https://www.mixcloud.com/deadmau5/", 
          "username": "deadmau5", 
          "name": "deadmau5", 
          "key": "/deadmau5/", 
          "pictures": {
              "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/3/9/f/a/ba96-11de-4c90-939e-afdf3b6507e1", 
              "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/3/9/f/a/ba96-11de-4c90-939e-afdf3b6507e1", 
              "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/3/9/f/a/ba96-11de-4c90-939e-afdf3b6507e1", 
              "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/3/9/f/a/ba96-11de-4c90-939e-afdf3b6507e1", 
              "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/3/9/f/a/ba96-11de-4c90-939e-afdf3b6507e1", 
              "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/3/9/f/a/ba96-11de-4c90-939e-afdf3b6507e1", 
              "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/3/9/f/a/ba96-11de-4c90-939e-afdf3b6507e1", 
              "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/3/9/f/a/ba96-11de-4c90-939e-afdf3b6507e1"
          }
      }, 
      {
          "url": "https://www.mixcloud.com/chromacast/", 
          "username": "chromacast", 
          "name": "Chromacast", 
          "key": "/chromacast/", 
          "pictures": {
              "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/f/d/2/a/2e74-34bb-4611-8c3a-253a9e1cd675", 
              "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/f/d/2/a/2e74-34bb-4611-8c3a-253a9e1cd675", 
              "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/f/d/2/a/2e74-34bb-4611-8c3a-253a9e1cd675", 
              "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/f/d/2/a/2e74-34bb-4611-8c3a-253a9e1cd675", 
              "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/f/d/2/a/2e74-34bb-4611-8c3a-253a9e1cd675", 
              "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/f/d/2/a/2e74-34bb-4611-8c3a-253a9e1cd675", 
              "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/f/d/2/a/2e74-34bb-4611-8c3a-253a9e1cd675", 
              "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/f/d/2/a/2e74-34bb-4611-8c3a-253a9e1cd675"
          }
      }, 
      {
          "url": "https://www.mixcloud.com/NourishPodcast/", 
          "username": "NourishPodcast", 
          "name": "Nourish", 
          "key": "/NourishPodcast/", 
          "pictures": {
              "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/3/a/3/5/7d8a-3dca-49a0-bea0-ef4febe7a977", 
              "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/3/a/3/5/7d8a-3dca-49a0-bea0-ef4febe7a977", 
              "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/3/a/3/5/7d8a-3dca-49a0-bea0-ef4febe7a977", 
              "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/3/a/3/5/7d8a-3dca-49a0-bea0-ef4febe7a977", 
              "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/3/a/3/5/7d8a-3dca-49a0-bea0-ef4febe7a977", 
              "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/3/a/3/5/7d8a-3dca-49a0-bea0-ef4febe7a977", 
              "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/3/a/3/5/7d8a-3dca-49a0-bea0-ef4febe7a977", 
              "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/3/a/3/5/7d8a-3dca-49a0-bea0-ef4febe7a977"
          }
      }, 
      {
          "url": "https://www.mixcloud.com/audioculture/", 
          "username": "audioculture", 
          "name": "Audio Culture", 
          "key": "/audioculture/", 
          "pictures": {
              "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/9/3/8/3/ab81-e17f-49ec-a143-980d8fbf8c8f", 
              "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/9/3/8/3/ab81-e17f-49ec-a143-980d8fbf8c8f", 
              "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/9/3/8/3/ab81-e17f-49ec-a143-980d8fbf8c8f", 
              "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/9/3/8/3/ab81-e17f-49ec-a143-980d8fbf8c8f", 
              "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/9/3/8/3/ab81-e17f-49ec-a143-980d8fbf8c8f", 
              "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/9/3/8/3/ab81-e17f-49ec-a143-980d8fbf8c8f", 
              "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/9/3/8/3/ab81-e17f-49ec-a143-980d8fbf8c8f", 
              "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/9/3/8/3/ab81-e17f-49ec-a143-980d8fbf8c8f"
          }
      }, 
      {
          "url": "https://www.mixcloud.com/jon/", 
          "username": "jon", 
          "name": "Jonathan King", 
          "key": "/jon/", 
          "pictures": {
              "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/2/3/0/4590-e1aa-49cf-86cd-3661fff4abfc", 
              "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/2/3/0/4590-e1aa-49cf-86cd-3661fff4abfc", 
              "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/2/3/0/4590-e1aa-49cf-86cd-3661fff4abfc", 
              "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/2/3/0/4590-e1aa-49cf-86cd-3661fff4abfc", 
              "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/2/3/0/4590-e1aa-49cf-86cd-3661fff4abfc", 
              "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/2/3/0/4590-e1aa-49cf-86cd-3661fff4abfc", 
              "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/2/3/0/4590-e1aa-49cf-86cd-3661fff4abfc", 
              "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/2/3/0/4590-e1aa-49cf-86cd-3661fff4abfc"
          }
      }, 
      {
          "url": "https://www.mixcloud.com/DasPlanetarium/", 
          "username": "DasPlanetarium", 
          "name": "Planetarium (Helioscope)", 
          "key": "/DasPlanetarium/", 
          "pictures": {
              "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/2/1/6/1/35f6-6dc4-4e57-9300-1f4c3e4f6d5d.jpg", 
              "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/2/1/6/1/35f6-6dc4-4e57-9300-1f4c3e4f6d5d.jpg", 
              "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/2/1/6/1/35f6-6dc4-4e57-9300-1f4c3e4f6d5d.jpg", 
              "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/2/1/6/1/35f6-6dc4-4e57-9300-1f4c3e4f6d5d.jpg", 
              "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/2/1/6/1/35f6-6dc4-4e57-9300-1f4c3e4f6d5d.jpg", 
              "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/2/1/6/1/35f6-6dc4-4e57-9300-1f4c3e4f6d5d.jpg", 
              "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/2/1/6/1/35f6-6dc4-4e57-9300-1f4c3e4f6d5d.jpg", 
              "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/2/1/6/1/35f6-6dc4-4e57-9300-1f4c3e4f6d5d.jpg"
          }
      }, 
      {
          "url": "https://www.mixcloud.com/Master_of_Instrumental/", 
          "username": "Master_of_Instrumental", 
          "name": "Master of Instrumental", 
          "key": "/Master_of_Instrumental/", 
          "pictures": {
              "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/c/0/8/3/16b8-1119-4a55-a974-0235ee8ac0a3.png", 
              "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/c/0/8/3/16b8-1119-4a55-a974-0235ee8ac0a3.png", 
              "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/c/0/8/3/16b8-1119-4a55-a974-0235ee8ac0a3.png", 
              "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/c/0/8/3/16b8-1119-4a55-a974-0235ee8ac0a3.png", 
              "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/c/0/8/3/16b8-1119-4a55-a974-0235ee8ac0a3.png", 
              "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/c/0/8/3/16b8-1119-4a55-a974-0235ee8ac0a3.png", 
              "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/c/0/8/3/16b8-1119-4a55-a974-0235ee8ac0a3.png", 
              "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/c/0/8/3/16b8-1119-4a55-a974-0235ee8ac0a3.png"
          }
      }, 
      {
          "url": "https://www.mixcloud.com/hellointernet2/", 
          "username": "hellointernet2", 
          "name": "Hello Internet", 
          "key": "/hellointernet2/", 
          "pictures": {
              "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/2/8/6/d/80fd-f4bc-4810-a605-ba673e3fbdfb", 
              "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/2/8/6/d/80fd-f4bc-4810-a605-ba673e3fbdfb", 
              "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/2/8/6/d/80fd-f4bc-4810-a605-ba673e3fbdfb", 
              "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/2/8/6/d/80fd-f4bc-4810-a605-ba673e3fbdfb", 
              "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/2/8/6/d/80fd-f4bc-4810-a605-ba673e3fbdfb", 
              "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/2/8/6/d/80fd-f4bc-4810-a605-ba673e3fbdfb", 
              "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/2/8/6/d/80fd-f4bc-4810-a605-ba673e3fbdfb", 
              "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/2/8/6/d/80fd-f4bc-4810-a605-ba673e3fbdfb"
          }
      }, 
      {
          "url": "https://www.mixcloud.com/cloud_atlas/", 
          "username": "cloud_atlas", 
          "name": "Cloud Atlas", 
          "key": "/cloud_atlas/", 
          "pictures": {
              "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/4/4/2/a/7fd6-13d2-45af-92f9-17914ad16267.jpg", 
              "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/4/4/2/a/7fd6-13d2-45af-92f9-17914ad16267.jpg", 
              "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/4/4/2/a/7fd6-13d2-45af-92f9-17914ad16267.jpg", 
              "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/4/4/2/a/7fd6-13d2-45af-92f9-17914ad16267.jpg", 
              "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/4/4/2/a/7fd6-13d2-45af-92f9-17914ad16267.jpg", 
              "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/4/4/2/a/7fd6-13d2-45af-92f9-17914ad16267.jpg", 
              "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/4/4/2/a/7fd6-13d2-45af-92f9-17914ad16267.jpg", 
              "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/4/4/2/a/7fd6-13d2-45af-92f9-17914ad16267.jpg"
          }
      }
  ]
  }

  return (
    <Container>
      <h1> Hello World! </h1>
      {data
      && (
        <NotificationContainer
          data={data.data}
        />
      )}
      {error && console.log(error)}
      {console.log(data)}
    </Container>
  );
}

export default App;
