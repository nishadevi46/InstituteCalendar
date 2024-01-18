
import { Input, Button, Flex, VStack } from "@chakra-ui/react";
import { API } from "../service/api";

import { useState, useContext } from 'react'
const signupIntialValue = {
  name: '',
  username: '',
  email: '',
  password: ''
}
const loginInitialValue = {
  username: '',
  email: '',
  password: ''
}
const LoginPage = () => {
  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState(signupIntialValue)
  const [login, setLogin] = useState(loginInitialValue)
  const [error, setError] = useState('')
  const toggleSignup = () => {
    account === 'login' ? toggleAccount('signup') : toggleAccount('login')
  }
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }
  const signupUser = async () => {
    let response = await API.userSignup(signup)
    if (response.isSuccess) {
      setError('')
      setSignup(signupIntialValue)
      toggleAccount('login')
    }
    else {
      setError('something went wrong! plz try later')
    }
  }
  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      backgroundColor="gray.100"
    >
      {account === 'login' ?
        <VStack spacing={4}
          width="300px"
          borderRadius="md"
          padding={4}
          backgroundColor="white" >
          <Input placeholder="Username" value={login.username} onChange={(e) => onValueChange(e)} />
          <Input type="email" placeholder="Email"  name='email'  value={login.email} onChange={(e) => onValueChange(e)} />
          <Input type="password"  name='password' placeholder="Password"  value={login.password} onChange={(e) => onValueChange(e)} />
          {error && <p>{error}</p>}
          <Button colorScheme="blue" width="100%">
            Login
          </Button>
          <p>or</p>
          <Button onClick={() => toggleSignup()} colorScheme="teal" variant="outline" width="100%">
            Create an Account
          </Button>
        </VStack>
        :
        <VStack spacing={4}
          width="300px"
          borderRadius="md"
          padding={4}
          backgroundColor="white" >
          <Input placeholder="Name" name='name' onChange={(e) => onInputChange(e)} />
          <Input placeholder="Username"  name='username' onChange={(e) => onInputChange(e)} />
          <Input type="email" placeholder="Email" name='email'  onChange={(e) => onInputChange(e)} />
          <Input type="password" placeholder="Password" name='password' onChange={(e) => onInputChange(e)} />
          {error && <p>{error}</p>}
          <Button colorScheme="teal" variant="outline" width="100%" onClick={() => signupUser()}>
            SignUp
          </Button>
          <p>or</p>
          <Button onClick={() => toggleSignup()} colorScheme="blue" width="100%">
            Already have an account
          </Button>
        </VStack>
      }
    </Flex>
  );
};

export default LoginPage;
