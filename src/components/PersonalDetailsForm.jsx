import React from 'react'

const PersonalDetailsForm = ({ formData, setFormData }) => {
  return (
    <div className='space-y-2'>
      <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className='border p-2 w-full' placeholder='Enter first name' />
      <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className='border p-2 w-full' placeholder='Enter last name' />
      <input type="text" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} className='border p-2 w-full' placeholder='Enter age' />
    </div>
  )
}

export default PersonalDetailsForm