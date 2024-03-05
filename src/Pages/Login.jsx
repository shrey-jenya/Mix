import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
function Login() {
    const [userName , setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useAuth()
    const handleLogin = async (e) =>{
        e.preventDefault()
        if(userName === '123' && password === '123'){
            await login({userName})
        }else{
            alert('Login failed')
        }
    }
    return (
        <form onSubmit={handleLogin} className="flex p-10   flex-col  gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="username" value="UserName:" />
                </div>
                <TextInput id="username" type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Password:" />
                </div>
                <TextInput id="password1" value={password } onChange={(e)=>setPassword(e.target.value)} type="password" required />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Login</Button>
        </form>
    );
}
export default Login