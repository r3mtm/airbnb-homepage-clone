import React from 'react'
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/9299f696-1eac-40fa-b395-2277bfd846db.jpg?im_w=1200"
                    title="Entire guest house"
                    description="Glamping in the city with panoramic view!"
                    price="$10/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/d6b5ac3b-2f0b-4e81-9519-d34063f8b11e.jpg?im_w=1200"
                    title="Private room"
                    description="Beautiful Den; Private Space, Clean and Cozy"
                    price="$12/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/40c520a9-033b-4257-bda4-84ab745c3e17.jpg?im_w=1200"
                    title="Private room"
                    description="Rapunzel Rooftop"
                    price="$11/night"
                />
            </div>
        </div>
    )
}

export default Home
