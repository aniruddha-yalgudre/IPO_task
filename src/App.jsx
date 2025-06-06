import React, { useRef } from 'react'
import { data, Route, Routes } from 'react-router-dom';
import Details from './Components/Details';
import { useNavigate } from 'react-router-dom';

const App = () => {
 const containerRef=useRef(null)
 const navigate = useNavigate();

const data= [
  {
    "brand": "OYO",
    "logo": "https://images.seeklogo.com/logo-png/44/1/oyo-rooms-logo-png_seeklogo-443633.png",
    "companyName": "OYO Private Limited",
    "about": "OYO is a leading global hospitality chain offering standardized and budget-friendly stays across multiple countries. It is focused on using technology to improve hotel operations and customer experience.",
    "ipoDetails": {
      "issueSize": "₹8,430 crore",
      "priceRange": "₹850 - ₹875",
      "minimumAmount": "₹14,875",
      "lotSize": 17,
      "issueDates": "Dec 1 - Dec 3, 2024",
      "listedDate": "Dec 10, 2024",
      "listedPrice": "₹910",
      "listingGains": "4%"
    },
    "timeline": {
      "biddingStarts": "Dec 1, 2024",
      "biddingEnds": "Dec 3, 2024",
      "allotmentFinalization": "Dec 6, 2024",
      "refundInitiation": "Dec 7, 2024",
      "dematTransfer": "Dec 9, 2024",
      "listingDate": "Dec 10, 2024"
    }
  },
  {
    "brand": "Bajaj Energy",
    "logo": "https://www.bajajenergy.com/bajajenergy_assets/s3fs-public/images/Bajaj%20Energy_300x118_Png.png",
    "companyName": "Bajaj Energy Limited",
    "about": "Bajaj Energy is one of the largest private sector thermal generation companies in Uttar Pradesh, India. The company builds, operates, and maintains thermal power plants.",
    "ipoDetails": {
      "issueSize": "₹5,450 crore",
      "priceRange": "₹300 - ₹305",
      "minimumAmount": "₹14,640",
      "lotSize": 48,
      "issueDates": "Nov 20, 2024 - Nov 22, 2024",
      "listedDate": "Nov 29, 2024",
      "listedPrice": "₹310",
      "listingGains": "1.6%"
    },
    "timeline": {
      "biddingStarts": "Nov 20, 2024",
      "biddingEnds": "Nov 22, 2024",
      "allotmentFinalization": "Nov 25, 2024",
      "refundInitiation": "Nov 26, 2024",
      "dematTransfer": "Nov 28, 2024",
      "listingDate": "Nov 29, 2024"
    }
  },
  {
    "brand": "Go Air",
    "logo": "https://images.seeklogo.com/logo-png/30/1/go-air-logo-png_seeklogo-304178.png",
    "companyName": "Go Airlines (India) Ltd",
    "about": "Go Air, now rebranded as Go First, is a low-cost Indian airline known for budget air travel and domestic connectivity.",
    "ipoDetails": {
      "issueSize": "₹3,600 crore",
      "priceRange": "₹95 - ₹100",
      "minimumAmount": "₹13,000",
      "lotSize": 130,
      "issueDates": "Oct 10, 2024 - Oct 13, 2024",
      "listedDate": "Oct 21, 2024",
      "listedPrice": "₹97",
      "listingGains": "-3%"
    },
    "timeline": {
      "biddingStarts": "Oct 10, 2024",
      "biddingEnds": "Oct 13, 2024",
      "allotmentFinalization": "Oct 16, 2024",
      "refundInitiation": "Oct 17, 2024",
      "dematTransfer": "Oct 20, 2024",
      "listingDate": "Oct 21, 2024"
    }
  },
  {
    "brand": "PharmEasy",
    "logo": "https://imgs.search.brave.com/XUqi1uG6tkraI33eZVK2prcTehuKMSJADClFHZ9ZQCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZWNo/c3RvcnkuaW4vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDIv/UGhhcm1FYXN5Lmpw/Zw",
    "companyName": "API Holdings Ltd",
    "about": "PharmEasy is an Indian e-pharmacy platform that provides medicines, diagnostic tests, and telehealth services, aiming to digitize healthcare delivery.",
    "ipoDetails": {
      "issueSize": "₹6,250 crore",
      "priceRange": "₹900 - ₹950",
      "minimumAmount": "₹14,820",
      "lotSize": 15,
      "issueDates": "Jan 10, 2025 - Jan 12, 2025",
      "listedDate": "Jan 19, 2025",
      "listedPrice": "₹980",
      "listingGains": "3.2%"
    },
    "timeline": {
      "biddingStarts": "Jan 10, 2025",
      "biddingEnds": "Jan 12, 2025",
      "allotmentFinalization": "Jan 15, 2025",
      "refundInitiation": "Jan 16, 2025",
      "dematTransfer": "Jan 18, 2025",
      "listingDate": "Jan 19, 2025"
    }
  },
  {
    "brand": "Ola Electric",
    "logo": "https://images.seeklogo.com/logo-png/47/1/ola-cabs-logo-png_seeklogo-472889.png",
    "companyName": "Ola Electric Mobility Pvt Ltd",
    "about": "Ola Electric is a leader in India's EV revolution, manufacturing electric scooters and developing charging infrastructure.",
    "ipoDetails": {
      "issueSize": "₹7,500 crore",
      "priceRange": "₹320 - ₹340",
      "minimumAmount": "₹13,600",
      "lotSize": 40,
      "issueDates": "Feb 15, 2025 - Feb 18, 2025",
      "listedDate": "Feb 25, 2025",
      "listedPrice": "₹355",
      "listingGains": "4.4%"
    },
    "timeline": {
      "biddingStarts": "Feb 15, 2025",
      "biddingEnds": "Feb 18, 2025",
      "allotmentFinalization": "Feb 20, 2025",
      "refundInitiation": "Feb 21, 2025",
      "dematTransfer": "Feb 24, 2025",
      "listingDate": "Feb 25, 2025"
    }
  },
  {
    "brand": "Swiggy",
    "logo": "https://www.bajajenergy.com/bajajenergy_assets/s3fs-public/images/Bajaj%20Energy_300x118_Png.png",
    "companyName": "Bundl Technologies Pvt Ltd",
    "about": "Swiggy is India's leading food delivery platform, also expanding into grocery delivery and quick commerce services.",
    "ipoDetails": {
      "issueSize": "₹9,000 crore",
      "priceRange": "₹1,200 - ₹1,250",
      "minimumAmount": "₹15,000",
      "lotSize": 12,
      "issueDates": "Mar 15, 2025 - Mar 18, 2025",
      "listedDate": "Mar 25, 2025",
      "listedPrice": "₹1,300",
      "listingGains": "4%"
    },
    "timeline": {
      "biddingStarts": "Mar 15, 2025",
      "biddingEnds": "Mar 18, 2025",
      "allotmentFinalization": "Mar 20, 2025",
      "refundInitiation": "Mar 21, 2025",
      "dematTransfer": "Mar 24, 2025",
      "listingDate": "Mar 25, 2025"
    }
  },
  {
    "brand": "Byju's",
    "logo": "https://seeklogo.com/images/B/byju-s-logo-C756458128-seeklogo.com.png",
    "companyName": "Think and Learn Pvt Ltd",
    "about": "Byju's is India's largest edtech company, offering personalized learning programs for students through its digital platform.",
    "ipoDetails": {
      "issueSize": "₹10,000 crore",
      "priceRange": "₹1,500 - ₹1,550",
      "minimumAmount": "₹15,500",
      "lotSize": 10,
      "issueDates": "Apr 10, 2025 - Apr 13, 2025",
      "listedDate": "Apr 20, 2025",
      "listedPrice": "₹1,600",
      "listingGains": "3.2%"
    },
    "timeline": {
      "biddingStarts": "Apr 10, 2025",
      "biddingEnds": "Apr 13, 2025",
      "allotmentFinalization": "Apr 16, 2025",
      "refundInitiation": "Apr 17, 2025",
      "dematTransfer": "Apr 19, 2025",
      "listingDate": "Apr 20, 2025"
    }
  },
  {
    "brand": "Nykaa",
    "logo": "https://images.seeklogo.com/logo-png/35/1/nykaa-logo-png_seeklogo-358073.png",
    "companyName": "FSN E-Commerce Ventures Ltd",
    "about": "Nykaa is India's leading beauty and wellness e-commerce platform, offering a wide range of beauty products and services.",
    "ipoDetails": {
      "issueSize": "₹5,200 crore",
      "priceRange": "₹1,085 - ₹1,125",
      "minimumAmount": "₹14,000",
      "lotSize": 13,
      "issueDates": "May 5, 2025 - May 7, 2025",
      "listedDate": "May 15, 2025",
      "listedPrice": "₹1,150",
      "listingGains": "2.2%"
    },
    "timeline": {
      "biddingStarts": "May 5, 2025",
      "biddingEnds": "May 7, 2025",
      "allotmentFinalization": "May 10, 2025",
      "refundInitiation": "May 11, 2025",
      "dematTransfer": "May 14, 2025",
      "listingDate": "May 15, 2025"
    }
  },
  {
    "brand": "Zomato",
    "logo": "https://images.seeklogo.com/logo-png/35/1/zomato-logo-png_seeklogo-354338.png",
    "companyName": "Zomato Ltd",
    "about": "Zomato is a leading food delivery and restaurant discovery platform, operating in multiple countries across the globe.",
    "ipoDetails": {
      "issueSize": "₹9,375 crore",
      "priceRange": "₹72 - ₹76",
      "minimumAmount": "₹13,500",
      "lotSize": 175,
      "issueDates": "Jun 1, 2025 - Jun 3, 2025",
      "listedDate": "Jun 10, 2025",
      "listedPrice": "₹78",
      "listingGains": "2.6%"
    },
    "timeline": {
      "biddingStarts": "Jun 1, 2025",
      "biddingEnds": "Jun 3, 2025",
      "allotmentFinalization": "Jun 6, 2025",
      "refundInitiation": "Jun 7, 2025",
      "dematTransfer": "Jun 9, 2025",
      "listingDate": "Jun 10, 2025"
    }
  }
]
    
  return (
   <>

    <div className='h-full w-full bg-gradient-to-tr from-zinc-300 to bg-gray-200 '>
      <div ref={containerRef} className='absolute top-0 left-0 h-screen w-full p-5  md:p-10 flex justify-center items-center  md:gap-10 flex-nowrap overflow-hidden'>
        <div className=" w-full md:w-4/5 bg-white backdrop-blur-sm border-zinc-400 border-2 rounded-xl  md:p-4 mb-4 overflow-hidden">
          <div className="w-full h-full rounded-[8px] border border-zinc-400 overflow-hidden">
            <table className="w-full ">
              <thead>
                <tr className="border-b bg-[#e5e5e5] border-white/20 text-sm">
                  <th className="text-left py-2 px-3">Company / Issue Date</th>
                  <th className="text-left py-2 px-3">Issue Size</th>
                  <th className="text-left py-2 px-3">Price Range</th>
                  <th className="text-left py-2 px-3">Min Invest / qty</th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto max-h-[40vh]">
                {data.map((dets, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-zinc-300 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      const details = {
                        brand: dets.brand,
                        logo: dets.logo,
                        companyName: dets.companyName,
                        about: dets.about,
                        ipoDetails: dets.ipoDetails,
                        timeline:dets.timeline
                      };
                      
                      navigate(`/details/${dets.brand}`, { state: details });
                    }}
                  >
                    <td className="py-1 px-3">
                      <div className='flex justify-start items-center gap-4'>
                        <span className='h-10 w-10 rounded-full border-zinc-500 border-[1px] flex items-center justify-center overflow-hidden'>
                          <img src={dets.logo} alt={dets.brand} className="w-full h-full object-contain object-center" />
                        </span> 
                        <div className='flex flex-col'>
                          <h5 className='leading-none text-sm uppercase font-semibold tracking-wide text-blue-950'>{dets.brand}</h5>
                          <span className="text-[12px] opacity-40">{dets.ipoDetails.issueDates}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-1 px-3">{dets.ipoDetails.issueSize}</td>
                    <td className="py-1 px-3">{dets.ipoDetails.priceRange}</td>
                    <td className="py-1 px-3">{dets.ipoDetails.minimumAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

<Routes>
  <Route path='/details/:name' element={<Details data={data} />} />
</Routes>
   
   
   </>

  )
}




export default App