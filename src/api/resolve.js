import RemoteData from "./remoteData";

const resolve = async promise =>
    promise
        .then(res => RemoteData.Success(res.data))
        .catch(err => RemoteData.Failure(err))

export default resolve;
