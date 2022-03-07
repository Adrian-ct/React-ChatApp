import { authentication } from "../../firebase-config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./UserConnect.module.css";

function UserConnect(props) {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(
          `Signed in succesfully with username: ${re.user.displayName}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOutOfGoogle = () => {
    signOut(authentication)
      .then(() => {
        console.log("Signed Out Succesfully");
      })
      .catch((error) => console.log(error));
  };

  const [user, loading] = useAuthState(authentication);

  return (
    <div>
      {user ? (
        <div>
          <div className={styles.signedIn}>
            <h1 id={styles["title"]}>REACTive Chat</h1>
            <button
              className={styles["signOutButton"]}
              onClick={signOutOfGoogle}
            >
              Sign Out
            </button>
            <button
              className={styles["menuButton"]}
              onClick={props.hideMenuHandler}
            >
              Menu
            </button>
          </div>
        </div>
      ) : (
        !loading && (
          <div className={styles["unsigned-container"]}>
            <div className={styles["logIn-wrapper"]}>
              <h1 style={{ color: "lightblue" }}>
                Oops, looks like you are not logged in
              </h1>
              <h2 style={{ color: "lightblue" }}>
                User your Google account to enter the chat!
              </h2>
              <button
                className={styles["signIn-button"]}
                onClick={signInWithGoogle}
              >
                Sign In With Google
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default UserConnect;
