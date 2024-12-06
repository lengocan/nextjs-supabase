export default function Login() {
    return <form action="/auth/login" method="post">
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <button>Sign In</button>
    </form>
}