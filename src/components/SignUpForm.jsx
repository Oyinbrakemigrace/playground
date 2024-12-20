import React from 'react'

const SignUpForm = ({ formData, setFormData }) => {
    return (
        <div className='space-y-2'>
            <input type="text" value={formData.emailAddress} onChange={(e)=>setFormData({...formData, emailAddress: e.target.value})} className='border p-2 w-full' placeholder='Enter email address' />
            <input type="text" value={formData.promoCode} onChange={(e)=>setFormData({...formData, promoCode: e.target.value})} className='border p-2 w-full' placeholder='Enter promo code' />
            <input type="text" value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})} className='border p-2 w-full' placeholder='Enter password' />
            <input type="text" value={formData.confirmPassword} onChange={(e)=>setFormData({...formData, confirmPassword: e.target.value})} className='border p-2 w-full' placeholder='Confirm password' />
        </div>
    )
}

export default SignUpForm