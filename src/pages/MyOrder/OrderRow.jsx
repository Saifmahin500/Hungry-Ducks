

const OrderRow = ({ order }) => {
    const { FoodName,price,BuyerName,image,BuyerEmail,} = order;
    return (
       
          
             <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src={image} alt="Food Image" />
                            </div>
                        </div>
                        <div>
                            <div className=" text-xl font-bold">{BuyerName}</div>
                            <div className="text-sm opacity-50">{BuyerEmail}</div>
                        </div>
                    </div>
                </td>
                <td  className="font-semibold">
                    {FoodName}  
                </td>
                <td >{price}</td>
                
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                    <label>
                    <button className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    </label>
                </th>
            </tr>
         
    );
};

export default OrderRow;