
import { Input, Button, Flex, VStack } from "@chakra-ui/react";
import {useState, useContext} from 'react'
const signupIntialValue={
    name:'',
    username:'',
    email:'',
    password:''
}
const loginInitialValue={
    username:'',
    email:'',
    password:''
}
const LoginPage = () => {
    const [account, toggleAccount] = useState('login');
    const [signup,setSignup] = useState(signupIntialValue)
    const [login,setLogin]=useState(loginInitialValue)
    const toggleSignup=()=>{
        account === 'login'? toggleAccount('signup'):toggleAccount('login')
    }
    const onInputChange = (e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
      }
      const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
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
        <Input placeholder="Name" onChange={(e)=>onValueChange(e)}/>
        <Input type="email" placeholder="Email" onChange={(e)=>onValueChange(e)}/>
        <Input type="password" placeholder="Password" onChange={(e)=>onValueChange(e)}/>
        <Button colorScheme="blue" width="100%">
          Login
        </Button>
          <p>or</p>
        <Button onClick={()=>toggleSignup()} colorScheme="teal" variant="outline" width="100%">
          Create an Account
        </Button>
      </VStack>
      :
      <VStack spacing={4}
        width="300px"
        borderRadius="md" 
        padding={4} 
        backgroundColor="white" >
        <Input placeholder="Name" onChange={(e)=>onInputChange(e)} />
        <Input placeholder="Username" onChange={(e)=>onInputChange(e)}/>
        <Input type="email" placeholder="Email" onChange={(e)=>onInputChange(e)} />
        <Input type="password" placeholder="Password" onChange={(e)=>onInputChange(e)} />
        <Button colorScheme="teal" variant="outline" width="100%">
          SignUp
        </Button>
          <p>or</p>
        <Button onClick={()=>toggleSignup()}colorScheme="blue" width="100%">
         Already have an account
        </Button>
      </VStack>
      }
    </Flex>
  );
};

export default LoginPage;