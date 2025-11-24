import React from 'react';
import { set, useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const ParcelBookingForm = () => {
  const { register, handleSubmit, control, formState: {errors} } = useForm()
  const servicesCenters = useLoaderData()
  const regionDuplicate = servicesCenters.map(c => c.region)
  const regions = [...new Set(regionDuplicate)]

  const senderRegion = useWatch({ control, name: 'senderRegion' })
  const receiverRegion = useWatch({ control, name: 'receiverRegion' })

  const districtsByRegion = (region) => {
    const regionDistricts = servicesCenters.filter(c => c.region === region)
    const districts = regionDistricts.map( d => d.district)
    return districts
  }

  const handleSendParcel =(data) => {
    // console.log(data);
    const isDocument = data.parcelType === 'document';
    const isSameDistrict = data.senderDistrict === data.receiverDistrict
    const parcelWeight = parseFloat(data.parcelWeight)
    // console.log(isSameDistrict);

    let cost = 0;
    if(isDocument){ 
      cost = isSameDistrict ? 60 : 80  
    }
    else{
      if(parcelWeight < 3 ){
        cost = isSameDistrict ? 110 : 150
      } else{
          const minCharge = isSameDistrict ? 110 : 150;
          const extraWeight = parcelWeight - 3;
          const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
          cost = minCharge + extraCharge;
      }
    }
    console.log('cost', cost);
    Swal.fire({
            title: "Agree with the Cost?",
            text: `You will be charged ${cost} taka!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I agree!"
        }).then((result) => {
            if (result.isConfirmed) {

                // save the parcel info to the database
                // axiosSecure.post('/parcels', data)
                //     .then(res => {
                //         console.log('after saving parcel', res.data);
                //     })

                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
  }

  return (
    <form onSubmit={handleSubmit(handleSendParcel)} className="max-w-6xl mx-auto p-6 bg-base-100 shadow-md rounded-lg  my-16">
      <h2 className="text-[3rem] font-bold mb-6 pb-3 border-b border-gray-300">Add Parcel</h2>
      <h2 className="text-2xl font-bold mb-6">Enter your parcel details</h2>

          <div className="mb-6">
              <label className="label font-semibold">Parcel Type</label>
                  <div className="flex gap-6">
                      <label className="label">
                          <input {...register('parcelType')} type="radio" className="radio" value="document" defaultChecked/>Document
                      </label>

                      <label className="label">
                          <input {...register('parcelType')} type="radio" className="radio" value="not-document" />Not-Document
                      </label>
                  </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <fieldset className="fieldset">
              <label className="label font-semibold">Parcel Name</label>
              <input {...register('parcelName')} type="text" className="input w-full" placeholder="Enter parcel name" />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label font-semibold">Parcel Weight (KG)</label>
              <input {...register('parcelWeight')} type="number" className="input w-full" placeholder="e.g. 2.5" />
            </fieldset>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>

            <label className="label">Sender Name</label>
            <input type="text" {...register('senderName')} 
            // defaultValue={user?.displayName}
            className="input w-full" placeholder="Sender Name" />

            <label className="label">Sender Email</label>
            <input type="text" {...register('senderEmail')}
                // defaultValue={user?.email}
                className="input w-full" placeholder="Sender Email" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* sender region */}
              <fieldset className="fieldset">
                  <legend className="fieldset-legend">Sender Regions</legend>
                  <select {...register('senderRegion')} defaultValue="Pick a region" className="select w-full ">
                      <option disabled={true}>Pick a region</option>
                      {
                        regions.map( (r, i) => <option key={i} value={r} > {r} </option> )
                      }
                  </select>
              </fieldset>

              {/* sender districts */}
              <fieldset className="fieldset">
                  <legend className="fieldset-legend">Sender Districts</legend>
                  <select {...register('senderDistrict')} defaultValue="Pick a district" className="select w-full">
                      <option disabled={true}>Pick a district</option>
                      {
                        districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                      }
                  </select>
              </fieldset>
            </div>

            <label className="label mt-4">Sender Address</label>
            <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />
          </fieldset>

          {/* receiver Details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>

            <label className="label">Receiver Name</label>
            <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />

            <label className="label">Receiver Email</label>
            <input type="text" {...register('receiverEmail')} className="input w-full" placeholder="Receiver Email" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* receiver region */}
              <fieldset className="fieldset">
                  <legend className="fieldset-legend"> Receiver Regions </legend>
                  <select {...register('receiverRegion')} defaultValue="Pick a region" className="select">
                      <option disabled={true}>Pick a region</option>
                      {
                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                      }
                  </select>
              </fieldset>

              {/* receiver district */}
              <fieldset className="fieldset">
                  <legend className="fieldset-legend"> Receiver District </legend>
                  <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select">
                      <option disabled={true}>Pick a district</option>
                      {
                        districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                      }
                  </select>
              </fieldset>
            </div>

            <label className="label mt-4">Receiver Address</label>
            <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />


          </fieldset>
        </div>

      {/* Footer */}
      <p className="text-sm text-gray-500 mb-4">* PickUp Time 4pm–7pm Approx.</p>
      <button className="btn btn-primary w-full text-black" type="submit" value="Send Parcel">Proceed to Confirm Booking</button>
    </form>
  );
};

export default ParcelBookingForm;

// 62-6 (Recap) Create EndPoint for POST Parcel Data --- ekhan theke shuru korbo, In-Sha-Allah