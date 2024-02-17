import { useState } from "react";
import Ratting from "../../comonents/Ratting"


const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];

const Review = () => {
    const [reviewShow,setReviewShow] = useState(true);
    
  return (
    <>
        <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
            <li className="desc" onClick={()=> setReviewShow(!reviewShow)}>Description</li>
            <li className="rev" onClick={()=> setReviewShow(!reviewShow)}>Review</li>
        </ul>
         
        <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
            <div className="review-showing">
                <ul className="content lab-ul">
                    {
                        ReviewList.map((review,i)=>(
                            <li key={i}>
                                <div className="post-thumb">
                                    <img src={review.imgUrl} alt=""/>
                                </div>
                                <div className="post-content">
                                    <div className="entry-content">
                                        <div className="posted-on">
                                            <a href="#">{review.name}</a>
                                            <p>{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>{review.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="client-review">
                    <div className="review-form">
                        <div className="review-title">
                            <h5>{reviwtitle}</h5>
                        </div>
                        <form action="action" className="row">
                            <div className="col-md-4 col-12">
                                <input type="text" name="name" id="name" placeholder="Full Name *"/>
                            </div>
                            <div className="col-md-4 col-12">
                                <input type="email" name="email" id="name" placeholder="Your Email *"/>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="rating">
                                    <span className="me-2">Your Rating</span>
                                    <Ratting/>
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <textarea name="message" id="message" rows={8} placeholder="Type your message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="default-button" type="submit">
                                    <span>Submit Review</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* descriptin section*/}
            <div className="description">
                <p>Lorem Ipsum is simply dummy text of th
                 printing and typesetting industry. Lorem 
                 Ipsum has been the industry standard 
                 dummy text ever since the 1500s, when an 
                 unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.
                </p>
                <div className="post-item">
                    <div className="post-thumb">
                        <img src="../src/assets/images/shop/01.jpg"/>
                    </div>
                    <div className="post-content">
                        <ul className="lab-ul">
                            <li>Lorem Ipsum is simply dummy text of thprinting and typesetting industry. Lorem </li>
                            <li>Lorem Ipsum is simply dummy text of thprinting and typesetting industry. Lorem </li>
                            <li>Lorem Ipsum is simply dummy text of thprinting and typesetting industry. Lorem </li>
                            <li>Lorem Ipsum is simply dummy text of thprinting and typesetting industry. Lorem </li>
                            <li>Lorem Ipsum is simply dummy text of thprinting and typesetting industry. Lorem </li>
                            <li>Lorem Ipsum is simply dummy text of thprinting and typesetting industry. Lorem </li>
                            <li>Lorem Ipsum is simply dummy text of thprinting and typesetting industry. Lorem </li>
                        </ul>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of th
                 printing and typesetting industry. Lorem 
                 Ipsum has been the industry standard 
                 dummy text ever since the 1500s, when an 
                 unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.
                </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Review