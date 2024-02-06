import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blogs from '../../api/blogs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            
                        <div>
        {/* <FontAwesomeIcon icon={faNewspaper} style={{ color: '#1d5d1d', fontSize: '2em' }} /> */}
        <h1 style={{ color: '#1d5d1d', display: 'inline-block', marginLeft: '0.5em' }}>NOS ACTUS</h1>
      </div>                      
                        </div>
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        {blogs.map((blog, bl) => (
                            <div className="col col-lg-6 col-12" key={bl}>
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <Image src={blog.screens} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <ul>
                                            <li>{blog.create_at}</li>
                                            <li><i className="fa fa-heart" aria-hidden="true"></i>56</li>
                                            <li><i className="fa fa-comments-o" aria-hidden="true"></i> 78</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} href='/' as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;