import React from 'react'

const OthersDetailsForm = ({ formData, setFormData }) => {
  return (
    <div className='space-y-2'>
      <input type="text" value={formData.stateOfOrigin} onChange={(e) => setFormData({ ...formData, stateOfOrigin: e.target.value })} className='border p-2 w-full' placeholder='Enter state of origin' />
      <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className='border p-2 w-full' placeholder='Enter Address' />
    </div>
  )
}

export default OthersDetailsForm