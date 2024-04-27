
import { useAuthContext } from "../Auth/Hooks/useAuthContext"


function Home() {
    const { user } = useAuthContext()
    return (
        <div className="p-1 m-2">
            <div className="card text-bg-info  mb-3">
                <div className="card-header">
                    Hi! {user.sid} 👷‍♂️
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        🚧 This is to inform you that...
                    </h5>
                    <p className="card-text">

                        The page you're currently viewing serves as the homepage, and the content you see here is not final. Our team is diligently working on developing and refining the actual content that users will find here. Thank you for your understanding as we strive to create the best possible experience. Stay tuned for updates! 🛠️👷‍♂️
                    </p>
                </div>
            </div>
            <div className="card text-bg-dark   mb-3">
                <div className="card-header">
                    🐸 {user.sid} cary on don't quit here🔦
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        📚 Welcome to our class attendance platform! 📝
                    </h5>
                    <p className="card-text">


                        As a gentle reminder, this platform is designed exclusively for marking your attendance during our in-person classes. The class representatives will activate the attendance sheet for each session, ensuring that your presence is duly recorded.

                        So, when you're attending class physically, remember to use this platform to mark your presence and contribute to our learning environment. Let's make each session count! 🌟📚
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
