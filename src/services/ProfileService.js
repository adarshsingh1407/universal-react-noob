import { axiosService } from './AxiosProviderService';
import Config from './ConfigService';

class ProfileService {

  fetchProfile = (id) => {
    return axiosService.get(`${Config.daubleAPI}/myDaubleProfile?actorId=${id}`)
  }
}
export let profileService = new ProfileService();
