import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = ({ data }) => {



  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const { name } = useParams();
  const navigate = useNavigate();
  // Match brand name case-insensitively
  const ipo = data.find(
    (item) => item.brand.toLowerCase() === name.toLowerCase()
  );

  if (!ipo) {
    return (
      <div className="p-6 text-center text-red-600">
        <h1 className="text-lg font-bold">IPO not found</h1>
      </div>
    );
  }
  const { brand, logo, companyName, about, ipoDetails, timeline } = ipo;

  return (
    <div className=" fixed top-0 left-0  w-full bg-white p-10  h-full overflow-auto">
      <h5 className="absolute top-2 left-0 pl-10 w-full bg-white   text-sm opacity-40 ">  <span onClick={()=>navigate('/')}>Home</span> <span> <i class="ri-arrow-right-s-line "></i></span>  {brand} </h5>

      <nav className="sticky h-20  px-3 flex items-center">
        <div className=" w-full flex justify-between items-center">
          <div className=" first-part flex justify-start items-center gap-4 ">
            <span
              onClick={() => navigate("/")}
              className=" hidden md:flex  h-14 w-14 bg-white/30 rounded-md border-zinc-500 border-[0.2px]  items-center justify-center hover:cursor-pointer"
            >
              <i class="ri-arrow-left-s-line text-3xl"></i>
            </span>

            <span className="h-16 w-16 rounded-full  flex items-center justify-center overflow-hidden ">
              <img
                src={logo}
                alt={brand}
                className="w-full h-full object-contain object-center"
              />
            </span>
            <div className="flex flex-col">
              <h5 className=" text-lg uppercase font-semibold tracking-wide text-blue-950">
                {brand}
              </h5>
              <span className="text-sm opacity-60">{companyName}</span>
            </div>
          </div>
        </div>

        <div className=" hidden second-part  md:flex justify-between gap-4">
          <span className="h-14 w-14 bg-white/30 rounded-md  border-zinc-500 border-[0.2px] flex items-center justify-center">
            <i class="ri-file-download-line text-3xl"></i>
          </span>

          <button className="px-14 bg-blue-950 text-white rounded-md  capitalize text-lg ">
            Apply
          </button>
        </div>
      </nav>

      <div className=" mt-6  grid  rounded-lg  py-2 md:p-12  md:border shadow-sm justify-start   md:justify-center    ">
        <h5 className="leading-none text-lg  capitalize font-semibold tracking-wide mb-4 ">
          IPO details
        </h5>
        <div className="grid md:w-fit   md:p-4  p-5 text-left  justify-between  md:text-center rounded-md border-zinc-500 border-[1px] space-y-2 grid-cols-2 w-full text-sm md:grid-cols-4">
          <div className="flex flex-col">
            <p className="text-sm opacity-40 capitalize">Issue Size :</p>
            <strong className="text-[17.2px] text-blue-950">{ipoDetails.issueSize}</strong>
          </div>
          <div className="flex flex-col">
            <p className="text-sm opacity-40 capitalize">Price Range :</p>
            <strong className="text-[17.2px] text-blue-950">{ipoDetails.priceRange}</strong>
          </div>
          <div className="flex flex-col">
            <p className="text-sm opacity-40 capitalize">Minimum Amount :</p>
            <strong className="text-[17.2px] text-blue-950">{ipoDetails.minimumAmount}</strong>
          </div>
          <div className="flex flex-col">
            <p className="text-sm opacity-40 capitalize">LotSize :</p>
            <strong className="text-[17.2px] text-blue-950">{ipoDetails.lotSize}</strong>
          </div>

          <div className="flex flex-col">
            <p className="text-sm opacity-40 capitalize">Issue Dates :</p>
            <strong className="text-[17.2px] text-blue-950">{ipoDetails.issueDates}</strong>
          </div>
          <div className="flex flex-col">
            <p className="text-sm opacity-40 capitalize">Listed Date :</p>
            <strong className="text-[17.2px] text-blue-950">{ipoDetails.listedDate}</strong>
          </div>
          <div className="flex flex-col">
            <p className="text-sm opacity-40 capitalize">Listed Price :</p>
            <strong className="text-[17.2px] text-blue-950">{ipoDetails.listedPrice}</strong>
          </div>
          <div className="flex flex-col">
            <p className="text-sm opacity-40 capitalize">Listing Gains :</p>
            <strong className="text-lg">
              {ipoDetails.listingGains} ({" "}
              <span className="text-red-500">{ipoDetails.listingGains}</span>{" "}
              )
            </strong>
          </div>
        </div>

        <div className=" w-full mt-4">
          <div className="max-w-4xl mx-auto">
            {/* IPO Timeline */}
            <div className="bg-card rounded-lg p-8 mb-8 border shadow-sm">
              <h2 className="text-lg font-semibold text-card-foreground mb-8">
                IPO timeline
              </h2>

              <div className="relative">
                <div className="absolute top-5 left-0 right-6 h-0.5 bg-green-500 hidden md:block"></div>

                {/* Timeline steps */}
                <div className="grid grid-cols-1   md:grid-cols-6  md:gap-6">
                  {Object.entries(timeline).map(([key, date], index, arr) => (
                    <div
                      key={key}
                      className="relative flex flex-col md:items-center text-center"
                    >
                      {/* Checkpoint */}
                      <div className="w-10 h-10 bg-green-500 rounded-full flex  items-center justify-center mb-2 relative z-10">
                        <i className="ri-check-line text-white text-lg" />
                      </div>

                      {/* Connector line for desktop */}
                      {index < arr.length - 1 && (
                        <div className=" hidden  md:block absolute top-5 left-full w-full  h-full md:h-0.5 bg-green-500 z-0 translate-x-1"></div>
                      )}
                      {index < arr.length - 1 && (
                        <div className=" absolute  bg-green-500 top-0 left-3.5 w-1 h-full md:hidden   "></div>
                      )}

                      {/* Step Content */}
                      <div className={` ${isMobile ? "absolute" : ""} left-16 text-left md:text-center  md:space-y-2 md:mt-2 `}>
                        <p className="text-xs   text-card-foreground capitalize font-semibold">
                          {key.replace(/([A-Z])/g, " $1")}
                        </p>
                        <p className="text-xs text-muted-foreground ">{date}</p>
                      </div>

                      {/* Connector for mobile */}
                      {index < arr.length - 1 && (
                        <div className="w-0 h-8 bg-green-500 mt-2 md:hidden"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About the company */}
            <div className="bg-card rounded-lg p-8 border shadow-sm">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                About the company
              </h3>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                 {about}
                </p>

                <p>
                  Lorem ipsum dolor sit amet. Ea reprehenderit quia cum
                  consequuntur deliciti rem odio enim sit corporis galisum est
                  quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga
                  necessitatibus aut inventore enim. Et atque autem sed tempora
                  omnis qui corrupti explicabo sit quia reprehenderit nam esse
                  dolorem qui delectus odio ea temporibus ratione. Et voluptates
                  autem nam totam consequuntur non doloribus omnis non
                  repellendus harum. Lorem ipsum dolor sit amet. Ea
                  reprehenderit quia cum consequuntur deliciti rem odio enim sit
                  corporis galisum est quisquam magni ea sequi maxime. Aut
                  incidunt adipisci in fuga necessitatibus aut inventore enim.
                  Et atque autem sed tempora omnis qui corrupti explicabo sit
                  quia reprehenderit nam esse dolorem qui delectus odio ea
                  temporibus ratione. Et voluptates autem nam totam consequuntur
                  non doloribus omnis non repellendus harum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Details;
