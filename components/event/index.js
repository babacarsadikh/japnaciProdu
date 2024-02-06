import React from 'react'
import Events from '../../api/event'
import event4 from '/public/images/event/1.png'
import event5 from '/public/images/event/2.png'
import Link from 'next/link'
import Image from 'next/image'


const EventSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="event-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>EVENTS</span>
                            </div>
                            <h2>Our Upcoming Events</h2>
                            <p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {Events.slice(0, 3).map((event, eitem) => (
                            <div className="event-item" key={eitem}>
                                <div className="event-img">
                                    <Image src={event.eImg} alt="" />
                                </div>
                                <div className="event-text">
                                    <div className="event-left">
                                        <div className="event-l-text">
                                            <span>MAR</span>
                                            <h4>28</h4>
                                        </div>
                                    </div>
                                    <div className="event-right">
                                        <ul>
                                            <li><i className="fi flaticon-clock"></i> {event.time}</li>
                                            <li><i className="fi flaticon-pin"></i> {event.location}</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} href={'/event/[slug]'} as={`/event/${event.slug}`}>{event.eTitle}</Link></h2>
                                        <p>It is long estblished fact that a reader will be distracted aliquip exea commodo consequat velit esse cillum fugiat.</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="shape1"><Image src={event4} alt="" /></div>
            <div className="shape2"><Image src={event5} alt="" /></div>
        </div>
    )
}

export default EventSection;