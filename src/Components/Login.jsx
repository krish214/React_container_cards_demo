

export const Login = () => {
    const isLoggedIn =true;
    const greeting = isLoggedIn ? <p>welcome</p> : <p>Pls Log in </p>;
  return (
    <><div>{greeting}</div></>
    
  )
}
