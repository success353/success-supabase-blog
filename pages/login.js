import React from 'react'
import supabase from '../utils/supabase'

const login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = e.target.email.value

        await supabase.auth.signInWithOtp({ email })
    }
    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' />
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default login