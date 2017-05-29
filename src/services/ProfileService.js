import { axiosService } from './AxiosProviderService';

class ProfileService {

  fetchProfile = (id) => {
    return axiosService.get(`https://stagdcaapi.dauble.com/myDaubleProfile?actorId=${id}`)
  }
}
export let profileService = new ProfileService();
