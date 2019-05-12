import {
  SET_TEST_VALUE,
} from './mutations'

export default {
  testAction: ({ commit }) => {
    commit(SET_TEST_VALUE, true)
  }
}
