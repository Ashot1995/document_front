import Vue from 'vue'
import Vuex from 'vuex'
import {MainRepositoryModule} from "./modules/clientData/MainRepositoryModule";
import {PopupModule} from "./modules/popup/PopupModule";
import {ClientStoragesModule} from "./modules/clientData/ClientStoragesModule";
import {ThirdPartyStoragesModule} from "./modules/siteRepositories/ThirdPartyStoragesModule";
import {ClientModule} from "./modules/auth/ClientModule";
import {ClientStorageFilesModule} from "./modules/clientData/ClientStorageFilesModule";
import {FilesForAntiPiracy} from "./modules/clientData/FilesForAntiPiracy";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth:'',
    // recaptcha: '6Le4YDwdAAAAAGSUmALYIQvUrpQFRgI1_HOxokRU'
    recaptcha: '6Lfriz4dAAAAABwr3xyny9Fu12qZAqDOjbonDIlz'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    MainRepositoryModule: MainRepositoryModule,
    PopupModule: PopupModule,
    ClientStoragesModule: ClientStoragesModule,
    ThirdPartyStoragesModule: ThirdPartyStoragesModule,
    ClientStorageFilesModule: ClientStorageFilesModule,
    FilesForAntiPiracy: FilesForAntiPiracy,
    ClientModule: ClientModule
  }
})
