import source from './client_id.json';


const user = 'marketing.quicktaxi@gmail.com'
const refreshToken = '1/wxbZv1oGT9iXGShM3_bN_98RjUmGVYx4HLIfoqfMpEs'
const accessToken = 'ya29.GlucBd6c0PvDg3ZS3i8JNtm1gzaYirYT6MvDzIBeRJK2vj6-vcQBmzFzohUlilnpTSBcqku3f9nh6dlk2mSyOq99IqkMcqJACqDWg7iHF-tTnTF_LgNP28wuISND'

export default {
  user,
  clientId: source.web.client_id,
  clientSecret: source.web.client_secret,
  refreshToken,
  accessToken
}