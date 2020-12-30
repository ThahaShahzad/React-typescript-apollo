import React from 'react'
// import { GoogleLogin, GoogleLogout } from 'react-google-login'

// interface UserData {
//   profileObj: profileObj
// }
// interface profileObj {
//   email: String
//   familyName: String
//   givenName: String
//   googleId: String
//   imageUrl: String
//   name: String
// }

// const Googlelogin: React.FC = () => {
//   const [LoggedIn, setLoggedIn] = React.useState(false)
//   const [userData, setuserData] = React.useState<UserData>()
//   const signIn = (response: UserData) => {
//     console.log(response)
//     setuserData(response)
//     setLoggedIn(true)
//   }
//   const error = (response: object) => {
//     console.log(response)
//   }
//   const logout = () => {
//     setLoggedIn(false)
//     setuserData(undefined)
//   }
//   return (
//     <>
//       {LoggedIn && (
//         <>
//           {userData.profileObj.givenName}
//           <img src={userData.profileObj.imageUrl} alt='Profile Pic' height={50} style={{ borderRadius: 50 }}></img>
//         </>
//       )}
//       {LoggedIn ? (
//         <GoogleLogout
//           clientId={String(process.env.REACT_APP_GOOGLE_CLIENT_ID)}
//           buttonText='Logout'
//           onLogoutSuccess={logout}
//         />
//       ) : (
//         <GoogleLogin
//           clientId={String(process.env.REACT_APP_GOOGLE_CLIENT_ID)}
//           buttonText='Sign in with Google'
//           onSuccess={signIn}
//           onFailure={error}
//           isSignedIn={true}
//           cookiePolicy={'single_host_origin'}
//         />
//       )}
//     </>
//   )
// }

// export default Googlelogin
