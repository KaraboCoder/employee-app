import loadingIcon from '../assests/loading.gif'
import '../styles/loading.css'

const Loading = (props) => {
    return (
        <div className="loading">
            <img src={loadingIcon} />
            <p>Please wait...</p>
        </div>
    )
}

export default Loading