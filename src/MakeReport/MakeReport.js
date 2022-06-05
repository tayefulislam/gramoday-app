import React from 'react';

const MakeReport = () => {

    const handleSubmit = (event) => {

        event.preventDefault()


        const userId = event.target.userid.value;
        const marketId = event.target.marketid.value;
        const marketName = event.target.marketname.value;
        const cmdtyId = event.target.cmdtyid.value;
        const marketType = event.target.markettype.value;
        const cmdtyName = event.target.cmdtyname.value;
        const convFctr = event.target.convfctr.value;
        const price = event.target.price.value;
        const priceUnit = event.target.priceunit.value;




    }
    return (
        <div className='flex justify-center items-center'>

            <div className='card w-96'>

                <h1 className='text-center text-2xl font-bold'>reportDetails</h1>

                <div className='card-body'>


                    <form onSubmit={handleSubmit} >

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">User ID:</span>

                            </label>
                            <input type="text" required placeholder="User ID" name='userid' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Market ID</span>

                            </label>
                            <input type="text" required placeholder="marketID" name='marketid' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Market Name</span>

                            </label>
                            <input type="text" required placeholder="Market Name" name='marketname' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Cmdty ID</span>

                            </label>
                            <input type="text" required placeholder="Cmdty ID" name='cmdtyid' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Market Type</span>

                            </label>
                            <input type="text" required placeholder="Market Type" name='markettype' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Cmdty Name</span>

                            </label>
                            <input type="text" required placeholder="Cmdty Name" name='cmdtyname' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">convFctr</span>

                            </label>
                            <input type="text" required placeholder="convFctr" name='convfctr' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Price</span>

                            </label>
                            <input type="text" required placeholder="Price" name='price' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Price Unit</span>

                            </label>


                            <select name='priceunit' required class="select select-error w-full max-w-xs">

                                <option value='Pack'>Pack</option>
                                <option value='Quintal'>Quintal</option>



                            </select>
                        </div>


                        <div className='flex justify-center items-center'>
                            <input className='btn' type="submit" value="Submit" />
                        </div>



                    </form>

                </div>


            </div>



        </div>
    );
};

export default MakeReport;