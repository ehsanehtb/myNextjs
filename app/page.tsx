import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { events } from "@/lib/constants"


const page = () => {
  return (
    <section>
      <h1 className="text-center">hi everyone <br/> welcom to my first nextjs program</h1>
      
      <ExploreBtn/>

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
              <li key={event.title}>
                <EventCard {...event}/>
              </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page