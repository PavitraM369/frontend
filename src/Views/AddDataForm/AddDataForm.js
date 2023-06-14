import React, { useState } from 'react'
import './style.css'

function AddDataForm() {

  const [formData,setFormData] = useState({})
  const [errors,seterros] = useState({})
  // else{
  //   seterros({...errors,nameError:""})
  // }

const Handlevalidations = ()=>{
  let flag = true

    if(!formData['name'] || !formData['name'].trim()){
      seterros({...errors,nameError:"Please Enter Valid Name"})
      flag = false
    }
    if(!formData['type'] || !formData['type'].trim()){
      seterros({...errors,typeError:"Please Enter Valid Type"})
      flag = false
    }
    if(!formData['serialNumber'] || !formData['serialNumber'].trim()){
      seterros({...errors,serialNumberError:"Please Enter Valid serialNumber"})
      flag = false
    }
    if(!formData['location'] || !formData['location'].trim()){
      seterros({...errors,locationError:"Please Enter Valid location"})
      flag = false
    }
    if(!formData['purchaseDate'] || !formData['purchaseDate'].trim()){
      seterros({...errors,purchaseDateError:"Please Enter Valid purchaseDate"})
      flag = false
    }
    
    if(!formData['assignedTo'] || !formData['assignedTo'].trim()){
      seterros({...errors,assignedToError:"Please Enter Valid assignedTo"})
      flag = false
    }
    if(!formData['model'] || !formData['model'].trim()){
      seterros({...errors,modelError:"Please Enter Valid model"})
      flag = false
    }
    if(!formData['status'] || !formData['status'].trim()){
      seterros({...errors,statusError:"Please Enter Valid status"})
      flag = false
    }
    if(!formData['currentValue'] || !formData['currentValue'].trim()){
      seterros({...errors,currentValueError:"Please Enter Valid currentValue"})
      flag = false
    }

    if(flag){
      seterros({})
      return flag
    }


}


  const HandleSubmit = ()=>{
            console.log("FormData>>>>>>",formData); 

            // fetch('http://127.0.0.1:5000/assets/createasset',{
                
            //   method: "POST",
            //   body: JSON.stringify(formData),
            //   headers: {
            //       "Content-type": "application/json; charset=UTF-8"
            //   }
            // }).then((res)=>{
            //   alert('Success')
            //   console.log("Status",res.body);
            // }).catch((err)=>{
            //   alert('ERROR',err.message);
            //   console.log("ERR",err);
            // })


          }



  return (
    <div className=''>
      
<div className=' p-2 col-sm-8 border rounded mx-auto d-flex justify-content-center mt-4'>
<div >
  <h1 className='primary-color '>Add Assets</h1>
  
      <div className='d-flex  '>
      <div class="form-group row col-sm-6 ">
        <label  class=" primary-color  col-form-label">Name</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="name" placeholder="Enter your Name" onChange={(e)=>{setFormData({...formData,name:e.target.value})}}/>
          {errors.nameError && <span  style={{color:"red"}}>{errors.nameError}</span>}
        </div>
      </div>
      
      <div class="form-group row col-sm-6 ">
        <label  class=" primary-color col-form-label">Type</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="name" placeholder="Enter your type" onChange={(e)=>{setFormData({...formData,type:e.target.value})}}/>
          {errors.typeError && <span  style={{color:"red"}}>{errors.typeError}</span>}
        </div>
      </div>

      </div>
      <div className='d-flex  '>

  <div class="form-group row col-sm-6">
    <label  class=" primary-color col-form-label">Serial Number</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="Serial-Number" placeholder="Enter Serial Number" onChange={(e)=>{setFormData({...formData,serialNumber:e.target.value})}}/>
    {errors.serialNumberError && <span  style={{color:"red"}}>{errors.serialNumberError}</span>}
    </div>
  </div>
  <div class="form-group row col-sm-6">
    <label  class=" primary-color col-form-label">Location</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="Enter-Location" placeholder="Enter Location" onChange={(e)=>{setFormData({...formData,location:e.target.value})}}/>
    {errors.locationError && <span  style={{color:"red"}}>{errors.locationError}</span>}
    </div>
  </div>

  </div>
  <div className='d-flex  '>

  <div class="form-group row col-sm-6">
    <label  class=" primary-color col-form-label">Assigned To</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="Assigned-To" placeholder="Enter Assigned To" onChange={(e)=>{setFormData({...formData,assignedTo:e.target.value})}}/>
    {errors.assignedToError && <span  style={{color:"red"}}>{errors.assignedToError}</span>}
    </div>
  </div>
  <div class="form-group row col-sm-6">
    <label  class=" primary-color col-form-label">purchaseDate</label>
    <div class="col-sm-8">
      <input type="date" class="form-control" id="purchase-date" placeholder="Enter purchaseDate" onChange={(e)=>{setFormData({...formData,purchaseDate:e.target.value})}}/>
    {errors.purchaseDateError && <span  style={{color:"red"}}>{errors.purchaseDateError}</span>}
    </div>
  </div>
</div>
<div className='d-flex  '>

  <div class="form-group row col-sm-6">
    <label  class=" primary-color col-form-label">purchasePrice</label>
    <div class="col-sm-8">
      <input type="number" class="form-control" id="purchase-price" placeholder="Enter purchasePrice" onChange={(e)=>{setFormData({...formData,purchasePrice:e.target.value})}}/>
    {errors.purchasePriceError && <span  style={{color:"red"}}>{errors.purchasePriceError}</span>}
    </div>
  </div>
  <div class="form-group row col-sm-6">
    <label  class=" primary-color col-form-label">currentValue</label>
    <div class="col-sm-8">
      <input type="number" class="form-control" id="current-value" placeholder="Enter currentValue" onChange={(e)=>{setFormData({...formData,currentValue:e.target.value})}}/>
    {errors.currentValueError && <span  style={{color:"red"}}>{errors.currentValueError}</span>}
    </div>
  </div>
  </div>
  <div className='d-flex  '>

  <div class="form-group row col-sm-6">
    <label  class=" primary-color col-form-label">Status</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="status" placeholder="Enter Status" onChange={(e)=>{setFormData({...formData,status:e.target.value})}}/>
    {errors.statusError && <span  style={{color:"red"}}>{errors.statusError}</span>}
    </div>
  </div>
  <div class="form-group row col-sm-6">
    <label  class=" primary-color col-form-label">Notes</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="current-value" placeholder="Enter Notes" onChange={(e)=>{setFormData({...formData,notes:e.target.value})}}/>
    
    </div>
  </div>
  </div>

  <div class="form-group row col-sm-6">
    <label  class=" primary-color col-form-label">Model</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="Manufacturer" placeholder="Enter Model" onChange={(e)=>{setFormData({...formData,model:e.target.value})}}/>
    {errors.modelError && <span  style={{color:"red"}}>{errors.modelError}</span>}
    </div>
  </div>
  <div className=' d-flex justify-content-center' > <button className='btn  border primary-color primary-bgcolor ' onClick={()=> Handlevalidations()}>Add Assets</button> </div>

  </div>
  </div>

    </div>
  )
}

export default AddDataForm
