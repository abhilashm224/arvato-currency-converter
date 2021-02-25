import daggy from 'daggy'

//Handling different HTTP api calls scenarios for better error handling
const RemoteData = daggy.taggedSum('RemoteData', {
  NotAsked: [],
  Loading: [],
  Failure: ['error'],
  Success: ['data']
})

export default RemoteData