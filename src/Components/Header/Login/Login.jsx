import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {UserIcon} from './UserIcon';


const Login = () => {
  return (

      <Button className="LoginC" color="primary" startContent={<UserIcon style={{top:'0', left:'0', position:'relative'}}/>}>
      Login
      </Button>

  );
}

export default Login;