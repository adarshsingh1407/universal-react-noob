import fetch from 'isomorphic-fetch';
/*
 * Actions
 */
export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const RECEIVED_PROFILE = 'RECEIVED_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const PROFILE_UPDATED = 'PROFILE_UPDATED';

/*
 * Action Creators
 */
export const requestProfile = (id) => {
  return {
    type: REQUEST_PROFILE,
    id
  }
}

export const receiveProfile = (id, collector = {}) => {
  console.log(collector);
  return {
    type: RECEIVED_PROFILE,
    id,
    collector: (collector.data !== undefined) ? collector.data : {},
    receivedAt: Date.now()
  }
}

export const updateProfileAction = () => {
  return {
    type: UPDATE_PROFILE
  }
}

export const profileUpdatedAction = (collector = {}) => {
  return {
    type: PROFILE_UPDATED,
    collector: (collector.data !== undefined) ? collector.data : {},
    receivedAt: Date.now()
  }
}

export const fetchProfile = (id) => {
  return function(dispatch) {
    dispatch(requestProfile(id));
    return fetch(`https://stagdcaapi.dauble.com/myDaubleProfile?actorId=${id}`)
      .then(result => {
        return result.json();
      }, err => {
        console.error();
      })
      .then(collector => {
        dispatch(receiveProfile(id, collector))
      })
  }
}

export const updateProfile = () => {
  return function(dispatch) {
    dispatch(updateProfileAction());
    return fetch(`https://stagdcaapi.dauble.com/myProfile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accessToken' : 'Q3KDBYBUCLJKQIV0BGKBOWJRLNCDR5NJ'
      },
      body: JSON.stringify({
        collectorEmail: 'adarshsingh1407@gmail.com',
        collectorName: 'Adarsh Singh',
        dateOfBirth: 711052200000,
        description: 'Cinephile, Music-freak',
        gender: 'M',
        username: 'adarsh1407',
        webSite: 'fb.com'
        })
    })
    .then(result => {
      return result.json();
    }, err => console.log(err))
    .then(collector => {
      console.log(collector);
      dispatch(profileUpdatedAction(collector))
    })
  }
}
