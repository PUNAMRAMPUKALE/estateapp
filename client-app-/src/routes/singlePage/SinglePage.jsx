import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummyData";

function SinglePage() {
  const { images, title, address, price, description } = singlePostData;

  const generalFeatures = [
    {
      icon: "/utility.png",
      title: "Utilities",
      desc: "Renter is responsible",
    },
    {
      icon: "/pet.png",
      title: "Pet Policy",
      desc: "Pets Allowed",
    },
    {
      icon: "/fee.png",
      title: "Property Fees",
      desc: "Must have 3x the rent in total household income",
    },
  ];

  const nearbyPlaces = [
    { icon: "/school.png", label: "School", desc: "250m away" },
    { icon: "/pet.png", label: "Bus Stop", desc: "100m away" },
    { icon: "/fee.png", label: "Restaurant", desc: "200m away" },
  ];

  const sizes = [
    { icon: "/size.png", label: "80 sqft" },
    { icon: "/bed.png", label: "2 beds" },
    { icon: "/bath.png", label: "1 bathroom" },
  ];

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{address}</span>
                </div>
                <div className="price">${price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{description}</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            {generalFeatures.map((item, i) => (
              <div className="feature" key={i}>
                <img src={item.icon} alt={item.title} />
                <div className="featureText">
                  <span>{item.title}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="title">Sizes</p>
          <div className="sizes">
            {sizes.map((item, i) => (
              <div className="size" key={i}>
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            {nearbyPlaces.map((place, i) => (
              <div className="feature" key={i}>
                <img src={place.icon} alt={place.label} />
                <div className="featureText">
                  <span>{place.label}</span>
                  <p>{place.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>

          <div className="buttons">
            <button>
              <img src="/chat.png" alt="chat" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="save" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
