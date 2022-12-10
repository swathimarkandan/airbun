import "./styles.css"
import hotel from "../../assets/cards/hotel-1.jpeg";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { fontSize } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
export default function Cards({cards})
{
    return (
        <div className="card-box">
 <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
         navigation={false}
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {cards.imgSrc.map((srcs,i)=>(
            <SwiperSlide key={i}>
            <img className="cards-img"  src={srcs}></img>
            </SwiperSlide>
        ))}
 
      </Swiper>
       
        <div className="cards-info">
            <h2 >{cards.title}</h2>
            <div className="info-emoj">
               <StarRateRoundedIcon className="ic"/>
                <p className="rating"> {cards.rating}</p>
            </div>
        </div>
        <p style={{margin:"0",fontWeight:"bold",color:"var(--lgrey)",textAlign:"left"}}>{cards.desc}</p>
        <p style={{ fontWeight:"bold",color:"var(--lgrey)",textAlign:"left"}}>{cards.date}</p>
        <p style={{margin:"0",fontSize:"1rem",fontWeight:"bold",color:"var(--black)",textAlign:"left"}}> ₹{cards.price}</p>
        
        </div>
    );
}