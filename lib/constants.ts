export type EventItem = {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}


export const events: EventItem[] = [
    {
      image: "/images/event1.png",
      title: "Next.js Conf",
      slug: "nextjs-conf",
      location: "San Francisco, USA",
      date: "March 18, 2025",
      time: "10:00 AM",
    },
    {
      image: "/images/event2.png",
      title: "React Summit",
      slug: "react-summit",
      location: "Amsterdam, Netherlands",
      date: "April 10, 2025",
      time: "09:30 AM",
    },
    {
      image: "/images/event3.png",
      title: "JS World Conference",
      slug: "js-world-conference",
      location: "Berlin, Germany",
      date: "May 2, 2025",
      time: "11:00 AM",
    },
    {
      image: "/images/event4.png",
      title: "Global AI Hackathon",
      slug: "global-ai-hackathon",
      location: "Remote / Online",
      date: "May 25, 2025",
      time: "All Day",
    },
    {
      image: "/images/event5.png",
      title: "Full-Stack Dev Meetup",
      slug: "fullstack-dev-meetup",
      location: "London, UK",
      date: "June 7, 2025",
      time: "06:30 PM",
    },
  ];
  