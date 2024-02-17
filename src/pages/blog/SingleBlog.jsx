import { useState } from "react"
import blogList from "../../utilis/blogdata"
import { useParams } from "react-router";
import BannerPage from "../../comonents/BannerPage";
import Tags from "../shop/Tages"
import PopPosts from "../shop/PopPosts"

const socialList = [ { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', }, ]

const SingleBlog = () => {
    const [blog,setBlog] = useState(blogList);

    const {id} = useParams();

    const result = blog.filter((b)=> b.id === Number(id)); 
 
  return (
    <div>
    <BannerPage title={result.map((b,i)=>(<h3 key={i}>{b.title}</h3>))} curPage={"Blog / Blog Details"}/>

    <div className="blog-section blog-single padding-tb section-bh">
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-lg-8 col-12">
                    <article>
                        <div className="section-wrapper">
                            <div className="row row-cols-1 justify-content-center  g-4">
                                <div className="col">
                                    <div className="post-item style-2">
                                        <div className="post-inner">
                                            {
                                                result.map((item)=>(
                                                    <div key={item.id}>
                                                        <div className="post-thumb">
                                                            <img src={item.imgUrl} alt=""/>
                                                        </div>
                                                        <div className="post-content">
                                                            <h3>{item.title}</h3>
                                                            <div className="meta-post">
                                                                <ul className="lab-ul">
                                                                    {
                                                                        item.metaList.map((b,i)=>(
                                                                            <li key={i}>
                                                                                <i className={b.iconName}>{b.text}</i>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                            <p>{item.desc}{item.desc} {item.desc}</p>
                                                            <blockquote>
                                                                <p>{item.desc}</p>
                                                               <cite> <a href="#">....Mellisa Hunter</a></cite>
                                                            </blockquote>
                                                            <p>{item.desc} {item.desc} {item.desc}</p>
                                                            
                                                            <img src="../src/assets/images/blog/single/01.jpg" alt=""/>
                                                            <p>{item.desc} {item.desc} {item.desc}</p>
                                                            <div className="video-thumb">
                                                                    <img src="../src/assets/images/blog/single/02.jpg"/>
                                                                    <a  target="blank" className="video-button popup" href="https://www.youtube.com/watch?v=EE8cHyjCNLE" >
                                                                       <i className="icofont-ui-play"></i> 
                                                                    </a>
                                                            </div>
                                                            <p>{item.desc} {item.desc} {item.desc}</p>
                                                            <div className="tags-section">
                                                                    <ul className="tags lab-ul">
                                                                        <li>
                                                                            <a href="#">Agency</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Business</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Personal</a>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="lab-ul social-icons">
                                                                        {
                                                                            socialList.map((icon,i)=>(
                                                                                <li key={i}>
                                                                                    <a href="#" className={icon.className}>
                                                                                        <i className={icon.iconName }></i>
                                                                                    </a>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="navigations-part">
                                    <div className="left">
                                        <a href="#" className="prev">
                                            <i className="icofont-double-left"></i>
                                            Previuos Blog
                                        </a>
                                        <a href="#" className="title">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </a>
                                    </div>
                                    <div className="right">
                                    <a href="#" className="next">
                                        <i className="icofont-double-right"></i>
                                        Next Blog
                                    </a>
                                    <a href="#" className="title">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-lg-4 col-12">
                    <Tags/>
                    <PopPosts/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SingleBlog